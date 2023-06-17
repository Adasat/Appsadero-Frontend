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
import { Link } from 'react-router-dom'
import { formatDate } from '../../validations/validations'

//component rendering upcoming bbq, in front as próximos asaderos
function UpcomingBBQ() {
  const [upcomingBBQ, setUpcomingBBQ] = useState([])

  const listUpcomingBBQ = async () => {
    const res = await getAllMyAsaderos()
    setUpcomingBBQ(res)
  }

  useEffect(() => {
    listUpcomingBBQ()
  }, [])

  const returnUpComingBBQ = () => {
    if (upcomingBBQ) {
      return (
        <Card elevation={3} sx={{ padding: '30px', borderRadius: 10 }}>
          <Typography variant="h5">Próximos asaderos</Typography>
          <Divider sx={{ marginBottom: '10px' }} />
          <List className="upcomingbbqlist">
            {upcomingBBQ.map((bbq) => (
              <ListItemText key={bbq.id}>
                <ListItemIcon>
                  <OutdoorGrill />
                </ListItemIcon>
                <Typography variant="body">
                  <b id="bbqname">{bbq.name}</b> -{' '}
                  <i>{formatDate(bbq.date_time)}</i> - {bbq.description}
                </Typography>
              </ListItemText>
            ))}
          </List>
        </Card>
      )
    } else {
      return (
        <Typography variant="h5">
          Parece que no tienes próximos asaderos.{' '}
          <Link to="">¡Organiza uno!</Link>
        </Typography>
      )
    }
  }
  return returnUpComingBBQ()
}

export default UpcomingBBQ
