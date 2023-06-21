import { useEffect, useState } from 'react'
import { getAllMyAsaderos } from '../../services/myBBQ.service'
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
import { OutdoorGrill } from '@mui/icons-material'
import './UpcomingBBQ.css'
import { Link, useNavigate } from 'react-router-dom'
import { formatDate } from '../../validations/validations'
import ButtonCustom from '../ButtonCustom/ButtonCustom'
import { blue, red, yellow } from '@mui/material/colors'

//component rendering upcoming bbq, in front as próximos asaderos
function UpcomingBBQ() {
  const [upcomingBBQ, setUpcomingBBQ] = useState([])
  const navigate = useNavigate()
  const menuTitle = 'Todos los asaderos'

  const listUpcomingBBQ = async () => {
    const res = await getAllMyAsaderos()
    setUpcomingBBQ(res)
  }

  useEffect(() => {
    listUpcomingBBQ()
  }, [])

  const createbbq = () => {
    navigate('/home/createAsadero')
  }

  const returnUpComingBBQ = () => {
    if (upcomingBBQ.length > 0) {
      return (
        <List className="upcomingbbqlist">
          {upcomingBBQ.map((bbq) => (
            <ListItemText className="list-item" key={bbq.id}>
              <Box>
                <Box  display={'flex'}
                    justifyContent={'space-around'}
                    margin={2}>
                  <ListItemIcon>
                    <OutdoorGrill />
                  </ListItemIcon>
                  <Typography variant="h5">
                    <b id="bbqname">{bbq.name}</b>
                  </Typography>
                <Typography>{formatDate(bbq.date_time)}</Typography>
                </Box>
                <Box
                  sx={{
                  
                    display: 'flex',
                   
                  }}
                >
                   <Paper sx={{mb:1 ,padding:1}}>

                  <Typography variant="body">{bbq.description}</Typography>

                   </Paper>

                </Box>
              </Box>
            </ListItemText>
          ))}
        </List>
      )
    } else {
      return (
        <Typography variant="body">
          Parece que no tienes próximos asaderos. <br />
          <ButtonCustom
            handleButton={createbbq}
            props={{ navigate: '/home/createAsadero', text: '¡Organiza uno!' }}
          />
        </Typography>
      )
    }
  }

  return (
    <Card elevation={3} sx={{ padding: '30px', borderRadius: 10 }}>
      <Typography variant="h5">
      <ButtonCustom props={{
          text: 'Todos Los Asaderos',
          className:'button-header',
          navigate: '/home/manageAsadero',
          color: 'secondary'
        }}>
          </ButtonCustom>
       {/*  <Link
          to="/home/upcomingAsadero"
          className="link"
          style={{ textDecoration: 'none' }}
        >
          {menuTitle}
        </Link> */}
      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      {returnUpComingBBQ()}
    </Card>
  )
}

export default UpcomingBBQ
