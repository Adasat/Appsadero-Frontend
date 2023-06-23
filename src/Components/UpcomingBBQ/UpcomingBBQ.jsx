import { useEffect, useState } from 'react'
import { getAllMyAsaderos } from '../../services/myBBQ.service'
import {
  Box,
  Button,
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

//component rendering upcoming bbq, in front as todos los asaderos
function UpcomingBBQ() {
  const [upcomingBBQ, setUpcomingBBQ] = useState([])
  const navigate = useNavigate()
  const menuTitle = 'Estoy invitada/o a...'

  const listUpcomingBBQ = async () => {
    const res = await getAllMyAsaderos()
    setUpcomingBBQ(res)
  }

  useEffect(() => {
    listUpcomingBBQ()
  }, [])

  const returnUpComingBBQ = () => {
    if (upcomingBBQ.length > 0) {
      return (
        <List className="upcomingbbqlist">
          {upcomingBBQ.map((bbq) => (
            (bbq.user_asadero.isOwner !== true) &&
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
          <Button
            variant="contained"
            onClick={() => {
              navigate('/home/createAsadero')
            }}
          >
            ¡Organiza uno!
          </Button>
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
        <Button
          className="button-header"
          variant="contained"
          onClick={() => {
            navigate('/home/upcomingAsadero')
          }}
        >
          {menuTitle}
        </Button>
      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      {returnUpComingBBQ()}
    </Card>
  )
}

export default UpcomingBBQ
