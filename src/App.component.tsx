import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './styles.css'

import Home from "./components/pages/Home"
import Register from './components/auth/Register';
import Login from './components/auth/Login';

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
