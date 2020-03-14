import React from 'react'

import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import { postLogin } from '../../actions'

import { TextField, Button } from '@material-ui/core'



export const Login: React.FC = () => {

  const { register, setValue, handleSubmit, errors } = useForm<LoginInfo>();
  
  const dispatch = useDispatch()

  const onSubmit = (values:LoginInfo) => {
    dispatch(postLogin(values))
  }

  return (
    <div className="auth">
      <form className="formDisplay" onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          required
          autoFocus
          style={{margin: "10px"}}
          variant="outlined"
          name="email"
          label="Email"
          inputRef={register}
          />
        <TextField 
          required
          autoFocus
          style={{margin: "10px"}}
          variant="outlined"
          name="password"
          type="password"
          label="Password"
          inputRef={register}
          />
        <Button style={{margin: "10px", padding: "10px"}} className="formInside" type="submit" variant="contained" color="primary">Login</Button>
        </form>
    </div>
  );
}
