import { draco } from "@gltf-transform/functions";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import gltf from "vite-plugin-gltf";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl(),
    gltf({
      transforms: [draco({})],
    }),
  ],
});
