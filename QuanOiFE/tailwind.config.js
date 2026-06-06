/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-delay': 'float 4s ease-in-out 1s infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(249, 115, 22, 0.7)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #fff7ed 0%, #fff 50%, #fff7ed 100%)',
        'orange-gradient': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #fff7ed 100%)',
      },
      boxShadow: {
        'brand': '0 4px 24px rgba(249, 115, 22, 0.2)',
        'brand-lg': '0 8px 48px rgba(249, 115, 22, 0.3)',
        'card': '0 2px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
