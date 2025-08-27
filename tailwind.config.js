/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta obrigatória do sistema
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffc',
          300: '#7cc5f9',
          400: '#36a7f4',
          500: '#0c8ce5',
          600: '#0D3B66', // Cor primária principal
          700: '#0a2f52',
          800: '#0f2a47',
          900: '#13253d',
        },
        secondary: {
          50: '#fef5f2',
          100: '#fde8e1',
          200: '#fbd4c8',
          300: '#f7b8a1',
          400: '#f1906a',
          500: '#F95738', // Cor secundária principal
          600: '#e6462a',
          700: '#c1371f',
          800: '#9f301c',
          900: '#822c1d',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#333333', // Texto principal
          900: '#171717',
        },
        background: {
          primary: '#FFFFFF',
          secondary: '#fafafa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
};