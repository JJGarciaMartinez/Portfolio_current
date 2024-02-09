/** @type {import('tailwindcss').Config} */
/** @type {import('postcss-load-config').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("autoprefixer"),
    require("postcss-nested"),
  ],
};
