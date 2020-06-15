# <%= app_name %> App

This project was bootstrapped with [React Web Creator](https://github.com/egodigital/create-react-app).

## Development

### Start local web server

```bash
npm start

# if you use Yarn
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Debugging

If you use [Visual Studio Code](https://code.visualstudio.com/), install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension and do the following steps:

* start the local web server
* open `Run` tab in Visual Studio Code
* select `Debug <%= app_name %> in Chrome`
* click on `Start Debugging`

### File and folder structure

| Folder | Description |
|--------|-------------|
| `/src/components` | Contains all global [components](https://reactjs.org/docs/components-and-props.html). |
| `/src/containers` | Contains all global containers, like headers and bodies. |
| `/src/i18` | Manages all languages strings, provided by [i18next](https://react.i18next.com/). |
| `/src/pages` | Should only store components, which do represent pages and their sub elements. |
| `/src/store` | Global [Redux](https://redux.js.org/basics/usage-with-react) store, with [Thunk](https://github.com/reduxjs/redux-thunk) support. |
| `/src/serviceWorker.ts` | [PWA](https://en.wikipedia.org/wiki/Progressive_web_application) support. This is DE-ACTIVATED by default. Edit `/src/index.ts` to activate it. |

### Tests

```bash
npm test

# if you use Yarn
yarn test
```

Launches the test runner in the interactive watch mode.

To implement a test for a component file, like `MyComponent.tsx`, create a file with a `.test` suffix in the same folder (`MyComponent.test.tsx`), and start with something, like the following skeleton:

```typescript
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from './MyComponent';
import React from 'react';
import { configure, shallow, ShallowWrapper } from 'enzyme';

configure({ adapter: new Adapter() });

describe('<MyComponent /> component', () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<MyComponent />);
    });

    it('should contain exact 1 <div> element', () => {
        // check if component requires exact 1 <div> element
        expect(wrapper.find('div')).toHaveLength(1);
    });
});
```

You can find out more in the [Jest](https://jestjs.io/docs/en/getting-started) and [enzyme](https://enzymejs.github.io/enzyme/docs/installation/react-16.html) documentations.

## Production

### Build

The following command builds the app for production to the `build` folder:

```bash
npm run build

# if you use Yarn
yarn build
```

## Copyright

* property of [e.GO Digital GmbH, Aachen, Germany](https://e-go-digital.com):
  * [egodigital-logo.png](./src/assets/egodigital-logo.png)
  * [favicon.ico](./public/favicon.ico)
