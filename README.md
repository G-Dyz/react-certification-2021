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

