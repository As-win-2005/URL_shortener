/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#b5e550',
        secondary: '#abc32f',
        accent: '#809c13',
        dark: '#607c3c',
        cream: '#ececa3',
        surface: '#10130d',
        surfaceLight: '#1b2215',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(181,229,80,0.35)',
        card: '0 10px 30px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        hero:
          'radial-gradient(circle at top left, rgba(181,229,80,0.18), transparent 30%), radial-gradient(circle at bottom right, rgba(128,156,19,0.22), transparent 35%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulse 4s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}