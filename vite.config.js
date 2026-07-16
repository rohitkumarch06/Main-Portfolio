import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

// 1. Rollup shim plugin for production builds (vite build)
const shimTroika = {
  name: 'shim-troika',
  transform(code, id) {
    if (id.includes('node_modules')) {
      return {
        code: code.replace(/(Box|Circle|Cone|Cylinder|Dodecahedron|Extrude|Icosahedron|Lathe|Octahedron|Plane|Polyhedron|Ring|Shape|Sphere|Tetrahedron|Torus|TorusKnot|Tube)BufferGeometry/g, '$1Geometry'),
        map: null
      };
    }
    return null;
  }
}

// 2. Esbuild shim plugin for dependency pre-bundling (vite dev server)
const esbuildShim = {
  name: 'esbuild-shim',
  setup(build) {
    build.onLoad({ filter: /node_modules.*(troika-|@react-three\/drei).*\.js$/ }, async (args) => {
      const contents = await fs.promises.readFile(args.path, 'utf8');
      return {
        contents: contents.replace(/(Box|Circle|Cone|Cylinder|Dodecahedron|Extrude|Icosahedron|Lathe|Octahedron|Plane|Polyhedron|Ring|Shape|Sphere|Tetrahedron|Torus|TorusKnot|Tube)BufferGeometry/g, '$1Geometry'),
        loader: 'js'
      };
    });
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), shimTroika],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildShim]
    }
  }
})
