# Converting mountains_hero.svg to PNG

## Why Convert?

The current `mountains_hero.svg` file is **3.3MB** because it contains a base64-encoded raster image inside an SVG wrapper. For a static background image, PNG is much better:
- **Smaller file size** (can be compressed to <500KB)
- **Faster loading**
- **Better browser support**
- **No unnecessary vector overhead**

## How to Convert

### Option 1: Using Online Tools (Easiest)

1. **Open the SVG in a browser:**
   - Open `public/mountains_hero.svg` in Chrome/Safari
   - Take a screenshot or use browser DevTools

2. **Or use an online converter:**
   - Go to [CloudConvert](https://cloudconvert.com/svg-to-png)
   - Upload `public/mountains_hero.svg`
   - Set resolution: **1920x1080** or **2560x1440** (match your design needs)
   - Download as PNG

3. **Compress the PNG:**
   - Use [TinyPNG](https://tinypng.com/) to compress
   - Target size: **<500KB** (should be easy from 3.3MB!)

4. **Replace the file:**
   - Save as `public/mountains_hero.png`
   - Delete or backup `public/mountains_hero.svg`

### Option 2: Using macOS Preview (Built-in)

1. Open `public/mountains_hero.svg` in Preview
2. File → Export
3. Format: **PNG**
4. Quality: **Best** (or adjust to balance quality/size)
5. Save as `public/mountains_hero.png`
6. Compress with TinyPNG

### Option 3: Using Inkscape (Free, Cross-platform)

1. Download [Inkscape](https://inkscape.org/)
2. Open `public/mountains_hero.svg`
3. File → Export PNG Image
4. Set width: **1920px** (or your desired width)
5. Export
6. Compress with TinyPNG

## After Conversion

1. **Update the code** - The code has already been updated to use `.png` extension
2. **Test locally:**
   ```bash
   npm run build
   npm run preview
   ```
3. **Verify the image loads correctly**
4. **Commit and push:**
   ```bash
   git add public/mountains_hero.png
   git commit -m "Convert mountains_hero to optimized PNG"
   git push
   ```

## Expected Results

- **Current**: 3.3MB SVG (base64 encoded)
- **After conversion**: <500KB PNG (80-85% reduction!)
- **Load time improvement**: ~2-3 seconds faster

## Note

The code in `src/pages/IndexNew.tsx` has been updated to use `mountains_hero.png` instead of `.svg`. Once you convert the file, it will work automatically.
