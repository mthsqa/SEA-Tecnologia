# Automação de Testes      SEA-Tecnologia 

## 📌 Sobre o Projeto
Este repositório contém um projeto de automação de testes desenvolvido como parte de um desafio de contratação para a vaga de Analista de Testes/QA na SEA Tecnologia. O objetivo foi validar a funcionalidade, usabilidade e conformidade de uma aplicação web fictícia, garantindo a qualidade do sistema por meio de testes manuais, report de falhas e Testes automatizados e end-to-end (E2E), e sugestões de melhorias no sistema.

## 🛠️ Tecnologias Utilizadas

- **Cypress** 🧪 - Framework de testes automatizados
- **Yarn** 📦 - Gerenciador de pacotes
- **Node.js** 📦 - Ambiente de execução JavaScript para backend e automação

## 📂 Estrutura do Projeto

```
📁 sea-tecnologia/
 ├── 📂 cypress/                   # Testes automatizados
 │    ├── 📂 e2e/                              # Testes E2E
 │    │    ├── 📄 cadastro-funcionario.cy.js   # Teste de cadastro de funcionário
 │    │    ├── 📄 validar-campos-obg.cy.js     # Teste de validação de campos obrigatórios
 │    │    ├── 📄 validar-caracteres.cy.js     # Teste de caracteres especiais
 │    ├── 📂 fixtures/             # Dados mockados para os testes
 │    ├── 📂 plugins/              # Plugins do Cypress
 │    ├── 📂 support/              # Comandos customizados e utilitários
 ├── 📄 cypress.json               # Configurações do Cypress
 ├── 📄 package.json               # Dependências do projeto
 ├── 📄 README.md                  # Documentação do projeto
 ├── 📄 .gitignore                 # Arquivos a serem ignorados no Git

```


## 🚀 Como Configurar o Ambiente

### 1️⃣ Pré-requisitos
Antes de começar, instale os seguintes itens no seu sistema:

- **Node.js** (versão 14 ou superior recomendada)
- **Yarn** (`npm install -D yarn`)
- **Cypress** (`npm install cypress --save-dev`)

### 2️⃣ Clonar o Repositório
```bash
git clone https://github.com/mthsqa/SEA-Tecnologia.git
cd SEA-Tecnologia
```

### 3️⃣ Instalar Dependências
```bash
yarn install
```

#### 🔹 Rodar testes no modo interativo
```bash
yarn cypress open
```

## 📊 Relatórios de Testes e Casos de Teste

Todos os Catestes, o rastreamento de bugs e a identificação de falhas, assim como outras etapas importantes do processo seletivo, estão documentados no Google Sheets. Utilize os links abaixo para acessar as documentações:

- [Casos de Teste](https://docs.google.com/spreadsheets/d/1x5fcHXatu7seQ8MZI1WWmLrU_I77L6l74zd2BmOoNP4/edit?usp=sharing)
- [Rastreamento de Bugs](https://docs.google.com/spreadsheets/d/1x5fcHXatu7seQ8MZI1WWmLrU_I77L6l74zd2BmOoNP4/edit?usp=sharing)


## 📌 Contato
- **GitHub**: [mthsqa](https://github.com/mthsqa)
- **LinkedIn**: [mthsqa](https://linkedin.com/in/mthsqa)
- **Email**: mthsqa@gmail.com

---

Desenvolvido por [mthsqa](https://github.com/mthsqa)
