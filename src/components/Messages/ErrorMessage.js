import React from 'react'

export const ErrorMessage = () => {
    return (
        <div className="alert alert-danger text-center animate__animated  animate__shakeX" >
            We cannot found a character with that name, please try again.
        </div>
    )
}
