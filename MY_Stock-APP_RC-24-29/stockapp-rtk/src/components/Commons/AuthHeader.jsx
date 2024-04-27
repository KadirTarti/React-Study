import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const AuthHeader = () => {
  return (
    <Grid item xs={12} mb={3}>
      <Typography variant="h3" color="error" align="center">
      Inventory Management System
      </Typography>
    </Grid>
  );
};

export default AuthHeader;
