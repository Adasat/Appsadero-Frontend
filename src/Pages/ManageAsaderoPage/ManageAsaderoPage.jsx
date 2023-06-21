import { Typography, Grid, Card } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getMyOwnBbq } from '../../services/myBBQ.service'
import CardAsadero from '../../Components/CardAsadero/CardAsadero'
import SubHeader from '../../Components/HeaderMain/SubHeader/SubHeader'

function ManageAsaderoPage() {
  const [ownBbq, setOwnBbq] = useState([])
  const menuTitle = 'Editando mis asaderos'

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
          <CardAsadero bbq={el} owner={true} />
        </Grid>
      ))
    } else {
      return (
        <Card elevation={3} sx={{ padding: '30px', borderRadius: 10 }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} textAlign="center">
              <Typography variant="body1">
                Parece que no tienes asaderos que gestionar...
              </Typography>
              <Typography variant="body1">
                <Link to="/home/createAsadero">
                  Aquí puedes crear uno nuevo.
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Card>
      )
    }
  }

  return (
    <>
      <SubHeader menu={menuTitle} />
      <Grid
        container
        direction="row"
        spacing={3}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100vw', height: '90vh' }}
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

export default ManageAsaderoPage
