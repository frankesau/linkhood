/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }
      '2xs': '375px',
      // => @media (min-width: 375) { ... }
      '3xs': '480px',
      // => @media (min-width: 480) { ... }
    },
    extend: {},
  },
  plugins: [],
}

