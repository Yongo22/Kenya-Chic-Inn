/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Define where Tailwind should look for class names
  content: [
    "./*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 2. The "Chic" Branding Palette
      colors: {
        'brand-gold': {
          500: '#D4AF37', // Classic Gold
          600: '#C5A059', // Primary Kenya Chic Inn Accent
          700: '#B38F48', // Hover state for buttons
        },
        'brand-stone': {
          50: '#FDFCF8',  // Warm Background (Bone/Alabaster)
          100: '#F5F5F0', // Subtle section backgrounds
          900: '#1A1A1A', // Deep Charcoal for text
        },
      },
      // 3. Custom Typography
      fontFamily: {
        // Playfair Display for that high-end boutique feel
        serif: ['var(--font-playfair)', 'serif'],
        // Inter or Sans for clean, fast-reading body text
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      },
      // 4. Custom Spacing & Animations
      letterSpacing: {
        widest: '.25em', // For those high-fashion uppercase labels
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}