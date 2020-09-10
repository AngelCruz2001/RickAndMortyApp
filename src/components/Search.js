import React from 'react'

export const Search = ({handleInputChange, handleSubmit}) => {

    return (
            <form className="input-group mb-3" onSubmit={()=>handleSubmit()}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Nombre:</span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    onChange={()=>handleInputChange()}
                    />
            </form>
    )
}
