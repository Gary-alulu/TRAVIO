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
        // New colors for About Us page
        'beige-50': '#FBF8F1', // Soft beige
        'beige-100': '#F5F0E8', // Slightly darker beige
        'amber-50': '#FFFBEB',  // Muted gold/light amber
        'amber-300': '#FCD34D', // Muted gold
        'amber-500': '#F59E0B', // Aesthetic brown/gold
        'amber-600': '#D97706', // Aesthetic brown/gold
        'amber-700': '#B45309', // Aesthetic brown
        'amber-800': '#92400E', // Darker brown
        'amber-900': '#78350F', // Deep brown
      },
      backgroundColor: {
        'nav-light': 'rgba(255, 255, 255, 0.9)',
        'nav-dark': 'rgba(139, 157, 131, 0.9)', // Tan green with opacity
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'playfair-display': ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}

export default config