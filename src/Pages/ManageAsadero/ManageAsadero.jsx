import { Typography, Grid, Card, Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getMyOwnBbq } from '../../services/myBBQ.service'
import CardAsadero from '../../Components/CardAsadero/CardAsadero'

function ManageAsadero() {
  const [ownBbq, setOwnBbq] = useState([])
  const navigate = useNavigate()

  const listMyOwnBbq = async () => {
    const res = await getMyOwnBbq()
    setOwnBbq(res)
  }

  useEffect(() => {
    listMyOwnBbq()
  }, [])

  const showOwnBbq = () => {
    if (ownBbq && ownBbq.length > 0) {
      return ownBbq.map((el) => (
        <Grid item xs={12} sm={4} md={3.5} key={el.id}>
          <CardAsadero bbq={el} />
        </Grid>
      ))
    } else {
      return (
        <Grid>
          <Typography>
            No encontramos asaderos creados por ti. Seguimos buscando.{' '}
          </Typography>
          <Typography>
            <Link to="">Aquí puedes crear uno nuevo</Link>
          </Typography>
        </Grid>
      )
    }
  }

  return (
    <>
    <Card elevation={3} sx={{ padding: '30px', borderRadius: 10, width: '100%' }}>
      <Typography variant="h5">{title}</Typography>
      <Divider sx={{ marginBottom: '10px' }} />
    </Card> 
    <Grid
      container
      direction='row'
      spacing={3}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent= 'center'
       alignItems= 'center'
      sx={{ width: '100vw',  height: '90vh'}}
    >
      <Grid item xs={12}>
        <Grid container spacing={3} justifyContent="center">
          {showOwnBbq()}
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default ManageAsadero

/* */
