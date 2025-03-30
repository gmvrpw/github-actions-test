import dts from 'vite-plugin-dts';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [dts({ exclude: ['test/**/*.ts'] })],
  build: {
    target: ['es2020', 'edge134', 'firefox136', 'chrome135', 'safari17'],
    lib: {
      entry: 'src/index.ts',
      name: '@t15i/vanilla-tabs',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
      cssFileName: 'index',
    },
  },
};
