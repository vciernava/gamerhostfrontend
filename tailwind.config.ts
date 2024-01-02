import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'primary-50': '#F2FDF8',
        'primary-100': '#E6F8F0',
        'primary-200': '#C0EFD9',
        'primary-300': '#9AE6C2',
        'primary-400': '#4ED79A',
        'primary-500': '#00CC88',
        'primary-600': '#00B47A',
        'primary-700': '#0A9169',
        'primary-800': '#076D4D',
        'primary-900': '#054A32',
        'secondary-50': '#F2F2F2',
        'secondary-100': '#EAEAEA',
        'secondary-200': '#D4D4D4',
        'secondary-300': '#BEBEBE',
        'secondary-400': '#909090',
        'secondary-500': '#757575',
        'secondary-600': '#696969',
        'secondary-700': '#474747',
        'secondary-800': '#353535',
        'secondary-900': '#232323',
        'tertiary-50': '#FFF8F2',
        'tertiary-100': '#FDF7F2',
        'tertiary-200': '#FBEED4',
        'tertiary-300': '#F9E5B6',
        'tertiary-400': '#F4D07A',
        'tertiary-500': '#F0BC3E',
        'tertiary-600': '#D9AB38',
        'tertiary-700': '#92742A',
        'tertiary-800': '#6D5620',
        'tertiary-900': '#493715',
        'quaternary-50': '#FFFFFF',
        'quaternary-100': '#F2F2F2',
        'quaternary-200': '#E6E6E6',
        'quaternary-300': '#CCCCCC',
        'quaternary-400': '#999999',
        'quaternary-500': '#808080',
        'quaternary-600': '#737373',
        'quaternary-700': '#4D4D4D',
        'quaternary-800': '#3A3A3A',
        'quaternary-900': '#262626',
        'blue-50': '#F2F9FF',
        'blue-100': '#E6F3FF',
        'blue-200': '#C0E0FF',
        'blue-300': '#9ADFFF',
        'blue-400': '#4EC0FF',
        'blue-500': '#00A1FF',
        'blue-600': '#0092E6',
        'blue-700': '#006199',
        'blue-800': '#004B73',
        'blue-900': '#00344D',
      },
    },
    animation: {
      fadeOut: 'fadeOut 300ms ease-in-out',
      fadeIn: 'fadeIn 300ms ease-in-out',
      SlideOut: 'SlideOut 300ms ease-in-out',
      SlideIn: 'SlideIn 300ms ease-in-out',
      SlideDown: 'SlideDown 300ms ease-in-out',
      SlideUp: 'SlideUp 300ms ease-in-out',
      floatY: 'floatY 3s ease-in-out infinite',
      floatX: 'floatX 3s ease-in-out infinite',
    },
    keyframes: {
      fadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      SlideOut: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      SlideIn: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      SlideDown: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      SlideUp: {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-100%)' },
      },
      floatY: {
        '0%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' },
        '100%': { transform: 'translateY(0px)' },
      },
      floatX: {
        '0%': { transform: 'translateX(0px)' },
        '50%': { transform: 'translateX(-10px)' },
        '100%': { transform: 'translateX(0px)' },
      },
      floatRotateY: {
        '0%': { transform: 'translateY(0px) rotate(0deg)' },
        '50%': { transform: 'translateY(-10px) rotate(-12deg)' },
        '100%': { transform: 'translateY(0px) rotate(0deg)' },
      },
      floatRotateX: {
        '0%': { transform: 'translateX(0px) rotate(0deg)' },
        '50%': { transform: 'translateX(-10px) rotate(-12deg)' },
        '100%': { transform: 'translateX(0px) rotate(0deg)' },
      },
    },
  },
  plugins: [],
};
export default config;
