# Wizeline Academy - 2021 React Bootcamp

Please refere to the following [GIST](https://gist.github.com/villacoder/9f980254461fa8bfbe93067db2126872) for further instructions

# Init Project

npx create-react-app my-app

# Configure Project

npm install -g npx

npm install --save-dev eslint prettier

npm install --save-dev eslint-config-airbnb
npx install-peerdeps --dev eslint-config-airbnb-base

npm install --save-dev eslint-plugin-prettier

npm install --save-dev eslint-config-prettier

npm install --save-dev eslint-plugin-react

npm install --save-dev eslint-plugin-react-hooks

npm install --save-dev eslint-plugin-jsx-a11y

## Testing Library
npm install --save-dev eslint-plugin-testing-library

# Configure Styles

npm i styled-components

npm i react-icons

# Routes

npm i react-router-dom

# Save test

npm test -- --coverage --watchAll=false > test-challenge-01.txt


# Answers of questions
## Using create-react-app, what do we need to set up for testing?
When we use create-react-app, React Testing Library does not require any configuration to be used. 
But if we want we can configure Eslint and Prettier for Testing Library, with next command.
`
npm install --save-dev eslint-plugin-testing-library
`

## What components are worth to test in your development?
The sidebar, because it depends on the header, then if header changes, maybe sidebar not work correctly.
## Can you apply TDD once you already created components?

No, because the tests will be not objectives, it's try adjust the test for code, but in TDD, the code should adjust for passing tests.

# Save test
`
npm test -- --coverage > test-challenge-01.txt
`
`
npm test -- --coverage --watchAll=false > test-challenge-01.txt
`
