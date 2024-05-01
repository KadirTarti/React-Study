import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik, Form } from "formik";
import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
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

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              email: "",
              firstName: "",
              lastName: "",
              image: "",
              city: "",
              bio: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
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
              <Button variant="contained"              type='submit'>
              Sign Up
              </Button>
              </Box>
            </Form>
            )
            }
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
