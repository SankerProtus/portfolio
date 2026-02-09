# README: Adding Your Photos

## 📸 How to Add Your Photos

Place your images in the `/public/images/` folder with the following names:

### Profile Photo

- **File**: `profile.jpg` (or .png)
- **Recommended size**: 400x400px (square)
- **Used in**: About section
- **Tips**: Use a professional headshot with good lighting

### Project Screenshots

Add screenshots for your projects:

- `project-payflow.jpg` - PayFlow Analytics Dashboard
- `project-budget.jpg` - Personal Budget Tracker
- `project-grocery.jpg` - Smart Grocery Expiry Tracker
- `project-quiz.jpg` - Real-Time Quiz Platform
- `project-keeper.jpg` - Keeper App
- `project-education.jpg` - Modern Education Website

**Recommended size**: 1200x800px (landscape)
**Format**: .jpg or .png
**Tips**: Use actual screenshots of your projects or mockups

## 🖼️ Image Optimization

For better performance, optimize your images before adding them:

### Online Tools (Free)

- **TinyPNG**: https://tinypng.com/ (Best for PNG)
- **Squoosh**: https://squoosh.app/ (Google's image compressor)
- **CompressJPEG**: https://compressjpeg.com/

### Using the Command Line

If you have ImageMagick installed:

```bash
# Resize and optimize
magick input.jpg -resize 1200x800 -quality 85 output.jpg

# For profile photo
magick profile.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 90 profile-optimized.jpg
```

## 📁 Current Folder Structure

```
public/
  images/
    profile.jpg              ← Your profile photo
    project-payflow.jpg      ← Project screenshots
    project-budget.jpg
    project-grocery.jpg
    project-quiz.jpg
    project-keeper.jpg
    project-education.jpg
```

## 🎨 Using the Images

### In the Portfolio:

1. **Profile Photo** - Automatically used in the About section
2. **Project Screenshots** - Each ProjectCard component will display the image if provided

### To Enable Images in Projects:

The images are already configured in [src/data/portfolioData.js](../src/data/portfolioData.js). Once you add the files to `/public/images/`, they'll automatically appear.

### Optional: Project Cards with Images

If you want to show project screenshots in the cards, update the [ProjectCard.jsx](../src/components/ProjectCard.jsx) component:

```jsx
{
  /* Add this after the icon div */
}
{
  project.image && (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
  );
}
```

## 🔄 Alternative: Use Placeholders

If you don't have images ready, you can use placeholder services:

### UI Faces (Profile)

```javascript
profileImage: "https://i.pravatar.cc/400";
```

### Lorem Picsum (Projects)

```javascript
image: "https://picsum.photos/1200/800?random=1";
```

## ✅ Checklist

- [ ] Add `profile.jpg` to `/public/images/`
- [ ] Add project screenshots to `/public/images/`
- [ ] Optimize all images for web
- [ ] Test that images load correctly
- [ ] Update alt text for accessibility (if needed)

---

**Need help?** Check the [CUSTOMIZATION.md](../../CUSTOMIZATION.md) guide for more details.
