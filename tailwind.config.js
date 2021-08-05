

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
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      animation: {
        blob: "blob 9s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "24%": {
            transform: "translate(2px, 20px) scale(1.1)"
          },
          "50%": {
            transform: "translate(9px, 22px) scale(1)"
          },
          "75%": {
            transform: "translate(9px, -10px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          },
        }
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
