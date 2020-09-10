import { useState, useEffect } from "react"
import { getCharacters } from "../helpers/getCharacters";

export const useFetch = (name="") => {
    const [state, setState] = useState({ data: [], loading: true });
    
    useEffect(() => {
        getCharacters(name)
            .then(data => {
                setState({
                    data: data,
                        loading: false,
                    });
            })
    }, [name    ]);

    console.log("Fetch fue llamado")
    return state;
}       
