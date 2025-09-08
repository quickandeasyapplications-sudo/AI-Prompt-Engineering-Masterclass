# Purchase Button Integration Guide

## Overview
Your landing page has been designed with specific placeholders for both Gumroad and Payhip purchase buttons. This guide will help you integrate your actual purchase buttons.

## Pricing Structure
- **Course Alone**: $89
- **AI Prompt Generator (One-time purchase)**: $30 (will be upgraded after BETA)
- **Total Individual**: $119
- **Combo Deal**: $99 (Save $20!)

The AI Prompt Generator is a **one-time purchase** of $30 that will be upgraded after the BETA term ends.

## Button Locations

### Primary Purchase Buttons (Hero Section)
Located in the main hero section, these are the first buttons visitors see:

**Gumroad Button (Green)**:
```jsx
<div id="gumroad-button" className="w-full sm:w-auto">
  <Button 
    size="lg" 
    className="w-full sm:w-auto bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-600 hover:to-cyan-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
  >
    <Zap className="mr-2 h-5 w-5" />
    Buy on Gumroad - $99
  </Button>
</div>
```

**Payhip Button (Purple)**:
```jsx
<div id="payhip-button" className="w-full sm:w-auto">
  <Button 
    size="lg" 
    className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
  >
    <ShieldCheck className="mr-2 h-5 w-5" />
    Buy on Payhip - $99
  </Button>
</div>
```

### Secondary Purchase Buttons (Urgency Section)
Located in the urgency section with animated effects:

**Gumroad Button (Red/Orange)**:
```jsx
<div id="gumroad-button-2" className="w-full sm:w-auto">
  <Button 
    size="lg" 
    className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse"
  >
    <Zap className="mr-2 h-6 w-6" />
    Claim Your Deal on Gumroad NOW!
  </Button>
</div>
```

**Payhip Button (Purple/Pink)**:
```jsx
<div id="payhip-button-2" className="w-full sm:w-auto">
  <Button 
    size="lg" 
    className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse"
  >
    <ShieldCheck className="mr-2 h-6 w-6" />
    Claim Your Deal on Payhip NOW!
  </Button>
</div>
```

## Integration Methods

### Method 1: Replace with Embed Code (Recommended)
Replace the entire `<div>` content with your platform's embed code:

```jsx
// Before (current placeholder)
<div id="gumroad-button" className="w-full sm:w-auto">
  <Button>Buy on Gumroad - $99</Button>
</div>

// After (with your embed code)
<div id="gumroad-button" className="w-full sm:w-auto">
  <script src="https://gumroad.com/js/gumroad-embed.js"></script>
  <div class="gumroad-product-embed" data-gumroad-product-id="YOUR_PRODUCT_ID">
    <a href="https://gumroad.com/l/YOUR_PRODUCT">Buy on Gumroad - $99</a>
  </div>
</div>
```

### Method 2: Add onClick Handler
Keep the existing button styling and add a click handler:

```jsx
<div id="gumroad-button" className="w-full sm:w-auto">
  <Button 
    size="lg" 
    className="w-full sm:w-auto bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-600 hover:to-cyan-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
    onClick={() => window.open('https://gumroad.com/l/YOUR_PRODUCT', '_blank')}
  >
    <Zap className="mr-2 h-5 w-5" />
    Buy on Gumroad - $99
  </Button>
</div>
```

## Platform-Specific Instructions

### Gumroad Integration

1. **Get Your Product URL**:
   - Go to your Gumroad dashboard
   - Find your product
   - Copy the product URL (e.g., `https://gumroad.com/l/your-product-id`)

2. **Option A - Direct Link**:
   ```jsx
   onClick={() => window.open('https://gumroad.com/l/YOUR_PRODUCT_ID', '_blank')}
   ```

3. **Option B - Embed Widget**:
   ```html
   <script src="https://gumroad.com/js/gumroad-embed.js"></script>
   <div class="gumroad-product-embed" data-gumroad-product-id="YOUR_PRODUCT_ID">
     <a href="https://gumroad.com/l/YOUR_PRODUCT_ID">Buy Now</a>
   </div>
   ```

### Payhip Integration

1. **Get Your Product URL**:
   - Go to your Payhip dashboard
   - Find your product
   - Copy the product URL (e.g., `https://payhip.com/b/YOUR_PRODUCT_ID`)

2. **Option A - Direct Link**:
   ```jsx
   onClick={() => window.open('https://payhip.com/b/YOUR_PRODUCT_ID', '_blank')}
   ```

3. **Option B - Embed Widget**:
   ```html
   <script src="https://payhip.com/embed-page.js"></script>
   <a href="https://payhip.com/b/YOUR_PRODUCT_ID" data-payhip-product-id="YOUR_PRODUCT_ID">Buy Now</a>
   ```

## Testing Your Integration

### Before Going Live
1. **Test Purchase Flow**: Click through the entire purchase process
2. **Check Mobile**: Ensure buttons work on mobile devices
3. **Verify Pricing**: Confirm the correct price is displayed
4. **Test Both Platforms**: Make sure both Gumroad and Payhip work

### Common Issues
- **Button Not Clickable**: Check for JavaScript errors in browser console
- **Wrong Price**: Update the button text to match your actual price
- **Mobile Issues**: Test on actual mobile devices
- **Popup Blockers**: Some browsers may block popup windows

## Styling Preservation

The current buttons have been carefully styled to match the landing page design. When integrating:

- **Keep the existing CSS classes** for consistent styling
- **Maintain the gradient colors** (lime/cyan for Gumroad, purple/pink for Payhip)
- **Preserve the hover effects** and animations
- **Keep the icons** (Zap for Gumroad, ShieldCheck for Payhip)

## File Locations

All purchase buttons are located in:
- **File**: `src/App.jsx`
- **Search for**: `id="gumroad-button"` and `id="payhip-button"`
- **Lines**: Approximately lines 50-70 and 400-420

## Need Help?

If you encounter issues:
1. Check the browser console for JavaScript errors
2. Verify your product URLs are correct
3. Test with a simple direct link first
4. Ensure your embed codes are properly formatted

---

**Once integrated, your purchase buttons will be fully functional and ready to convert visitors into customers!**

