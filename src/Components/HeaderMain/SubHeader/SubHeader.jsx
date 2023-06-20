import { Card, Grid, Typography } from '@mui/material'
import ButtonCustom from '../../ButtonCustom/ButtonCustom'
import { useNavigate } from 'react-router-dom'

function SubHeader({menu}) {
  const navigate = useNavigate()

  const handleButton = () => {
    navigate('/home/dashboard')
  }
  return (
    <Card elevation={3} sx={{ padding: '10px', width: '100%' }}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h6">{menu}</Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <ButtonCustom
            props={{ navigate: '/home/dashboard', text: 'Volver' }}
            handleButton={handleButton}
          />
        </Grid>
      </Grid>
    </Card>
  )
}

export default SubHeader