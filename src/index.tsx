import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from 'router';

import reportWebVitals from './reportWebVitals';

import 'styles/index.scss';
import 'styles/global.scss';
import { Provider } from 'react-redux';
import { store } from 'states';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
