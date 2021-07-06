

module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.jsx", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-muted': 'var(--color-button-muted)',
          'button-accent-hover': ({ opacityValue }) => `var(--color-button-accent-hover)`,
        }
      },
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
