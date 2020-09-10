import React from 'react'
import { CharacterItem } from './CharacterItem'

export const CharacterGrid = ({ characters }) => {

    return (
        <div className="row row-cols-1 row-cols-md-2">
            {
                characters.map(cha => (
                   <CharacterItem cha= {cha}/>
                ))
            }
        </div>
    )
}