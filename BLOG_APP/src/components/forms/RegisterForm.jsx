import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3)
      .required("Required"),
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
    .required(),
    image: Yup.string()
    .min(3)
    .required(),
    city: Yup.string()
    .min(3)
    .required(),
    bio: Yup.string()
    .min(10)
    .required(),
  });

  
  const RegisterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => {
    return (
        <Form>
        <Box sx={{display: "flex", flexDirection:"column", gap:1}}>

        <TextField
        id='username'
        name='username'
        label='Username'
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.username && Boolean(errors.username)}
        helperText={touched.username && errors.username}
        />
          <TextField
        id='password'
        name='password'
        label='Password'
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        />
          <TextField
        id='email'
        name='email'
        label='Email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        />
          <TextField
        id='firstName'
        name='firstName'
        label='FirstName'
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.firstName && Boolean(errors.firstName)}
        helperText={touched.firstName && errors.firstName}
        />
          <TextField
        id='lastName'
        name='lastName'
        label='LastName'
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.lastName && Boolean(errors.lastName)}
        helperText={touched.lastName && errors.lastName}
        />
          <TextField
        id='image'
        name='image'
        label='Image'
        value={values.image}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.image && Boolean(errors.image)}
        helperText={touched.image && errors.image}
        />
          <TextField
        id='city'
        name='city'
        label='City'
        value={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.city && Boolean(errors.city)}
        helperText={touched.city && errors.city}
        />
          <TextField
        id='bio'
        name='bio'
        label='Bio'
        value={values.bio}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.bio && Boolean(errors.bio)}
        helperText={touched.bio && errors.bio}
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
    )
  }

  export default RegisterForm;