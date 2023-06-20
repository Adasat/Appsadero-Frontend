import { Box, Modal, Typography } from '@mui/material'
import { getSharedAsaderos } from '../../../services/myBBQ.service'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PopUpShared({ open, handlePopup, idSelected }) {
  const [shared, setShared] = useState([])

  
  const checkShared = async () => {
    const res = await getSharedAsaderos(idSelected)
    setShared(res)
  }

  useEffect(() => {
    checkShared()
  }, [])




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
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backdropFilter: 'blur(8px)',
          backgroundColor: 'transparent',
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Fulanito va a los siguientes asaderos:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {shared.map((el) => <Typography key={el.id}>{el}</Typography>)}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default PopUpShared
