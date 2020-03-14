import React from 'react';
import { TextField, Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'


export const Register: React.FC = () => {


  const { register, errors, handleSubmit } = useForm<UserInfo>()

  const onSubmit = handleSubmit(({ name, email, password, role }) => {
    console.log(name, email, password, role)
  })

  return (
    <div className="auth">
      <form className="formDisplay">
        <TextField 
        name="name"
        style={{margin: "10px"}}
        inputRef={ register({ required: true }) } />
        {/* { errors.name && "Name is Required" } */}

        <TextField 
        name="email"
        className="formInside"
        style={{margin: "10px"}}
        inputRef={ register({ required: true }) } />
        {/* { errors.email && "Email is Required" } */}

        <TextField 
        name="password"
        style={{margin: "10px"}}
        className="formInside"
        inputRef={ register({ required: true }) } />
        {/* { errors.password && "Password is Required" } */}

        <Button style={{margin: "10px"}} type="submit"> Register </Button>

      </form>
    </div>
  );
}