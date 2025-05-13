module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: 'rgba(255, 255, 255, 0.7)',
            DEFAULT: 'rgba(255, 255, 255, 0.5)',
            dark: 'rgba(255, 255, 255, 0.2)'
          },
          dark: {
            DEFAULT: '#0f172a',
            light: '#1e293b'
          },
          accent: {
            DEFAULT: '#6366f1',
            light: '#818cf8'
          }
        },
        backdropBlur: {
          xs: '2px',
          sm: '4px',
          DEFAULT: '8px',
          md: '12px',
          lg: '16px',
          xl: '24px',
        },
      },
    },
    variants: {
      extend: {
        backdropBlur: ['responsive', 'hover'],
      },
    },
    plugins: [],
  }