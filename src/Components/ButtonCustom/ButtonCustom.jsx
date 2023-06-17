import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ButtonCustom.css'

function ButtonCustom({handleButton, navigate, disabled = false, text, className}) {
    ButtonCustom.propTypes = {
    handleButton: PropTypes.func.isRequired,
    }

    const handleClick = (e) => {
    handleButton()
    }

    return (
    <Link to={navigate}>
        <Button
        className={className}
        disabled={disabled}
        onClick={handleButton}
        color='primary'
        size='large'
        variant= 'contained'
        sx={{
           // Height: '24px',
            //backgroundColor: 'red'
            }}>
        {text}
        </Button>
    </Link>
    )
}


export default ButtonCustom