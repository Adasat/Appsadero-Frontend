import { Box, Button, Container, Grid, Typography } from '@mui/material'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer({ title }) {
  const elements = [
    {
      header: 'Sobre APPsadero',
      links: ['Historia'],
    },
    {
      header: 'Meat the team',
      links: [<Link to="/home/aboutUs" className='links'>Quiénes somos</Link>],
    },
    {
      header: 'Contacto',
      links: ['Escríbenos'],
    },
  ]

  function generateFooterElements() {
 
    //Footer Responsive animation
    //Capture event of mouse
    
    const switchVisible = () => {
      const footer = document.querySelector('.footer')
      const scrollThreshold = 50 //Umbral de desplazamiento para activación
      
      if (window.scrollY <= scrollThreshold) {
        footer.classList.add('visible')
      } else {
        footer.classList.remove('visible')
      }
    }
    window.addEventListener('scroll', switchVisible)

    

    const footerElements = elements.map((column, colIdx) => {
      return (
        <Grid key={colIdx} item xs={12} sm={6} md={4}>
          <Box
            className="visible"
            display={'flex'}
            justifyContent={'center'}
            textAlign={'center'}
            borderBottom={1}
          >
            <Button sx={{ color: 'black' }}>{column.header}</Button>
          </Box>
          {column.links.map((link, linkIdx) => {
            return (
              <Box display={'flex'} justifyContent={'center'} key={linkIdx}>
                <Button
                  sx={{
                    color: 'black',
                    textAlign: 'center',
                    fontSize: 'x-small',
                  }}
                >
                  {link}
                </Button>
              </Box>
            )
          })}
        </Grid>
      )
    })
    return footerElements
  }

  return (
    <div className='footer visible'>
    <Box bgcolor="primary.main" color="black" justifyContent={'center'}>
      <Container>
        <Grid container>{generateFooterElements()}</Grid>
      </Container>
      <Box textAlign={'center'} py={1} bgcolor="primary.main" color={'black'}>
        <Typography sx={{ fontSize: 'x-small' }}>{title}</Typography>
      </Box>
    </Box>
    </div>
  )
}

export default Footer
