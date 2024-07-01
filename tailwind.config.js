/** @type {import('tailwindcss').Config} */
export const darkMode = false;
export const theme = {
  extend: {
    colors: {
      // Define custom colors
      primary: '#ff0000',
      secondary: {
        100: '#f0f0f0',
        // Add more shades as needed
      },
      // Define a custom background color
      customBackground: '#abcdef',
    },
    fontFamily: {
      // Define custom fonts
      sans: ['Roboto', 'sans-serif'],
      // Add more font families as needed
    },
  },
};
export const variants = {
  extend: {
    // Add variants like 'active', 'hover', etc.
  },
};
export const plugins = [
  // Add plugins here
];
