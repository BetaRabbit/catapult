import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';


import App from './components/App';
import AuthPopup from './components/AuthPopup';
import stores from './stores';

import './index.css';

useStrict(true);

ReactDOM.render(
  <Provider {...stores}>
    <div>
      {process.env.NODE_ENV === 'development' ? <DevTools />: null}
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={App} />
          <Route path="/auth-popup" component={AuthPopup} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);
