# ShaderGradient Component Guide

## How to Use Your Custom Gradient from the Browser Interface

### Step 1: Get Your Gradient Configuration

When you've constructed your gradient in the ShaderGradient browser interface:

1. **Look for the "Export" or "Copy Code" button** in the interface
2. **Or manually copy these values** from the interface controls:
   - Color values (color1, color2, color3)
   - Position values (positionX, positionY, positionZ)
   - Rotation values (rotationX, rotationY, rotationZ)
   - Camera settings (cAzimuthAngle, cPolarAngle, cDistance, cameraZoom)
   - Animation settings (uSpeed, uFrequency, uAmplitude, uDensity, uStrength)
   - Other settings (brightness, reflection, grain, animate, etc.)

### Step 2: Understanding the Component Structure

The ShaderGradient component requires two parts:

```tsx
<ShaderGradientCanvas>
  <ShaderGradient {...yourProps} />
</ShaderGradientCanvas>
```

- **ShaderGradientCanvas**: The container/wrapper (handles WebGL setup)
- **ShaderGradient**: The actual gradient component (receives all your settings)

### Step 3: All Available Props

Here are all the props you can pass to `<ShaderGradient>`:

#### **Color Props**
```tsx
color1="#1C1344"        // Primary color (hex format)
color2="#1C1344"        // Secondary color
color3="#00009d"         // Tertiary color
```

#### **Position & Rotation**
```tsx
positionX={0}           // X position (-1 to 1)
positionY={-0.15}       // Y position (-1 to 1)
positionZ={0}           // Z position (-1 to 1)
rotationX={0}           // X rotation in degrees
rotationY={0}           // Y rotation in degrees
rotationZ={50}          // Z rotation in degrees
```

#### **Camera Settings**
```tsx
cAzimuthAngle={60}      // Horizontal camera angle (0-360)
cPolarAngle={90}        // Vertical camera angle (0-180)
cDistance={7.1}          // Camera distance from gradient
cameraZoom={29.49}      // Camera zoom level
```

#### **Animation/Shader Props**
```tsx
uSpeed={0.1}            // Animation speed (0-1)
uFrequency={5.5}        // Wave frequency
uAmplitude={1.4}        // Wave amplitude
uDensity={1.1}          // Wave density
uStrength={0.4}         // Overall effect strength
```

#### **Visual Settings**
```tsx
brightness={1.5}        // Overall brightness multiplier
reflection={0.1}        // Reflection intensity (0-1)
grain="off"             // Grain effect: "on" | "off"
animate="on"            // Animation: "on" | "off"
wireframe={false}       // Show wireframe: true | false
```

#### **Type & Shader**
```tsx
type="sphere"           // Shape: "sphere" | "plane" | "torus" | etc.
shader="defaults"       // Shader preset name
lightType="3d"          // Lighting type
envPreset="dawn"        // Environment preset
```

### Step 4: How to Copy Values from Browser Interface

When you have your gradient set up in the browser interface:

1. **For each control/slider in the interface:**
   - Note the property name (usually shown in the UI)
   - Copy the numeric value or color value
   - Match it to the prop name in the list above

2. **Common mappings:**
   - Color pickers → `color1`, `color2`, `color3`
   - Position sliders → `positionX`, `positionY`, `positionZ`
   - Rotation sliders → `rotationX`, `rotationY`, `rotationZ`
   - Camera controls → `cAzimuthAngle`, `cPolarAngle`, `cDistance`, `cameraZoom`
   - Animation controls → `uSpeed`, `uFrequency`, `uAmplitude`, `uDensity`, `uStrength`
   - Brightness slider → `brightness`
   - Reflection slider → `reflection`

### Step 5: Example Implementation

Here's your current implementation as a reference:

```tsx
import { ShaderGradient, ShaderGradientCanvas } from "shadergradient";

// In your component:
<ShaderGradientCanvas style={{ position: "fixed", inset: 0, zIndex: 0 }}>
  <ShaderGradient
    animate="on"
    color1="#1C1344"
    color2="#1C1344"
    color3="#00009d"
    brightness={1.5}
    cAzimuthAngle={60}
    cDistance={7.1}
    cPolarAngle={90}
    cameraZoom={29.49}
    envPreset="dawn"
    lightType="3d"
    grain="off"
    positionX={0}
    positionY={-0.15}
    positionZ={0}
    reflection={0.1}
    rotationX={0}
    rotationY={0}
    rotationZ={50}
    shader="defaults"
    type="sphere"
    uAmplitude={1.4}
    uDensity={1.1}
    uFrequency={5.5}
    uSpeed={0.1}
    uStrength={0.4}
    wireframe={false}
  />
</ShaderGradientCanvas>
```

### Step 6: Quick Reference - What to Copy from Browser

When you're in the ShaderGradient browser interface, look for these sections and copy the values:

| Interface Section | Props to Update |
|------------------|-----------------|
| **Colors** | `color1`, `color2`, `color3` |
| **Position** | `positionX`, `positionY`, `positionZ` |
| **Rotation** | `rotationX`, `rotationY`, `rotationZ` |
| **Camera** | `cAzimuthAngle`, `cPolarAngle`, `cDistance`, `cameraZoom` |
| **Animation** | `uSpeed`, `uFrequency`, `uAmplitude`, `uDensity`, `uStrength` |
| **Effects** | `brightness`, `reflection`, `grain`, `animate` |
| **Shape** | `type`, `shader`, `lightType`, `envPreset` |

### Step 7: Tips

1. **Color Format**: Always use hex format (`#RRGGBB`) for colors
2. **Numeric Values**: Most numeric props accept decimals (e.g., `1.5`, `0.1`)
3. **Boolean Props**: Use `true`/`false` for `wireframe`, `"on"`/`"off"` for `animate` and `grain`
4. **Styling**: The `ShaderGradientCanvas` can be styled with CSS (position, z-index, etc.)
5. **Performance**: Keep `animate="on"` only if you want continuous animation

### Step 8: Testing Your Gradient

After updating the props:

1. Save your file
2. Check the browser - the gradient should update
3. If it doesn't match, double-check:
   - Color values are in hex format
   - Numeric values match exactly
   - All required props are included

### Need Help?

If the browser interface shows different property names, share:
- The property names you see in the interface
- The values you want to use
- I can help map them to the correct props!
