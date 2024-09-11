const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // You can implement node event listeners here
    },
    baseUrl: 'https://qa-test.emcd.io/',  // Ваш базовый URL
  },
});
