/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c59b6d',
          50: '#fbf7f2',
          100: '#f7eee3',
          200: '#edd8c0',
          300: '#e1be98',
          400: '#d3a575',
          500: '#c59b6d',
          600: '#b68a5c',
          700: '#976e46',
          800: '#7a573a',
          900: '#644732',
        },
        navy: {
          DEFAULT: '#091527',
          50: '#f0f4f9',
          100: '#dbe5f2',
          200: '#b8cde5',
          300: '#8baed2',
          400: '#5a8bba',
          500: '#3c6ea1',
          600: '#2c5483',
          700: '#23446b',
          800: '#112239',
          900: '#091527',
          950: '#050c17',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#3b82f6',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#0f172a',
          navy: '#091527',
          gold: '#c59b6d',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Caveat', 'cursive'],
        display: ['Playfair Display', 'Space Grotesk', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
