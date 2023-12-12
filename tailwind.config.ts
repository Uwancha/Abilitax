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
        'slategray': 'slategray',
        'blackish':'rgb(7, 7, 55)',
        'whitesmoke':'whitesmoke',
        'goldenrod': 'goldenrod',
        'tomato':'tomato',
        'silver': 'silver'
      },
      screens: {
        sm: '768px', 
         // => @media (min-width: 768px) { ... } 

        md: '980px',

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}
export default config
