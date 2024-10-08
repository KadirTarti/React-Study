import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";

export const SignupSchema = Yup.object().shape({
  username: Yup.string().min(3).required("Required"),
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8)
    .max(20)
    .matches(/\d/, "Must contain a number")
    .matches(/[a-z]/, "Must contain a lowercase character")
    .matches(/[A-Z]/, "Must contain a uppercase")
    .matches(/[@+&?!*%-]/, "Must contain a symbol (@+&?!*%-)")
    .required('You can not continue without your password :( '),
  image: Yup.string(),
  city: Yup.string(),
  bio: Yup.string(),
});

const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isSubmitting,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <TextField
            id="firstName"
            name="firstName"
            label="FirstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            id="lastName"
            name="lastName"
            label="LastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <TextField
            id="username"
            name="username"
            label="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            id="image"
            name="image"
            label="Image"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.image && Boolean(errors.image)}
            helperText={touched.image && errors.image}
          />
          <TextField
            id="city"
            name="city"
            label="City"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.city && Boolean(errors.city)}
            helperText={touched.city && errors.city}
          />
          <TextField
            id="bio"
            name="bio"
            label="Bio"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bio && Boolean(errors.bio)}
            helperText={touched.bio && errors.bio}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Confirm Password"
            name="confirmPassword"
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            variant="outlined"
            style={{ fontFamily: "monospace" }}
            value={values.confrimPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.confirmPassword && errors.confirmPassword}
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Sign Up"}
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
