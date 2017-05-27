import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// connect with store here

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
registerServiceWorker();
