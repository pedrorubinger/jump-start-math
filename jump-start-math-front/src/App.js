import React from 'react';

import Router from './routes';
import GlobalStyle from './styles/global';
import {Provider} from 'react-redux'
import { store, persistor } from './store';
import 'antd/dist/antd.css';

import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Router>

        </Router>
        <GlobalStyle />
      </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
