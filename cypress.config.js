const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // URL base do seu projeto
    supportFile: 'cypress/support/e2e.js', // Arquivo de suporte
    specPattern: 'cypress/e2e/**/*.cy.js', // Padrão para encontrar arquivos de teste
    video: true, // Ativa a gravação de vídeos
    videosFolder: 'cypress/videos', // Diretório onde os vídeos serão salvos
    setupNodeEvents(on, config) {
      // Implemente listeners de eventos do Node aqui (opcional)
    },
  },
});
