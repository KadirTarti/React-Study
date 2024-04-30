import React from 'react'
import LoginForm from '../components/forms/LoginForm';
import useAuthCall from '../components/hooks/useAuthCall';
import { Formik } from 'formik';

const Login = () => {
  const { login } = useAuthCall();
  return (
    <Formik
    initialValues={{ email: "", password: "" }}
    validationSchema={loginScheme}
    onSubmit={(values, actions) => {
      login(values);
      actions.resetForm();
      actions.setSubmitting(false);
    }}
    component={(props) => <LoginForm {...props} />}
  ></Formik>
  )
}

export default Login