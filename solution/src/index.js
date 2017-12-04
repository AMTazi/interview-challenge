import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

injectGlobal`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  #root {
  }

  html, body {
    height: 100%;
  }

  body {
    background-color: #fcfcfc;
  }
`
