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
  Typography,
} from '@mui/material'
import { formatDate } from '../../validations/validations'
import ButtonCustom from '../ButtonCustom/ButtonCustom'
import {useNavigate } from 'react-router-dom'
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
        <>
          <List className="upcomingbbqlist">
            {ownBbq.map((el) => (
              <ListItemText className="list-item" key={el.id}>
                <Box c padding={1}>
                  <Box 
                    display={'flex'}
                    justifyContent={'space-between'}
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

                    <div className='list-img'>
                    <img src={`https://source.unsplash.com/random?bbq-${el.name}`} alt="" />
                    </div>
                  <Box
                    display={'flex'}
                    >
                  <Box sx={{mb:1 ,padding:1}}>
                    <Typography>{el.description}</Typography>

                    <Typography align='center'>
                      Fecha límite de pago: {formatDate(el.confirmation_date)}
                    </Typography>
                      </Box>
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
    <Card elevation={24} sx={{ padding: '30px', borderRadius: 4, maxHeight: '960px' }} >
      <Typography variant="h5">
        <ButtonCustom props={{
          text: menuTitle,
          className:'button-header',
          navigate: '/home/manageAsadero',
          color: 'primary'
        }}>
          </ButtonCustom>

      </Typography>
      <Divider sx={{ marginBottom: '10px' }} />
      {returnManageBBQ()}

    </Card>
  )
}

export default ManageBBQ
