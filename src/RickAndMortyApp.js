import React, { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import { Search } from './components/Search';
import { CharacterGrid } from './components/CharacterGrid';

export const RickAndMortyApp = () => {
    const [dato, setDato] = useState("")
    const [value, setValue] = useState("")
    const { data: characters } = useFetch(dato);

    const handleInputChange = ({ target }) => {
        setValue(target.value);
        console.log(target.value)
    }
    const handleSubmit = (e) => {
        console.log("Hola a todos." )
        e.preventDefault();
        setDato(value);
    }
    return (
        <div className="m-5">
            <h1>Rick and morty</h1>
            <hr />
            <Search handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            <CharacterGrid characters={characters} />
        </div>
    )
}
