import { faker } from '@faker-js/faker/locale/pt_BR'; // Importa a biblioteca Faker para gerar dados aleatórios

beforeEach(function() {
  cy.viewport(1920, 1080); // Define a resolução da tela para 1920x1080
  cy.visit("https://analista-teste.seatecnologia.com.br/"); // Acessa a URL da aplicação
  cy.contains('button', '+ Adicionar Funcionário').click(); // Abre o formulário
});

it("Deve validar os campos obrigatórios preenchendo progressivamente", function() {
  cy.get('button').contains('Salvar').click(); // Clica no botão Salvar sem preencher os campos obrigatório Nome
  
  // Validar mensagem de erro, depois preencher o campo Nome
  cy.get('input[name="name"]').then(function($input) {
    expect($input[0].validationMessage).to.eq('Preencha este campo.'); // Verifica a mensagem de campo Obrigatório para Nome
  }).type('Matheus QATeste'); // Preenche o campo Nome
  
  cy.get('button').contains('Salvar').click(); // Tenta salvar novamente

  // Validar mensagem de erro, depois preencher campo CPF
  cy.get('input[name="cpf"]').then(function($input) {
    expect($input[0].validationMessage).to.eq('Preencha este campo.');  // Verifica a mensagem de campo Obrigatório para CPF
  }).type('00000014141'); // Preenche o campo CPF
  
  cy.get('button').contains('Salvar').click(); // Tenta salvar novamente
  
  // Validar mensagem de erro, depois preencher RG
  cy.get('input[name="rg"]').then(function($input) {
    expect($input[0].validationMessage).to.eq('Preencha este campo.');  // Verifica a mensagem de campo Obrigatório RG
  }).type('0123456789'); // Preenche o campo RG
  
  cy.get('button').contains('Salvar').click(); // Tenta salvar novamente
  
  // Validar mensagem de erro, depois preencher campo Data de Nascimento
  cy.get('input[name="birthDay"]').then(function($input) {
      expect($input[0].validationMessage).to.eq('Preencha este campo.'); // Verifica a mensagem de campo obrigatório para Data de Nascimento
    }).invoke('removeAttr', 'required').type('1950-01-01'); // Preenche o campo Data de Nascimento

  cy.get('button').contains('Salvar').click(); // Tenta salvar novamente
  
  // Validar mensagem de erro, depois preencher campo Número do CA
  cy.get('input[name="caNumber"]').then(function($input) {
    expect($input[0].validationMessage).to.eq('Preencha este campo.');  // Verifica a mensagem de campo Obrigatório para "Número do CA"
  }).type('3535'); // Preenche o campo Número do CA

  cy.get('button').contains('Salvar').click(); // Tenta salvar novamente
});
