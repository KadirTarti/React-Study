import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import { Box} from "@mui/material";
import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import RegisterForm, { SignupSchema } from "../components/forms/RegisterForm";
import { Outlet } from "react-router-dom";



const Register = () => {
  
  const {register} = useAuthCall()
  const navigate = useNavigate()

    // Kayıt işlemi tamamlandıktan sonra yönlendirme
    const handleRegister = async (values) => {
      await register(values);
      navigate('/'); // Kullanıcıyı giriş sayfasına yönlendir
    };

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
            onSubmit={(values, actions) => {
              // same shape as initial values
              console.log(values);
              handleRegister(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component= {(props) => <RegisterForm {...props}/>}>
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

      </Grid>
      <Outlet/>
    </Container>
);
  
};

export default Register;
