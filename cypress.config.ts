import { defineConfig } from "cypress";

export default defineConfig({

  e2e: {
    baseUrl:"https://www.saucedemo.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    validUsername:"standard_user",
    wrongUsername:"wrongUsername",
    lockedOutUsername: "locked_out_user",
    validPassword:"secret_sauce",
    wrongPassword:"wrongPassword"
  },
});
