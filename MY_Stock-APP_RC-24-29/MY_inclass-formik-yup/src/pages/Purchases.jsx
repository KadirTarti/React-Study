import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import PurchaseModal from "../components/Modals/PurchaseModal"
import { useState } from "react";

const Purchases = () => {

  const {getStockData} = useStockCall();
  const { purchases } = useSelector((state) => state.stock);
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
  console.log("purchases:", purchases);
  console.log('purchases', initialState);


  useEffect(() => {
    // getPurchases()
    getStockData("purchase");
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
      <Button variant="contained" onClick={handleOpen}>New Purchase</Button>
   
      {open && <PurchaseModal open={open} handleClose={handleClose} initialState={initialState}/>}
    </Container>
  );
}

export default Purchases;
