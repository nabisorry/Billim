import type { Config } from 'tailwindcss';

const config: Pick<
  Config,
  'prefix' | 'presets' | 'content' | 'darkMode' | 'theme' | 'plugins'
> = {
  darkMode: ['class'],
  content: ['./**/*.{ts,tsx}'],
  theme: {
    // screens: {
    //   lg: '1300px',
    // },
    container: {
      center: true,
      screens: {
        '2xl': '1290px',
      },
    },
    fontFamily: {
      Pretendard: ['Pretendard', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF7F00',
          700: '#DD6E00',
          600: '#FF7F00',
          500: '#FF7F00',
          300: '#FFD5AC',
          200: '#FFECD7',
          100: '#FFF4E8',
        },
        gray: {
          DEFAULT: '#555555',
          900: '#1A1A1A',
          800: '#3D3D3D',
          700: '#555555',
          750: '#6F6F6F',
          600: '#939393',
          500: '#A5A5A5',
          400: '#C8C8C8',
          300: '#DFDFDF',
          200: '#EFEFEF',
          150: '#F5F5F5',
          100: '#F9F9F9',
          50: '#FBFBFB',
        },
        white: '#FFFFFF',
        black: '#000000',
        red: {
          DEFAULT: '#E02626',
          600: '#E02626',
          400: '#FF5B5B',
          300: '#FF7171',
          100: '#FFE9E9',
        },
        blue: {
          DEFAULT: '#2069D7',
          600: '#2069D7',
          400: '#5B9DFF',
          100: '#E1EDFF',
        },
        green: {
          DEFAULT: '#00A14A',
          600: '#00A14A',
          400: '#00C75B',
          100: '#E3F6EC',
        },
        pink: '#FF8181',
        yellow: {
          DEFAULT: '#F6C518',
          100: 'FFF9DE',
        },
        cardBorder: '#EFEFEF',
        inputFocusBorder: '#fff',
        dialogOverlayColor: '#000000',
      },
      opacity: {
        dialogOverlay: '0.05',
      },
      borderRadius: {
        lg: '30px',
        md: '12px',
        sm: '8px',
        card: '20px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('autoprefixer'),
    ({ addUtilities }: any) => {
      const newUtilities = {
        '.font-h1': {
          fontSize: '28px',
          fontWeight: 600,
          lineHeight: '36px',
        },
        '.font-h2': {},
      };
      addUtilities(newUtilities);
    },
  ],
};

export default config;
