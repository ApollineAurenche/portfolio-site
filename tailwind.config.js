/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        teal: {
          50:  '#FAFCFD',  // near-white — light backgrounds
          100: '#D9E4EA',  // light blue-grey — borders, subtle
          200: '#9CB8C7',  // medium blue-grey — secondary accents
          300: '#7a9bae',
          400: '#6a8a9e',
          500: '#567A8C',  // slate — primary accent
          600: '#567A8C',  // slate — primary accent (alias)
          700: '#3d5d6e',
          800: '#2B3A44',  // dark navy — headings, strong
          900: '#1a252d',
        },
        stone: {
          50:  '#FAFCFD',  // near-white — section backgrounds
          100: '#D9E4EA',  // light blue-grey — chips, subtle bg
          200: '#D9E4EA',  // light blue-grey — borders, dividers
          300: '#9CB8C7',  // medium blue-grey — muted text
          400: '#9CB8C7',  // medium blue-grey — muted text / labels
          500: '#7d99a8',  // blue-grey — secondary text
          600: '#567A8C',  // slate — links, hover accents
          700: '#3d5d6e',  // dark slate — hover states
          800: '#2B3A44',  // dark navy — strong text
          900: '#2B3A44',  // dark navy — headings, primary text
        },
      },
    },
  },
  plugins: [],
}
