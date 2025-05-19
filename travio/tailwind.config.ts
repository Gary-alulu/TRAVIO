import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B9D83', // Tan green color
        'primary-light': '#A3B39B',
        'primary-dark': '#6A7A63',
        white: '#FFFFFF',
        'white-off': '#F8F8F8',
      },
      backgroundColor: {
        'nav-light': 'rgba(255, 255, 255, 0.9)',
        'nav-dark': 'rgba(139, 157, 131, 0.9)', // Tan green with opacity
      }
    },
  },
  plugins: [],
}

export default config