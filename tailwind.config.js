module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#121214',
          surface: '#1E1E22',
          card: '#1F2024',
          coral: '#FF6B78',
          coralHover: '#F25967',
          accentLight: '#DDE2E5',
          grayIcon: '#2B2C31',
          pill: '#EDF1F4',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'glass-nav': '0 20px 35px -8px rgba(0,0,0,.45)',
      },
    },
  },
  plugins: [],
}