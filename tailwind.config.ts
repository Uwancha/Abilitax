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
      }
    },
  },
  plugins: [],
}
export default config
