import { useEffect, useState } from 'react'
import { getMyOwnBbq } from '../../services/myBBQ.service'
import '../UpcomingBBQ/UpcomingBBQ.css'
import {
  Box,
  Card,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material'
import { formatDate } from '../../validations/validations'
import ButtonCustom from '../ButtonCustom/ButtonCustom'
import { Link, useNavigate } from 'react-router-dom'
import { OutdoorGrill } from '@mui/icons-material'
import { Row } from 'react-day-picker'

function ManageBBQ() {
  const [ownBbq, setOwnBbq] = useState([])
  const navigate = useNavigate()
  const menuTitle = 'Editar mis asaderos'

  const listMyOwnBbq = async () => {

    const res = await getMyOwnBbq()
    setOwnBbq(res)
    console.log(ownBbq)
  }

  useEffect(() => {
    listMyOwnBbq()
  }, [])

  const createbbq = () => {
    navigate('/home/createAsadero')
  }

  const returnManageBBQ = () => {
    if (ownBbq.length > 0) {
      return (
        <>
          <List className="upcomingbbqlist">
            {ownBbq.map((el) => (
              <ListItemText className="list-item" key={el.id}>
                <Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-around'}
                    margin={2}
                  >
                    <ListItemIcon>
                      <OutdoorGrill />
                    </ListItemIcon>
                    <Typography variant="h5">
                      <b id="bbqname">{el.name}</b>
                    </Typography>
                    <Typography align="right">
                      {formatDate(el.date_time)}
                    </Typography>
                  </Box>

                  <Box
                    display={'flex'}
                    >
                  <Paper sx={{mb:1 ,padding:1}}>
                    <Typography>{el.description}</Typography>

                    <Typography align='center'>
                      Pagar Antes de: {formatDate(el.confirmation_date)}
                    </Typography>
                      </Paper>
                  </Box>
                </Box>
              </ListItemText>
            ))}
          </List>
        </>
      )
    } else {
      return (
        <Typography variant="body">
          Parece que no has organizado ningún asadero aún. <br />
          <ButtonCustom
            handleButton={createbbq}
            props={{ navigate: '/home/createAsadero', text: '¡Organiza uno!' }}
          />
        </Typography>
      )
    }
  }

  return (
    <Card elevation={4} sx={{ padding: '30px', borderRadius: 4, height:'100%'}}>
      <Typography variant="h5">
        <ButtonCustom props={{
          text: 'Editar Mis Asaderos',
          className:'button-header',
          navigate: '/home/manageAsadero',
          color: 'secondary'
        }}>
          </ButtonCustom>
{/* 
        <Link
          to="/home/manageAsadero"
          className="link"
          style={{ textDecoration: 'none' }}
          >
          {menuTitle}
        </Link> */}
      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      {returnManageBBQ()}
    </Card>
  )
}

export default ManageBBQ
