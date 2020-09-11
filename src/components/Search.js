import React, { useState } from 'react'

export const Search = ({ setName }) => {

    const [value, setValue] = useState("")

    const handleInputChange = ({ target }) => {
        setValue(target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(value);
    }

    return (
        <form className="input-group mb-3 " onSubmit={handleSubmit}>
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Nombre:</span>
            </div>
            <input
                type="text"
                className="form-control "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={value}
                onChange={handleInputChange}
            />
        </form>
    )
}
