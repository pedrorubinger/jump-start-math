import React from 'react';

import Router from './routes';
import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router />
      <GlobalStyle />
    </div>
  );
}

export default App;
