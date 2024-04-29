import LockIcon from "@mui/icons-material/Lock";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import image from "../assets/signin0.jpg";
import logo from "../assets/inverntoryMaster2.png";
import AuthHeader from "../components/Commons/AuthHeader";
import AuthImage from "../components/Commons/AuthImage";
import LoginForm, { loginScheme } from "../components/Forms/LoginForm";
import useAuthCall from "../hooks/useAuthCall";
import AuthLogo from "../components/Commons/AuthLogo";

const Login = () => {
  const { login } = useAuthCall();
  return (
    <Container maxWidth="lg">
      <AuthLogo logo={logo}/>
        {/* <AuthHeader /> */}
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "primary.main",
              m: "auto",
              width: 50,
              height: 50,
              mb: '10px'
            }}
          >
            <LockPersonIcon size="30" />
          </Avatar>
          <Typography variant="h5" align="center" mb={4} color="primary.main">
            SIGN IN
          </Typography>

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
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main", textDecoration:'underline'}}         
            >
            <Link 
            to="/register"
            >Don't have an account? Sign Up Here</Link>
          </Box>
        </Grid>

        {/* <AuthImage image={image} /> */}
      
    </Container>
  );
};

export default Login;
