



To install Cypress 
#node version 22.19.0
#npm version 11.6.0

#npm install cypress --save-dev

To use Cucumber
#npm install --save-dev cypress @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor esbuild


Allure report

#npm install --save-dev @shelex/cypress-allure-plugin allure-commandline

Generate Allure report

#npx allure generate allure-results --clean -o allure-report

Open Allure report
#npx allure open allure-report

To generate Allure results 
#npx cypress run --env allure=true