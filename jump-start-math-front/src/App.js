import React from 'react';

import Router from './routes';
import GlobalStyle from './styles/global';
import {Provider} from 'react-redux'
import store from './store';
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>

        </Router>
        <GlobalStyle />
      </div>
    </Provider>
  );
}

export default App;
