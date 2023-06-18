import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ButtonCustom.css'

function ButtonCustom({handleButton, navigate, disabled = false, text, className='', color='primary'}) {
    ButtonCustom.propTypes = {
    handleButton: PropTypes.func.isRequired,
    navigate: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    }   
    // eslint-disable-next-line no-unused-vars
    const handleClick = (e) => {
    handleButton()
    }

    return (
    <Link to={navigate}>
        <Button
        className={className}
        disabled={disabled}
        onClick={handleClick}
        color={color}
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