/* eslint-disable react/prop-types */
import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ButtonCustom.css'
import { useState } from 'react'

//function ButtonCustom({handleButton, navigate, disabled = false, text, className='default', color='primary'}) {
function ButtonCustom({ handleButton, props }) {
  ButtonCustom.propTypes = {
    //handleButton: PropTypes.func.isRequired,
    props: PropTypes.object.isRequired,
  }

  const [buttonProps, setButtonProps] = useState({
    className: 'default',
    navigate: 'navigate',
    disabled: false,
    text: 'text',
    color: 'primary',
  })
  // eslint-disable-next-line no-unused-vars
  const handleClick = (button) => {
    setButtonProps({ ...buttonProps, props })
    handleButton(button)
  }


  return (
    <Link to={props.navigate}>
      <Button
        className={props.className}
        navigate={props.navigate}
        disabled={props.disabled}
        onClick={handleClick}
        color={props.color}
        size="large"
        variant="contained"
        sx={
          {
            // Height: '24px',
            //backgroundColor: 'red'
          }
        }
      >
        {props.text}
      </Button>
    </Link>
  )
}

export default ButtonCustom
