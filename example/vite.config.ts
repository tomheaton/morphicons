import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: add path aliases
  // optimizeDeps: {
  //   include: ["morphicons"],
  // },
});
