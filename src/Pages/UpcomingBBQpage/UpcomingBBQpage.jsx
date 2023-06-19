import { Card, Divider, Typography } from '@mui/material'

function UpcomingBBQpage() {
  return (
    <Card elevation={3} sx={{ padding: '30px', borderRadius: 10, width: '100%' }}>
      <Typography variant="h5">Próximos asaderos</Typography>
      <Divider sx={{ marginBottom: '10px' }} />
    </Card>
  )
}

export default UpcomingBBQpage
