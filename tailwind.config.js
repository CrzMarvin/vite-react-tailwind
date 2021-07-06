module.exports = {
  purge: ["./src/**/*.jsx", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        DI: {
          DEFAULT: "#97CBDC", // text-DI
          light: "#DDE8F0", // text-DI-light
          dark: "#2D8ABD", // text-DI-dark
        },
      },
      fontFamily: {
        headline: "Poppins sans-serif", // font-headline
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
