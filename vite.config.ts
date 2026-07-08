import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed to https://sarafiskray.github.io (user site) → base is "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});
