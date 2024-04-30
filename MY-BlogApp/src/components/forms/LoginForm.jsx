import React from 'react'

export const loginScheme = object({
    email: string()
      .email("Please enter a valid email!")
      .required("Email is required!"),
    password: string()
      .required("Password is required!")
  })

 const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
    const { loading } = useSelector(state => state.auth);// storeda yaptığımız fetchStart işlemini kullanmış olduk.



  return (
    <div>LoginForm</div>
  )
}

export default LoginForm