/** @type {import('vite').UserConfig} */
export default {
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      instances: [
        { browser: 'chromium' },
        { browser: 'firefox' },
        { browser: 'webkit' },
      ],
    },
    setupFiles: 'test/setup.ts',
  },
};
