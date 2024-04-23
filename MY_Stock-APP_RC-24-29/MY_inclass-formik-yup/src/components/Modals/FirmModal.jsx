import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function FirmModal({open, handleClose}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose = {handleClose}  // onClose mui modal'a ait bir fonksiyon
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box component='form'>,
            <TextField
            label="Firm Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
          />
          <TextField
            label="Firm Address"
            name="address"
            id="address"
            type="text"
            variant="outlined"
          />
          <TextField
            label="Firm Phone"
            name="phone"
            id="phone"
            type="text"
            variant="outlined"
          />
          <TextField
            label="Firm Logo"
            name="image"
            id="image"
            type="text"
            variant="outlined"
          />
            </Box>
        </Box>
      </Modal>
    </div>
  );
}