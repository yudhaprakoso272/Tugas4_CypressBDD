// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: "https://www.saucedemo.com",
//     specPattern: "**/*.feature",
//     setupNodeEvents(on, config) {
//       const bundler = createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       });

//       on("file:preprocessor", bundler);
//       addCucumberPreprocessorPlugin(on, config);
//       return config;
//     },
//   },
// });

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});