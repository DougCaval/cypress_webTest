🧩 Cypress + Cucumber + Allure Boilerplate (TypeScript)

Este boilerplate demonstra como montar um framework de testes com Cypress + Cucumber (BDD) + Allure Reports do zero, com suporte a TypeScript, hooks e execução paralela.

📦 Requisitos

Node.js ≥ 18

Java 8+ (para o Allure CLI)

npm ou yarn

🚀 Setup
1️⃣ Inicializar o projeto
mkdir cypress-cucumber-allure
cd cypress-cucumber-allure
npm init -y

2️⃣ Instalar dependências principais
# Cypress
npm i -D cypress

# Cucumber preprocessor + browserify (integração BDD)
npm i -D @badeball/cypress-cucumber-preprocessor @badeball/cypress-cucumber-preprocessor/browserify

# TypeScript + Node types
npm i -D typescript @types/node

# Allure reporter
npm i -D allure-commandline @shelex/cypress-allure-plugin

3️⃣ Inicializar o Cypress e o TypeScript
npx cypress open
npx tsc --init

4️⃣ Estrutura de pastas
cypress-cucumber-allure/
├─ cypress/
│  ├─ e2e/
│  │  ├─ login.feature
│  │  └─ steps/
│  │     └─ login.steps.ts
│  ├─ support/
│  │  ├─ commands.ts
│  │  ├─ e2e.ts
│  │  └─ hooks.ts
├─ cypress.config.ts
├─ tsconfig.json
├─ package.json
└─ cucumber-json/

5️⃣ Configurar o Cucumber + Allure no cypress.config.ts
import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    baseUrl: 'https://example.com',
    video: false,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      allureWriter(on, config);
      return config;
    },
  },
});

6️⃣ Configurar tsconfig.json
{
  "compilerOptions": {
    "target": "es2019",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "types": ["cypress", "@shelex/cypress-allure-plugin"]
  },
  "include": ["cypress/**/*.ts"]
}

7️⃣ Adicionar o plugin do Allure no cypress/support/e2e.ts
import '@shelex/cypress-allure-plugin';
import './commands';

8️⃣ Exemplo de Feature — cypress/e2e/login.feature
Feature: Login

  Scenario: Usuário faz login com sucesso
    Given que o usuário acessa a página de login
    When ele preenche o usuário e senha corretamente
    Then ele deve ver a mensagem "Bem-vindo!"

9️⃣ Steps — cypress/e2e/steps/login.steps.ts
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que o usuário acessa a página de login', () => {
  cy.visit('/login');
});

When('ele preenche o usuário e senha corretamente', () => {
  cy.get('#username').type('admin');
  cy.get('#password').type('123456');
  cy.get('button[type="submit"]').click();
});

Then('ele deve ver a mensagem {string}', (mensagem: string) => {
  cy.contains(mensagem).should('be.visible');
});

🔥 Executar os testes
Headless:
npx cypress run

UI:
npx cypress open

📊 Gerar Relatórios Allure

Após rodar os testes:

npx allure generate allure-results --clean -o allure-report
npx allure open allure-report

✅ Recapitulando

✅ Cucumber integrado com Cypress (BDD)

✅ Allure com métricas e screenshots automáticas

✅ TypeScript com IntelliSense

✅ Estrutura modular (steps + features + hooks)

✅ Compatível com pipelines CI/CD
