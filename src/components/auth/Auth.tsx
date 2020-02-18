import React from 'react'
import Login from './Login'
import Register from './Register'
import { Paper, Tabs, Tab }  from '@material-ui/core'


const Auth: React.FC = () => {
  
    return (
        <div>
            <Login />
            <Register />
        </div>
    )
}

export default Auth

