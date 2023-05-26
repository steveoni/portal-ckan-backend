/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-conic-h': 'conic-gradient(from 90deg at 50% 100%,hsl(220deg 0% 55%) 50%,hsl(220deg 0% 75%) 62.5%,hsl(220deg 0% 85%) 75%,hsl(220deg 0% 75%) 87.5%,hsl(220deg 0% 55%) 100% )',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
