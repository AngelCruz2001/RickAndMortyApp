import React from 'react'

export const CharacterGrid = ({ characters }) => {

    return (
        <div className="row row-cols-1 row-cols-md-2">
            {
                characters.map(cha => (
                    <div className="card mb-3" key={cha.id}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={cha.image} className="card-img" alt="Rick and Morty"/>
                            </div>
                            <div className="col-md-8 textCards">
                                <div className="card-body">
                                    <h5 className="card-title">{cha.name}</h5>
                                    <p className="card-text">
                                        <b>Status:</b> {cha.status}  <br />
                                        <b>Specie:</b> {cha.species}  <br />
                                        <b>Origin:</b> {cha.origin}  <br />
                                        <b>Location:</b> {cha.location}  <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}