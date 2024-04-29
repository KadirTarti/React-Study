import { Button } from "@mui/material";
import React from "react";

const MyButton = (props) => {
  return <Button sx={{'&:hover': {
    color: 'white',
    backgroundColor: '#085f63',
    boxShadow: '1px 1px 30px gray'}}} {...props}>{props.title}</Button>;
};

export default MyButton;
