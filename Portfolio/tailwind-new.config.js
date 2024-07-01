/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.js'],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#38b2ac',
        customGray: '#f5f5f5',
        customGreen: '#10b981',
        customBlue: '#3b82f6',
        customRed: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['SFMono-Regular', 'Menlo'],
        customFont: ['CustomFontFamily', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
        spinSlow: 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover', 'focus-within', 'hover', 'disabled'],
      opacity: ['disabled', 'hover'],
      textColor: ['visited', 'group-hover', 'focus', 'hover'],
      borderColor: ['focus-visible', 'first', 'last', 'hover'],
      ringColor: ['focus-visible'],
      ringWidth: ['hover', 'active'],
      translate: ['group-hover', 'hover'],
      scale: ['group-hover', 'hover'],
      rotate: ['group-hover', 'hover'],
    },
  },
  plugins: [
    require('tailwindcss/plugin'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.rotate-0': {
          transform: 'rotate(0deg)',
        },
        '.rotate-90': {
          transform: 'rotate(90deg)',
        },
        '.rotate-180': {
          transform: 'rotate(180deg)',
        },
        '.rotate-270': {
          transform: 'rotate(270deg)',
        },
        '.skew-10': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15': {
          transform: 'skewY(-15deg)',
        },
        '.translate-1/2': {
          transform: 'translate(50%)',
        },
        '.translate-1/3': {
          transform: 'translate(33.333%)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
    plugin(function ({ addComponents }) {
      const newComponents = {
        '.card': {
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        '.btn': {
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
        },
        '.btn-primary': {
          backgroundColor: '#1a202c',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2d3748',
          },
        },
      };
      addComponents(newComponents);
    }),
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      });
    }),
  ],
};
