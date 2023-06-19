import { useEffect, useState } from 'react'
import { getAllMyAsaderos } from '../../services/myBBQ.service'
import {
  Card,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { OutdoorGrill } from '@mui/icons-material'
import './UpcomingBBQ.css'
import { Link, useNavigate } from 'react-router-dom'
import { formatDate } from '../../validations/validations'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

//component rendering upcoming bbq, in front as próximos asaderos
function UpcomingBBQ() {
  const [upcomingBBQ, setUpcomingBBQ] = useState([])
  const navigate = useNavigate()

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
            <ListItemText key={bbq.id}>
              <ListItemIcon>
                <OutdoorGrill />
              </ListItemIcon>
              <Typography variant="body">
                <b id="bbqname">{bbq.name}</b> - {formatDate(bbq.date_time)} -{' '}
                {bbq.description}
              </Typography>
            </ListItemText>
          ))}
        </List>
      )
    } else {
      return (
        <Typography variant="body">
          Parece que no tienes próximos asaderos. <br />
          <ButtonCustom handleButton={createbbq}
            props={{ navigate: '/home/createAsadero', text: '¡Organiza uno!' }}
          />
        </Typography>
      )
    }
  }

  return (
    <Card elevation={3} sx={{ padding: '30px', borderRadius: 10 }}>
      <Typography variant="h5"><Link to='/home/upcomingAsadero' className='link' style={{ textDecoration: 'none' }}>Próximos asaderos</Link></Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      {returnUpComingBBQ()}
    </Card>
  )
}

export default UpcomingBBQ
