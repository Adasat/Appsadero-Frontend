import { Box, Modal, Typography } from '@mui/material'
import { getSharedAsaderos } from '../../../services/myBBQ.service'
import { useEffect, useState } from 'react'

function PopUpShared({ open, handleClose, dataUser }) {
  const [shared, setShared] = useState([])

  const checkShared = async () => {
    const res = await getSharedAsaderos(dataUser.id)
    setShared([...shared, res])
  }

  useEffect(() => {
    checkShared()
  }, [])

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 1,
    p: 4,
  }

  return (
    <>
      <Modal
        position={'fixed'}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backdropFilter: 'blur(8px)',
        }}
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2" textAlign='center'>
            {shared.length > 0
              ? `${dataUser.nickname} y tú coinciden en los siguientes asaderos`
              : ` Parece que ${dataUser.nickname} y tú no coinciden en ningún asadero..`}
          </Typography>
          {shared.map((el) => (
            <div key={el.id}>
              <Typography variant="body" sx={{ mt: 2, textAlign: 'center'}}>
                {el.length > 0 && el}
              </Typography><br />
            </div>
          ))}
        </Box>
      </Modal>
    </>
  )
}

export default PopUpShared
