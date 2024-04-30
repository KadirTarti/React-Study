import React from 'react'
import LoginForm from '../components/forms/LoginForm';
import useAuthCall from '../components/hooks/useAuthCall';

const Login = () => {
  const { login } = useAuthCall();
  return (
    <div><LoginForm/></div>
  )
}

export default Login