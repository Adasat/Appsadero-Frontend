import { Box, Modal, Typography } from '@mui/material'

function PopUpShared({ open, handle }) {
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
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
      backdropFilter: 'blur(8px)',
      backgroundColor: 'transparent'}}

      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            titulo prueba modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            este es un texto de prueba del modal
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default PopUpShared
