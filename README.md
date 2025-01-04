# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


**dependencies:**

For vitest:
npm install -D vitest

For RTL and extensions like toBeInTheDocument:
npm install -D @testing-library/react @testing-library/jest-dom

To simulate DOM in NodeJs, it is necessary to interactuate with the browser: 
npm install -D jsdom

An option to jsdom:
npm install -D happy-dom

**How to manage this**

Create a file inside the src folder named setupTest.js and add this:

_import '@testing-library/jest-dom';  // Para usar las extensiones de jest-dom_

And in the vite.config.js add this:

_import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';_

_export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    include: ['**/*.test.jsx'],
    environment: 'happy-dom',
    setupFiles: './src/setupTests.js',
  },
});_


**Add scripts in the package.json**

in the scripts, add this:
"scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
}

