import { withTV } from 'tailwind-variants/transformer';

const config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundPosition: {
        'bottom-4': 'bottom 1rem',
        'bottom-8': 'bottom 2rem',
      },
      colors: {
        'primary': '#371172'
      },
      borderColor: {
        'light-grey': '#EFEFF8'
      }
    },
  },
  plugins: [],
});

export default config;
