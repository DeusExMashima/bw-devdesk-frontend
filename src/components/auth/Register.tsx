import React from 'react';
import { TextField, Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'


interface RegisterValue {
  newUser: UserInfo
}

const Register: React.FC = () => {


  const { register, errors, handleSubmit } = useForm<RegisterValue>()

  const onSubmit = handleSubmit(({ newUser }) => {
    console.log(newUser)
  })

  return (
    <div className="auth">
      <form className="formDisplay">
        <TextField 
        name="name"
        style={{margin: "10px"}}
        inputRef={ register({ required: true }) } />
        { errors.newUser && "Name is Required" }

        <TextField 
        name="email"
        className="formInside"
        style={{margin: "10px"}}
        inputRef={ register({ required: true }) } />
        { errors.newUser && "Email is Required" }

        <TextField 
        name="password"
        style={{margin: "10px"}}
        className="formInside"
        inputRef={ register({ required: true }) } />
        { errors.newUser && "Password is Required" }

        <Button style={{margin: "10px"}} type="submit"> Register </Button>

      </form>
    </div>
  );
}

export default Register;