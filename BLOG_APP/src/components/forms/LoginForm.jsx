import { Button, CircularProgress, IconButton, InputAdornment } from "@mui/material";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { useState } from "react";
import { useSelector } from "react-redux"
import { object, string } from "yup"; //! bu şekilde de direk olarak metodları alıp yine validasyon şemamızı oluşturabiliriz. 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const loginScheme = object({
  username: string()
    .username("Please enter a valid username!")
    .required("username is required!"),
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
          label="Username"
          name="username"
          id="username"
          type="username"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.username && errors.username}
          error={touched.username && Boolean(errors.username)}
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
          <Button variant="contained" type="submit" >
           Sign In
          </Button>
        ) : (
          <Button variant="contained" disabled={loading}>
            <CircularProgress />
          </Button>
        )}

        {/* <Button
          variant="contained"
          type="submit"
          disabled={loading}
          startIcon={loading && <CircularProgress />}>
          Submit
        </Button> */}
      </Box>
    </Form>
  );
}

export default LoginForm
