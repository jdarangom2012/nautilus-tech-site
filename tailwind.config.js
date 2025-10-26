/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Index.html',
    './index.html',
    './js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#12D6D0',
        primaryDark: '#0099A7',
        ocean: '#0EA5E9',
        deep: '#0B1220',
        // usar color base en HEX para permitir modificadores como /60
        cardSurface: '#0F172A',
        cardBorder: 'rgba(255,255,255,0.08)',
        cardHighlight: 'rgba(18,214,208,0.18)'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.35)',
        glass: '0 10px 40px rgba(18,214,208,.12)'
      },
      borderRadius: {
        xl2: '1rem',
        xl3: '1.25rem'
      },
      fontFamily: {
        display: ['Orbitron', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
