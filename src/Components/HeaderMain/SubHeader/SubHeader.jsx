import { Button, Card, Grid, Typography } from '@mui/material'

import { useNavigate } from 'react-router-dom'

function SubHeader({ menu }) {
  const navigate = useNavigate()


  return (
    <Card elevation={3} sx={{ padding: '10px', width: '100%' }}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h6">{menu}</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={() => {
              navigate('/home/dashboard')
            }}
          >
            Volver
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default SubHeader
