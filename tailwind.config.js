// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./src/**/*.{html,js}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }

module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}