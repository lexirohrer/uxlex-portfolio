# Manual File Compression Guide

## 🎯 Critical Files to Compress

These files are causing the biggest performance issues and **MUST** be compressed before deploying:

### 1. **MuvMi-pps2.png** (58MB) ⚠️ **HIGHEST PRIORITY**
- **Current size**: 58MB
- **Target size**: <2MB (aim for 1-2MB)
- **Impact**: This single file adds 10-15 seconds to load time

**How to compress:**
1. Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
2. Upload `public/MuvMi-pps2.png`
3. Download compressed version
4. Replace the original file in `public/` folder
5. **Verify**: File should be <2MB

**Alternative tools:**
- [ImageOptim](https://imageoptim.com/) (Mac app)
- [Compressor.io](https://compressor.io/)
- Photoshop: File → Export → Save for Web (Legacy) → PNG-24 with optimization

---

### 2. **Clouds_bckg.mp4** (27MB) ⚠️ **HIGH PRIORITY**
- **Current size**: 27MB
- **Target size**: <5MB (aim for 3-5MB)
- **Impact**: Autoplays on homepage, blocks initial render

**How to compress:**
1. Use [HandBrake](https://handbrake.fr/) (free, cross-platform)
   - Open `public/Clouds_bckg.mp4`
   - Preset: "Fast 1080p30" or "Fast 720p30"
   - Quality: RF 23-28 (lower = smaller file, slightly lower quality)
   - Click "Start Encode"
   - Replace original file

2. **Online alternative**: [CloudConvert](https://cloudconvert.com/mp4-compressor)
   - Upload video
   - Set compression level to "High"
   - Download and replace

**Settings to try:**
- Resolution: 1920x1080 or 1280x720 (if original is larger)
- Bitrate: 2-5 Mbps
- Codec: H.264
- Frame rate: 30fps (if original is 60fps, reduce to 30fps)

---

### 3. **BBX_AI_incorrect.mp4** (23MB)
- **Target size**: <5MB
- Follow same steps as Clouds_bckg.mp4

---

### 4. **Other Large Images** (12-17MB each)
Compress these PNG files to <2MB each:
- `public/MuvMi-pps.png` (9.6MB)
- `public/MuvMi-ridealong-app.png` (12MB)
- `public/bkg.png` (12MB)
- `public/cave_bckg.png` (6.4MB)
- Any other PNG files >5MB

**Quick batch compression:**
1. Use [TinyPNG](https://tinypng.com/) - can upload 20 images at once
2. Or use ImageOptim (Mac) - drag and drop entire folder

---

## 📋 Compression Checklist

Before deploying, verify:

- [ ] `MuvMi-pps2.png` compressed to <2MB
- [ ] `Clouds_bckg.mp4` compressed to <5MB
- [ ] `BBX_AI_incorrect.mp4` compressed to <5MB
- [ ] All PNG files >5MB compressed to <2MB
- [ ] All video files >10MB compressed to <5MB
- [ ] Test site locally to ensure images/videos still look good
- [ ] Verify file paths are correct after replacement

---

## 🚀 After Compression

1. **Test locally:**
   ```bash
   npm run build
   npm run preview
   ```
   Check that all images/videos load correctly

2. **Check file sizes:**
   ```bash
   find public -type f \( -name "*.mp4" -o -name "*.png" \) -exec ls -lh {} \; | awk '{print $5, $9}' | sort -hr
   ```
   Verify no files are >10MB

3. **Deploy** - Your site should now load 80-90% faster!

---

## 💡 Pro Tips

1. **For PNGs**: Consider converting to WebP format (even smaller, but requires code changes)
2. **For videos**: Consider using poster images and lazy loading
3. **Use CDN**: After compression, consider using a CDN like Cloudflare for even faster delivery
4. **Monitor**: Use browser DevTools Network tab to verify improvements

---

## ⚠️ Important Notes

- **Keep originals**: Save original files somewhere safe before compressing
- **Test quality**: Make sure compressed files still look acceptable
- **File names**: Keep the same file names when replacing (don't rename)
- **Git**: After replacing files, commit the changes

---

## 📊 Expected Results

After compression:
- **Total public folder size**: 282MB → **~50-80MB** (70-80% reduction)
- **Initial load time**: 25-48s → **3-5s** (80-90% improvement)
- **Lighthouse Performance Score**: 30-40 → **80-90+**
