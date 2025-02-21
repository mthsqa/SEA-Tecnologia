import { faker } from '@faker-js/faker/locale/pt_BR'; // Importa a biblioteca Faker para gerar dados aleatórios

const nomeAleatorio = faker.name.fullName(); // Gera um nome aleatório para ser usado no formulário

  beforeEach(function () {
    cy.viewport(1920, 1080); // Define a resolução da tela para 1920x1080
    cy.visit("https://analista-teste.seatecnologia.com.br/"); // Acessa a URL da aplicação
    cy.contains('button', '+ Adicionar Funcionário').click(); // Clica no botão para adicionar um funcionário

  });

  it("Deve validar o título da aplicação", function () {
    cy.title().should("be.equal", "Vite + React + TS"); // Verifica se o título da aplicação está correto
  });

  it("Deve cadastrar um novo funcionário com sucesso ao preencher todos os campos", function () {

    cy.get('button[role="switch"]').click().should('contain.text', 'ativo'); // Ativa o botão switch "Ativo/Inativo" e verifica se o status está correto

    cy.get('input[name="name"]').type(nomeAleatorio); // Preenche o campo de nome com um valor aleatório
    cy.get('input[name="cpf"]').type('00000014141'); // Preenche o campo CPF com um valor fixo
    cy.get('input[name="rg"]').type('0123456789'); // Preenche o campo RG com um valor fixo

    cy.get('input[name="birthDay"]').invoke('removeAttr').type('1998-01-01'); // Remove atributo possivelmente bloqueador e insere a data de nascimento

    cy.get('span.ant-select-selection-item[title="Cargo 01"]').click(); // Abre a lista de cargos
    cy.get('.ant-select-item-option-content').contains('Cargo 02').click(); // Seleciona o Cargo 02

    cy.get('.ant-select-selection-item[title="Ativid 01"]').click(); // Abre a lista de atividades
    cy.get('.ant-select-item-option-content').contains('Ativid 02').click(); // Seleciona a Atividade 02

    cy.get('span.ant-select-selection-item[title="Capacete de segurança"]').click(); // Abre a lista de EPI
    cy.get('.ant-select-item-option-content').contains('Óculos de proteção').click(); // Seleciona o item de proteção

    cy.get('input[name="caNumber"]').type('3535'); // Preenche o número do CA

    cy.get('input[type="file"]').attachFile('atestado.saude.png'); // Anexa um arquivo de atestado de saúde
    cy.get('label[for="file"]').should('contain', 'Selecione o arquivo'); // Verifica se input de arquivo foi validado no site

    cy.get('form').submit(); // Clica no botão de submeter o formulário
  });

  it('Deve validar se o funcionário aparece na tabela de funcionários', function () {
    cy.reload();  // Recarrega a página

    cy.get('.c-jqbATT').contains(nomeAleatorio).should('exist'); // Verifica se o nome do novo usuário está na tabela
  });

  
