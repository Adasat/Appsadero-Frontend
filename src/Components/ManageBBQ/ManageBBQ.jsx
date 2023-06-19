import { useEffect, useState } from 'react'
import { getMyOwnBbq } from '../../services/myBBQ.service'
import '../UpcomingBBQ/UpcomingBBQ.css'
import {
  Card,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { formatDate } from '../../validations/validations'
import ButtonCustom from '../ButtonCustom/ButtonCustom'
import { Link, useNavigate } from 'react-router-dom'
import { OutdoorGrill } from '@mui/icons-material'

function ManageBBQ() {
  const [ownBbq, setOwnBbq] = useState([])
  const navigate = useNavigate()
  const menuTitle = 'Editar mis asaderos'

  const listMyOwnBbq = async () => {
    const res = await getMyOwnBbq()
    setOwnBbq(res)
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
        <List className="upcomingbbqlist">
          {ownBbq.map((el) => (
            <ListItemText key={el.id}>
              <ListItemIcon>
                <OutdoorGrill />
              </ListItemIcon>
              <Typography variant="body">
                <b id="bbqname">{el.name}</b> - {formatDate(el.date_time)} -{' '}
                {el.description} - Plazo del pago:{' '}
                {formatDate(el.confirmation_date)}
              </Typography>
            </ListItemText>
          ))}
        </List>
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
    <Card elevation={3} sx={{ padding: '30px', borderRadius: 10 }}>
      <Typography variant="h5">
        <Link
          to="/home/manageAsadero"
          className="link"
          style={{ textDecoration: 'none' }}
        >
          {menuTitle}
        </Link>
      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      {returnManageBBQ()}
    </Card>
  )
}

export default ManageBBQ
