# Performance Review: IndexNew2.tsx & Site-Wide Issues

## 🔴 CRITICAL PERFORMANCE ISSUES

### 1. **ShaderGradient Background - HIGH PERFORMANCE COST** ⚠️ **BIGGEST ISSUE**

**Location**: `src/App.tsx` lines 38-80

**Current Settings**:
- `pixelDensity={1.7}` - **VERY HIGH** (default is 1.0)
- `frameRate={10}` - Continuous animation
- `grain="on"` - Additional rendering cost
- `animate="on"` - Always animating
- `brightness={1.2}` - Extra processing

**Impact**: 
- **WebGL shader runs continuously** consuming GPU resources
- High pixel density = 1.7x more pixels to render
- Grain effect adds post-processing overhead
- Can cause background to not load on slower devices
- Blocks main thread during initialization

**Fix Priority**: 🔥 CRITICAL

**Solutions**:
```tsx
// Option 1: Reduce pixel density (BEST)
pixelDensity={1.0}  // Reduce from 1.7 to 1.0 (30% less pixels)

// Option 2: Lower frame rate
frameRate={5}  // Reduce from 10 to 5 (50% less updates)

// Option 3: Disable grain
grain="off"  // Remove grain effect

// Option 4: Conditional animation (pause when tab hidden)
animate={document.visibilityState === 'visible' ? "on" : "off"}

// Option 5: Reduce brightness calculation
brightness={1.0}  // Reduce from 1.2
```

**Recommended**: Apply all of the above for maximum performance gain.

---

### 2. **Excessive requestAnimationFrame Loops** ⚠️ **HIGH PRIORITY**

**Location**: `src/pages/IndexNew2.tsx` - Multiple locations

**Issues Found**:
- **Line 414**: `updateScale()` runs continuously in RAF loop
- **Line 483, 490**: Auto-scroll animation RAF loops
- **Line 591, 613**: Snap animation RAF loops
- **Line 395-396**: Double RAF for scale recalculation

**Impact**:
- Multiple RAF loops running simultaneously
- Constant state updates causing re-renders
- High CPU/GPU usage even when idle
- Can cause janky scrolling

**Fix Priority**: 🔥 HIGH

**Solutions**:
```tsx
// 1. Throttle updateScale() - only update when scale actually changes
const updateScale = () => {
  const diff = targetScale - currentScale;
  if (Math.abs(diff) > 0.001) {
    currentScale += diff * 0.15;
    setScale(currentScale);
    animationFrameId = requestAnimationFrame(updateScale);
  } else {
    animationFrameId = 0; // Stop loop when done
  }
};

// 2. Use single RAF loop for all animations
let rafId: number | null = null;
const animate = () => {
  updateScale();
  // ... other animations
  rafId = requestAnimationFrame(animate);
};

// 3. Pause animations when tab is hidden
useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else {
      // Resume animations
    }
  };
  document.addEventListener('visibilitychange', handleVisibilityChange);
  return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
}, []);
```

---

### 3. **Heavy backdrop-filter Usage** ⚠️ **HIGH PRIORITY**

**Location**: Throughout `IndexNew2.tsx` - Multiple cards and sections

**Issues Found**:
- **128 instances** of `backdrop-filter: blur()` in the file
- Multiple overlapping blur effects
- Each blur is expensive (GPU-intensive)
- Cards have `backdropFilter: "blur(24px)"` - very heavy

**Impact**:
- **Major GPU performance hit**
- Causes laggy scrolling
- Can cause background to not render properly
- Especially bad on mobile devices

**Fix Priority**: 🔥 HIGH

**Solutions**:
```tsx
// 1. Reduce blur amount
backdropFilter: "blur(8px)"  // Reduce from 24px to 8px

// 2. Use CSS backdrop-filter instead of inline styles (better optimization)
className="backdrop-blur-md"  // Tailwind: 12px blur

// 3. Remove blur from non-visible elements
// Only apply blur when element is actually visible
backdropFilter: scrollProgress > HERO_EXIT_RANGE ? "blur(8px)" : "none"

// 4. Use will-change sparingly
willChange: isVisible ? "backdrop-filter" : "auto"
```

---

### 4. **Inefficient Event Handlers** ⚠️ **MEDIUM-HIGH PRIORITY**

**Location**: `src/pages/IndexNew2.tsx` lines 550-850

**Issues Found**:
- `handleWheel` runs on every scroll event
- `handleTouchMove` with `preventDefault()` can block rendering
- Multiple event listeners attached to same elements
- No debouncing/throttling on scroll handlers
- `getBoundingClientRect()` called frequently (forces layout recalculation)

**Impact**:
- Scroll lag
- Touch interactions feel unresponsive
- Layout thrashing

**Fix Priority**: ⚠️ MEDIUM-HIGH

**Solutions**:
```tsx
// 1. Throttle handleWheel
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

const handleWheel = throttle((e: WheelEvent) => {
  // ... existing code
}, 16); // ~60fps

// 2. Cache getBoundingClientRect() results
const containerRectRef = useRef<DOMRect | null>(null);
const updateContainerRect = () => {
  if (aboutMeScrollContainerRef.current) {
    containerRectRef.current = aboutMeScrollContainerRef.current.getBoundingClientRect();
  }
};
// Only update on resize/scroll, not every touch event

// 3. Use passive listeners where possible
container.addEventListener("wheel", handleWheel, { passive: false }); // Keep false for preventDefault
container.addEventListener("touchstart", handleTouchStart, { passive: true }); // Good
```

---

### 5. **Missing Memoization** ⚠️ **MEDIUM PRIORITY**

**Location**: `src/pages/IndexNew2.tsx` - renderFactCard and other functions

**Issues Found**:
- `renderFactCard` recreated on every render
- Complex style calculations run on every render
- Transform calculations repeated unnecessarily
- No React.memo for expensive components

**Impact**:
- Unnecessary re-renders
- Repeated calculations
- Slower component updates

**Fix Priority**: ⚠️ MEDIUM

**Solutions**:
```tsx
// 1. Memoize renderFactCard
const renderFactCard = useCallback((
  fact: typeof displayedFacts[number],
  index: number,
  keyPrefix: string,
  layout: "grid" | "stack" = "grid"
) => {
  // ... existing code
}, [flippedCards, isRotating, isMobile, maxCardHeight]);

// 2. Memoize style calculations
const heroTransform = useMemo(() => {
  if (scrollProgress <= HERO_EXIT_RANGE) {
    return `scale(${scale})`;
  }
  return undefined;
}, [scale, scrollProgress]);

// 3. Use React.memo for expensive components
const MemoizedAboutMeContent = React.memo(AboutMeContent);
```

---

### 6. **Background Loading Issues** ⚠️ **MEDIUM PRIORITY**

**Location**: `src/App.tsx` - ShaderGradient

**Issues Found**:
- ShaderGradient loads immediately on app mount
- No loading state or fallback
- WebGL context creation can fail silently
- No error handling

**Impact**:
- Background may not appear on some devices
- No feedback if WebGL fails
- Blocks initial render

**Fix Priority**: ⚠️ MEDIUM

**Solutions**:
```tsx
// 1. Add loading state
const [shaderLoaded, setShaderLoaded] = useState(false);

// 2. Add error handling
<ShaderGradientCanvas
  onError={() => {
    console.warn('ShaderGradient failed to load');
    setShaderLoaded(false);
  }}
  onLoad={() => setShaderLoaded(true)}
>

// 3. Add fallback background
{!shaderLoaded && (
  <div className="fixed inset-0 bg-gradient-to-br from-[#1E3363] via-[#402445] to-[#614A55]" />
)}

// 4. Lazy load ShaderGradient
const ShaderGradient = lazy(() => import('shadergradient').then(m => ({ default: m.ShaderGradient })));
```

---

### 7. **Too Many State Updates** ⚠️ **MEDIUM PRIORITY**

**Location**: `src/pages/IndexNew2.tsx` - Multiple useState calls

**Issues Found**:
- `setScale()` called frequently in RAF loop
- `setScrollProgress()` called on every scroll
- Multiple state updates can batch but still cause re-renders
- State updates trigger re-renders of entire component tree

**Impact**:
- Frequent re-renders
- Layout recalculations
- Paint operations

**Fix Priority**: ⚠️ MEDIUM

**Solutions**:
```tsx
// 1. Batch state updates
React.startTransition(() => {
  setScale(newScale);
  setScrollProgress(newProgress);
});

// 2. Use refs for values that don't need to trigger re-renders
const scaleRef = useRef(1);
scaleRef.current = newScale; // No re-render
// Only call setScale when UI actually needs to update

// 3. Debounce progress updates
const debouncedSetScrollProgress = useMemo(
  () => debounce((progress: number) => setScrollProgress(progress), 16),
  []
);
```

---

## 📊 Performance Impact Summary

| Issue | Impact | Estimated FPS Impact | Priority |
|-------|--------|----------------------|----------|
| **ShaderGradient (pixelDensity 1.7)** | 🔴 CRITICAL | **-15-20 FPS** | 🔥 CRITICAL |
| **Multiple RAF Loops** | 🟠 HIGH | **-10-15 FPS** | 🔥 HIGH |
| **Heavy backdrop-filter (24px blur)** | 🟠 HIGH | **-10-15 FPS** | 🔥 HIGH |
| **Inefficient Event Handlers** | 🟡 MEDIUM-HIGH | **-5-10 FPS** | ⚠️ MEDIUM-HIGH |
| **Missing Memoization** | 🟡 MEDIUM | **-3-5 FPS** | ⚠️ MEDIUM |
| **Background Loading** | 🟡 MEDIUM | **Visual glitches** | ⚠️ MEDIUM |
| **Too Many State Updates** | 🟡 MEDIUM | **-3-5 FPS** | ⚠️ MEDIUM |

**Total Estimated Impact: 46-70 FPS loss** (should target 60 FPS)

---

## 🎯 Recommended Fix Priority

### Phase 1: CRITICAL (Do Immediately) 🔥

1. **Reduce ShaderGradient pixelDensity** (1.7 → 1.0)
   - **Impact**: +15-20 FPS
   - **Time**: 2 minutes

2. **Disable ShaderGradient grain**
   - **Impact**: +5-10 FPS
   - **Time**: 1 minute

3. **Reduce backdrop-filter blur** (24px → 8px)
   - **Impact**: +10-15 FPS
   - **Time**: 10 minutes

### Phase 2: HIGH (Do This Week) ⚠️

4. **Consolidate RAF loops**
   - **Impact**: +10-15 FPS
   - **Time**: 30 minutes

5. **Throttle event handlers**
   - **Impact**: +5-10 FPS
   - **Time**: 20 minutes

6. **Add visibility change handling** (pause animations when tab hidden)
   - **Impact**: Battery savings + smoother experience
   - **Time**: 15 minutes

### Phase 3: MEDIUM (Nice to Have) 📋

7. **Add memoization**
   - **Impact**: +3-5 FPS
   - **Time**: 30 minutes

8. **Add background loading fallback**
   - **Impact**: Better UX
   - **Time**: 20 minutes

9. **Optimize state updates**
   - **Impact**: +3-5 FPS
   - **Time**: 30 minutes

---

## 🚀 Quick Wins (Can Implement Now)

### 1. ShaderGradient Optimization (2 minutes)
```tsx
// In App.tsx, change:
pixelDensity={1.0}  // Was 1.7
grain="off"         // Was "on"
frameRate={5}       // Was 10
brightness={1.0}    // Was 1.2
```

### 2. Reduce Blur (5 minutes)
```tsx
// Find all instances of:
backdropFilter: "blur(24px)"
// Replace with:
backdropFilter: "blur(8px)"
```

### 3. Add Visibility Handling (10 minutes)
```tsx
// Add to IndexNew2.tsx useEffect:
useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      // Pause all animations
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    }
  };
  document.addEventListener('visibilitychange', handleVisibilityChange);
  return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
}, []);
```

---

## 📝 Additional Recommendations

1. **Image Optimization**: Ensure all images are compressed (see COMPRESSION_GUIDE.md)
2. **Code Splitting**: Already implemented ✅
3. **Lazy Loading**: Already implemented ✅
4. **Consider**: Replace ShaderGradient with CSS gradient on mobile devices
5. **Monitor**: Use Chrome DevTools Performance tab to measure improvements

---

## 🔍 Testing Checklist

After implementing fixes:
- [ ] Test on mobile device (real device, not simulator)
- [ ] Test with Chrome DevTools Performance tab
- [ ] Check FPS during scroll (should be 55-60 FPS)
- [ ] Verify background loads on slower devices
- [ ] Test with tab switching (animations should pause)
- [ ] Check memory usage (should not continuously increase)
