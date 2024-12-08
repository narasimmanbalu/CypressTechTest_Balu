import { defineConfig } from 'cypress'
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild'

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  )

  return config
}

export default defineConfig({
  e2e: {
    env: {
      BEARER_TOKEN: "65f50188dec1fd564a5e7e403dd3b76896d80c573fabc222f7fbb4cda3d1daee"
    },
    "specPattern": "cypress/e2e/**/*.feature",
    setupNodeEvents,
  },
})
