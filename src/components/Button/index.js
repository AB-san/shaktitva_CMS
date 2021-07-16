import React from 'react'
//TODO: use this!!
const Button = ({variant, color}) => {
    return (
        <Button
            variant={variant}
            color={color}
            startIcon={<SaveIcon />}
        />
    )
}

export default Button;