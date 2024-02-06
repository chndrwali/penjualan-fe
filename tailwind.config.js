/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#F9F2EC',
          100: '#F2E1D5',
          200: '#E2C4A6',
          300: '#D3A779',
          400: '#C4894B',
          500: '#B56C1C',
          600: '#985914',
          700: '#7B4710',
          800: '#5E360C',
          900: '#421F09',
        },
        wood: {
          50: '#FDF7F0',
          100: '#FBEBDB',
          200: '#F6D2B3',
          300: '#F0B88C',
          400: '#EB9E64',
          500: '#E5843C',
          600: '#C66B2F',
          700: '#9D5223',
          800: '#754917',
          900: '#4C2E0A',
        },
        coffee: {
          50: '#F6F2F1',
          100: '#E5DAD7',
          200: '#D4C1BE',
          300: '#C2A8A5',
          400: '#B1918C',
          500: '#9F7A73',
          600: '#87635E',
          700: '#6E4D49',
          800: '#563634',
          900: '#3E201F',
        },
        lightbrown: {
          50: '#FAF8F5',
          100: '#F2E9E1',
          200: '#E0CBAE',
          300: '#CFAE7C',
          400: '#BE9050',
          500: '#AC7324',
          600: '#945D1F',
          700: '#7B4819',
          800: '#623213',
          900: '#48210D',
        },
        earth: {
          50: '#FAF9F7',
          100: '#F2EFE5',
          200: '#DFD6BC',
          300: '#CCBE94',
          400: '#B9A66C',
          500: '#A68E45',
          600: '#8E7737',
          700: '#745E2A',
          800: '#5B4621',
          900: '#412E19',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

