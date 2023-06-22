import { useEffect, useState } from 'react'
import { getAllMyAsaderos } from '../../services/myBBQ.service'
import {
  Box,
  Card,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { OutdoorGrill } from '@mui/icons-material'
import './UpcomingBBQ.css'
import { useNavigate } from 'react-router-dom'
import { formatDate } from '../../validations/validations'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

//component rendering upcoming bbq, in front as todos los asaderos
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
              <Box width={'100%'} margin={2}></Box>
              <Box width={'100%'} mb={2} padding={1}>
                <Box
                  display={'flex'}
                  sx={{ flexDirection: 'row', justifyContent: 'space-around' }}
                >
                  <ListItemIcon>
                    <OutdoorGrill />
                  </ListItemIcon>
                  <Typography variant="h5">
                    <b id="bbqname">{bbq.name}</b>
                  </Typography>
                  <Typography>{formatDate(bbq.date_time)}</Typography>
                </Box>
                {/* <Avatar src="https://source.unsplash.com/random?bbq" sx={{ width: '100%', height: '50%', objectFit: 'cover'}}> */}
                <div className="list-img">
                  <img
                    src={`https://source.unsplash.com/random?bbq-${bbq.name}`}
                    alt=""
                  />
                </div>
                <Box>
                  <Typography variant="body">{bbq.description}</Typography>
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
    <Card
      elevation={24}
      sx={{ padding: '30px', borderRadius: 2, //maxHeight: '960px'
     }} 
    >
      <Typography variant="h5">
        <ButtonCustom
          props={{
            text: menuTitle,
            className: 'button-header',
            navigate: '/home/upcomingAsadero',
            color: 'primary',
          }}
        ></ButtonCustom>
        {/*  <Link
<          to="/home/upcomingAsadero"
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
