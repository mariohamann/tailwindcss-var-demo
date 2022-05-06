const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Fira Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        mono: '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      colors: {
        primary: colors.sky,
        secondary: colors.amber,
        gray: colors.slate,
        $color: {
          50: 'var(--tw-var-color-50)',
          100: 'var(--tw-var-color-100)',
          200: 'var(--tw-var-color-200)',
          300: 'var(--tw-var-color-300)',
          400: 'var(--tw-var-color-400)',
          500: 'var(--tw-var-color-500)',
          600: 'var(--tw-var-color-600)',
          700: 'var(--tw-var-color-700)',
          800: 'var(--tw-var-color-800)',
          900: 'var(--tw-var-color-900)',
        },
      },
      spacing: {
        $spacing: 'var(--tw-var-spacing)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@mariohamann/tailwindcss-var'),
  ],
}
