import { Box, Button, Container, Grid, Typography } from '@mui/material'
import './Footer.css'

function Footer({title}) {
  const elements = [
    {
      header: 'Sobre APPsadero',
      links: ['Historia'],
    },
    {
      header: 'Meet the team',
      links: ['Quiénes somos'],
    },
    {
      header: 'Contacto',
      links: ['Escríbenos'],
    },
  ]

  function generateFooterElements() {
    const footerElements = elements.map((column) => {
      return (
        <>
          <Grid item xs={12} md={4}>
            <Box textAlign={'center'} borderBottom={1}>
              <Button sx={{ color: 'black' }}>{column.header}</Button>
            </Box>
            {column.links.map((link) => {
              return (
                <>
                  <Box textAlign={'center'}>
                    <Button sx={{ color: 'black', textAlign: 'center', fontSize: 'x-small' }}>
                      {link}
                    </Button>
                  </Box>
                </>
              )
            })}
          </Grid>
        </>
      )
    })
    return footerElements
  }

  return (
    <footer>
      <Box bgcolor="primary.main" color="black">
        <Container>
          <Grid container>{generateFooterElements()}</Grid>
        </Container>
      </Box>
      <Box textAlign={'center'} py={1} bgcolor="primary.main" color={'black'}>
        <Typography sx={{fontSize: 'x-small'}}>{title}</Typography>
      </Box>
    </footer>
  )
}

export default Footer
