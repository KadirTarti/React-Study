import { Button } from "@mui/material";
import React from "react";

const MyButton = (props) => {
  return <Button sx={{'&:hover': {
    color: 'white',
    backgroundColor: '#ff5959',
    boxShadow: '1px 1px 10px black'}}} {...props}>{props.title}</Button>;
};

export default MyButton;
