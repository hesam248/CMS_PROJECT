import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


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

export default function Modalcom() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Button onClick={handleOpen}><AddShoppingCartIcon className='AddShop'/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            test
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          This site is only for testing and not much focus has been put on it ///
          این سایت فقط برای تست است و تمرکز زیادی بر روی ان نشده
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}