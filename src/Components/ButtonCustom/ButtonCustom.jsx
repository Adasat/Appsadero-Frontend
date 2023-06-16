import { Button } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function ButtonCustom({handleButton, action , disabled, text}) {
    ButtonCustom.propTypes = {
    handleButton: PropTypes.func.isRequired,
    }

    const handleClick = (e) => {
    handleButton()
    }

    return (
    <Link to={action}>
        <Button
        disabled={disabled}
        onClick={handleButton}>
        {text}
        </Button>
    </Link>
    )
}


export default ButtonCustom