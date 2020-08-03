### Approach

1. setup basic project structure w/ create react app
1. create UI components and layout
1. start integrating with api (fetch all and send)
1. refactoring on styles
1. clean up code

### technical debts

1. incoming messages? (this wasnt very clear for me if was a use case)
1. probably would need some kind of "load old messages" logic when scroll to the top / not loading all messages at once
1. error handling
1. token/"author" storage - this is hard coded on api file, in a real scenario i would store this this and use a request interceptor to add on headers on every request
1. retry when failling sending message

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
