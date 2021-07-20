import Router from './routes';
import GlobalStyle from './styles/global';
import {Provider} from 'react-redux'
import store from './store';

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
