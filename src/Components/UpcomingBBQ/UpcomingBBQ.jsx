import React, { useEffect, useState } from 'react'
import { getAllMyAsaderos } from '../../services/myAsaderos.service'
import {
  Divider,
  Icon,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { OutdoorGrill } from '@mui/icons-material'

//component rendering upcoming bbq, in front as próximos asaderos

function UpcomingBBQ() {
  const [upcomingBBQ, setUpcomingBBQ] = useState([])

  const listMyAsaderos = async () => {
    const res = await getAllMyAsaderos()
    setUpcomingBBQ(res)
  }

  useEffect(() => {
    listMyAsaderos()
  }, [])


  return (
    <>
      <h1>Próximos asaderos</h1>
        {upcomingBBQ.map((el) => (
        <li key={el.id}>{el.description}</li>
      ))}

    </>
  )
}

export default UpcomingBBQ


/*

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background' }}>

        {upcomingBBQ.map((el) => {
            <React.Fragment key={el.id}>
          <ListItem alignItems="flex-start">
            <Icon>
              <OutdoorGrill />
            </Icon>
            <ListItemText
              primary={el.name}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="primary"
                  >
                    {el.description}
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            </React.Fragment>
          })}
        </List>


*/

/*


        <ListItem alignItems="flex-start">
          <Icon>
            <OutdoorGrill />
          </Icon>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </>
            }
          />
        </ListItem>

        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </>
            }
          />
        </ListItem>

*/