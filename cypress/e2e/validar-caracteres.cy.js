const caracteresEspeciais = "!@#$%^&*()_+{}[]:;'<>,.?/~`"; // Define uma string com caracteres especiais para teste

beforeEach(function() {
  cy.viewport(1920, 1080); // Define a resolução da tela para 1920x1080
  cy.visit("https://analista-teste.seatecnologia.com.br/"); // Acessa a URL da aplicação
  cy.contains('button', '+ Adicionar Funcionário').click(); // Clica no botão para abrir o formulário de adicionar funcionário
});

it('Preenche o formulário com caracteres especiais e tenta submeter', function() {
  // Preenche os campos do formulário com caracteres especiais
  cy.get('[name="name"]').type(caracteresEspeciais); // Preenche o campo Nome com caracteres especiais
  cy.get('[name="cpf"]').type(caracteresEspeciais); // Preenche o campo CPF com caracteres especiais
  cy.get('[name="rg"]').type(caracteresEspeciais); // Preenche o campo RG com caracteres especiais
  cy.get('input[name="birthDay"]').invoke('removeAttr').type('1998-01-01'); // Remove atributo possivelmente bloqueador e insere a data de nascimento

  cy.get('button[type="submit"]').click(); // Clica no botão de submeter o formulário
});

it('Valida que o funcionário com caracteres especiais aparece na tabela de funcionários', function() {
  cy.reload(); // Recarrega a página

  // Verifica se o nome do novo usuário com caracteres especiais está na tabela de funcionários
  cy.get('.c-jqbATT').contains(caracteresEspeciais).should('exist'); 
});
