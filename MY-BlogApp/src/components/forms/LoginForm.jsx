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

    const [showPassword, setShowPassword] = useState(false);
  
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };
  

  return (
    <Form>
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width:'60%', margin:'auto'  }}>
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          style={{fontFamily:'monospace'}}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        <TextField
          label="Password"
          name="password"
          id="password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          style={{fontFamily:'monospace'}}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
          InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                 >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
                </InputAdornment>),
            }}   
        />
        {!loading ? (
          <Button variant="contained" type="submit" style={{fontFamily:'monospace'}}>
           Sign In
          </Button>
        ) : (
          <Button variant="contained" disabled={loading}>
            <CircularProgress />
          </Button>
        )}
        </Box>
    </Form>
  );
}
export default LoginForm