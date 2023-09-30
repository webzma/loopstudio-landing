/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "very-dark-gray": "hsl(0, 0%, 55%)",
      },
      fontFamily: {
        heading: "Josefin Sans",
      },
    },
  },
  plugins: [],
};
