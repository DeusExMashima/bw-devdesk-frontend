import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './styles.css'

import { Home } from "./components"
import { Register } from './components';
import { Login } from './components';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route to="/login" component={ Login } />
        <Route to="/register" component={ Register } />
      </Switch>>
    </div>
  );
}

export default App;
