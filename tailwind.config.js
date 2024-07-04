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
        baseColor: 'rgb(211, 47, 47)',
        lightSky: '328CFF',
        navActive: 'rgba(17, 205, 239, 0.1)'
      },
      backgroundImage: {
        bannerAdmin: 'linear-gradient(to bottom,#023B96 10%,#022357 90%);',
        boxBlue: 'linear-gradient(310deg, rgb(17, 113, 239), rgb(17, 205, 239))',
        boxRed: 'linear-gradient(310deg, rgb(245, 54, 92), rgb(245, 96, 54))',
        boxGreen: 'linear-gradient(310deg, rgb(45, 206, 137), rgb(45, 206, 204))',
        boxOrange: 'linear-gradient(310deg, rgb(251, 99, 64), rgb(251, 177, 64))',
        banner1:
          'url("https://themewagon.github.io/argon-dashboard-material-ui/static/media/img-3.6a692091d1aec33aca3c.jpg")',
        banner2:
          'url("https://themewagon.github.io/argon-dashboard-material-ui/static/media/img-2.d97bd8ee71e6afc19404.jpg")',
        banner3:
          'url("https://themewagon.github.io/argon-dashboard-material-ui/static/media/img-1.18c5ecb11935c7e58781.jpg")'
      },
      gridTemplateColumns: {
        '2_1': '2fr 1fr',
        '7_5': '7fr 5fr'
      }
    }
  },
  plugins: []
}
