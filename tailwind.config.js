module.exports = {
purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gresume:"#182848",
        gresume2:"#4B6CB7",
        navBG:"#252B3A",
        navResume:"#FF6C6C",
        degLine:"#FE2020",
      },
      fontFamily: {
        sans: [
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
