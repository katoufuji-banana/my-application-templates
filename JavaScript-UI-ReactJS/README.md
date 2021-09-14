# Web app's UI by React.js

## Technology Stack

- React.js
- react-use
- axios
- webpack v.5.x.x (babel-loader, style-loader, sass-loader)
- npm or yarn

## Usecase

- The UI of web application.


## Quick start

1. Download this project code.
2. Move to the directory where there is the package.json. and execute the command whichever you like.
   ```
   npm install
   yarn install
   ```
3. Run the mock server to host your react application, with this command. This command also watches your code. When you change the code, webpack re-builds it.
   ```
   npm watch
   yarn watch
   ```
4. Enjoy writing your UI code.
5. And you can use mock API. Please see the webpack config file (./config/webpack.dev.js).
6. If you want, write your test code and test it.
   ```
   npm test
   yarn test
   ```
7. Build your code with this command, before the release of your product.
   ```
   npm build
   yarn build
   ```
8. Bring your outputs in ./dist directory to your prod server.
