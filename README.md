[![npm](https://img.shields.io/npm/v/@egodigital/create-react-app.svg)](https://www.npmjs.com/package/@egodigital/create-react-app)

# @egodigital/create-react-app

Generator, that creates and setup a new [React](https://reactjs.org/) web app, with a lot of benefits:

* [TypeScript](https://www.typescriptlang.org/) support
* [Debugging in Visual Studio Code](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_debugging-react)
* [Material UI](https://material-ui.com/)
* [Page routing](https://www.npmjs.com/package/react-router-dom)
* [SASS modules](https://github.com/sass/node-sass)
* [multi language support](https://react.i18next.com/)
* [axios HTTP client](https://github.com/axios/axios)
* [Redux](https://redux.js.org/) + [Redux Thunk](https://github.com/reduxjs/redux-thunk) + [DevTools](https://github.com/zalmoxisus/redux-devtools-extension)
* [Recharts](https://recharts.org/)
* [Jest](https://jestjs.io/) + [enzyme](https://enzymejs.github.io/enzyme/)
* [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

## Usage

To execute the generator, run one of the following commands:

```bash
npx github:egodigital/create-react-app my-new-app
```

The following arguments are supported:

| Name         | Alias | Description | Example |
|--------------|-------|-------------|---------|
| `force`      | `f`   | Overwrite existing project. | `-f` |
| `git-init`   | `g`   | Automatically initializes a git repository for the project. | `-g` |
| `vscode`     | `v`   | Automatically open Visual Studio Code after project has been created. | `-v` |

## License

React Web Creator is [licensed as MIT](https://github.com/egodigital/create-react-app/blob/master/LICENSE).
