/// <reference types="vitest/config" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: "vitest.setup.ts",
    environment: "jsdom",
  }
});
