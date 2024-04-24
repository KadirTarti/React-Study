import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import useStockCall from '../../hooks/useStockCall';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PurchaseModal({open, handleClose, initialState}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

const [info, setInfo] = useState(initialState);

const {postStockData, putStockData} = useStockCall()

const handleChange = (e) => {
    console.log(e.target.id);
    console.log(e.target.name);
    // setInfo({...info, [e.target.id]:e.target.value}) 
    //id ile de yakalanabilir
    setInfo({...info, [e.target.name]:e.target.value})
    console.log(info); //! setter asenkron çalışır, o nedenle güncel çıktıyı yakalayamam!
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', info);
    postStockData('Purchases', info);
    if (info._id) {
        putStockData ('Purchases', info)
    } else {
        postStockData ('Purchases', info)
    }
    handleClose();     
}


  return (
    <div>
      <Modal
        open={open}
        onClose = {handleClose}  // onClose mui modal'a ait bir fonksiyon
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box component='form'
            onSubmit={handleSubmit}
            sx={{display:'flex', flexDirection:'column', gap:2}}>
          <TextField
            label="Purchase Logo"
            name="image"
            id="image"
            type="text"
            variant="outlined"
            value={info.image}
            onChange={handleChange}
          />
          <Button type='submit' variant='contained'>
          {info._id ? 'Update Purchase' : 'Submit Purchase'}
          </Button>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}