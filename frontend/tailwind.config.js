module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust this to match the structure of your project
  ],
 
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class'
}
