/* eslint-disable react/prop-types */
import { Button } from '@mui/material'
import './ButtonCustom.css'
import { useNavigate } from 'react-router-dom'

//function ButtonCustom({handleButton, navigate, disabled = false, text, className='default', color='primary'}) {
function ButtonCustom({
  onClick,
  navigate,
  disabled = false,
  text,
  className = 'default',
  color = 'primary',
}) {
  const goTo = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    if (onClick) onClick()
    if (navigate && navigate !== '') goTo(navigate)
  }

  return (
    <Button
      className={className}
      disabled={disabled}
      onClick={handleClick}
      color={color}
      size="large"
      variant="contained"
    >
      {text}
    </Button>
  )
}

export default ButtonCustom
