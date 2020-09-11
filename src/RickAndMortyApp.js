import React, { useState } from 'react'
import { Search } from './components/Search';
import { CharacterGrid } from './components/CharacterGrid';

export const RickAndMortyApp = () => {

    const [name, setName] = useState("");

    return (
        <div className="m-5">
            <h1>Rick and morty</h1>
            <hr />
            
            <Search setName={setName}/>
            <CharacterGrid name={name} />
        </div>
    )
}
