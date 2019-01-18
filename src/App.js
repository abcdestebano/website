import React from 'react';

// ROUTER
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes';

// REDUX
import { Provider } from 'react-redux'
import configStore from './store';

const initialState = {
  languageReducer: {
    language: 'english'
  }
}

const store = configStore(initialState)

const App = () => (
  <Router>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>
)

export default App;
