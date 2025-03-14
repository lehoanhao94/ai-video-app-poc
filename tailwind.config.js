module.exports = {
  content: ['./src/renderer/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [require('tailwindcss-primeui')],
  safelist: [
    { pattern: /(bg|text|border)-./ },
    { pattern: /dark:(bg|text|border)-./ },
    'bg-yellow-500',
    'dark:bg-yellow-900/30',
  ]
}
