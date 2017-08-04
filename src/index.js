import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import Store from './store';
import TemplateContainer from './components/TemplateContainer';


const renderApp = (Component) => {
  render(
      <Provider store={Store}>
        <Component headline="React is AAN!" count={1234} showCount />
      </Provider>,
    document.getElementById('root'),
  );
};

renderApp(TemplateContainer);

// registerServiceWorker();

