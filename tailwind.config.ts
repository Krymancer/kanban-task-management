import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      default: 'Plus Jakarta Sans',
      body: 'Plus Jakarta Sans',
      display: 'Plus Jakarta Sans',      
    },
    colors: {
      'main-purple': '#635FC7',
      'main-purple-hover': '#A8A4FF',
      'black': '#000112',
      'very-dark-gray': '#20212C',
      'dark-gray': '#2B2C37',
      'lines-dark': '#3E3F4E',
      'medium-gray': '#828FA3',
      'lines-light': '#E4EBFA',
      'light-gray': '#F4F7FD',
      'white': '#FFFFFF',
      'red': '#EA5555',
      'red-hover': '#FF9898', 
    },
    extend: {},
  },
  plugins: [],
}
export default config
