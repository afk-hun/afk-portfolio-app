/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    screens: {
      sm: '0px',
      md: '768px',
      lg: '976px',
    },
  },
  plugins: [],
}

export default config
