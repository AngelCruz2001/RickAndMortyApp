import React from 'react'
import { CharacterItem } from './CharacterItem'
import { useFetch } from '../hooks/useFetch';
import { ErrorMessage } from './Messages/ErrorMessage';
import PropTypes from 'prop-types';
import { LoadingMessage } from './Messages/LoadingMessage';
export const CharacterGrid = ({ name }) => {
    const { data, loading, error } = useFetch(name);
    console.log(loading)
    return (
        <>
            {error && <ErrorMessage />}
            {loading ?
                <LoadingMessage/>
                :
                <div className="row row-cols-1 row-cols-md-2  ">
                    {data.map(cha => <CharacterItem cha={cha} key={cha.id} />)}

                </div>
            }
        </>
    )
}

CharacterGrid.propTypes = {
    name: PropTypes.string.isRequired
}