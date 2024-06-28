/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        container: '1200px'
      },
      textColor: {
        baseColor: 'rgb(211, 47, 47)',
        444: '#444'
      },
      boxShadow: {
        'bottom-sm': '1px 0 10px rgba(0,0,0,0.2)',
        'arround-sm': '0 0 2px rgba(0,0,0,0.5)'
      },
      borderColor: {
        baseColor: 'rgb(211, 47, 47) !important'
      },
      backgroundColor: {
        baseColor: 'rgb(211, 47, 47)'
      },
      gridTemplateColumns: {
        '2_1': '2fr 1fr'
      }
    }
  },
  plugins: []
}
