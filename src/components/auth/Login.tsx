import React from 'react';
import { TextField, Button } from '@material-ui/core'

const Login: React.FC = () => {
  return (
    <div className="auth">
      <form className="formDisplay">
        <TextField 
          required
          autoFocus
          style={{margin: "10px"}}
          variant="outlined"
          name="email"
          label="Email"
          />
        <TextField 
          required
          autoFocus
          style={{margin: "10px"}}
          variant="outlined"
          name="password"
          type="password"
          label="Password"
          />
        <Button style={{margin: "10px", padding: "10px"}} className="formInside" type="submit" variant="contained" color="primary">Login</Button>
        </form>
    </div>
  );
}

export default Login;