import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import PurchasesModal from "../components/Modals/PurchasesModal";
import { useState } from "react";

const Purchases = () => {


  const {
    getStockData,
  } = useStockCall();
  const { Purchases } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  setInitialState({
    name:'',
    phone:'',
    address:'',
    image:''
  })
}

  const [initialState, setInitialState] = useState({
    name:'',
    phone:'',
    address:'',
    image:''
  });
  console.log("purchases:", Purchases);
  console.log('purchases', initialState);


  useEffect(() => {
    // getPurchases()
    getStockData("purchases");
  }, []);

  return (
    <Container>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Purchases
      </Typography>
      <Button variant="contained" onClick={handleOpen}>New Firm</Button>
      <Grid container spacing={2} mt={3}>
        {Purchases.map((firm) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmCard {...firm} handleOpen={handleOpen} setInitialState={setInitialState}/>
          </Grid>
        ))}
      </Grid>
      {open && <FirmModal open={open} handleClose={handleClose} initialState={initialState}/>}
    </Container>
  );
}

export default Purchases;
