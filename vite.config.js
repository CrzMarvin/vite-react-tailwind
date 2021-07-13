import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import mdx from 'vite-plugin-mdx'
import path from "path";


// `options` are passed to `@mdx-js/mdx`
const options = {
  // See https://mdxjs.com/advanced/plugins
  remarkPlugins: [
    // E.g. `remark-frontmatter`
  ],
  rehypePlugins: [],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), mdx(options)],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@posts": path.resolve(__dirname, "./src/posts"),
    },
  },
});
