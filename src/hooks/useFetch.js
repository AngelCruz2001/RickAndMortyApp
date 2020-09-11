import { useState, useEffect } from "react"
import { getCharacters } from "../helpers/getCharacters";

export const useFetch = (name = "") => {
    const [state, setState] = useState({ data: [], loading: true, error: false });

    useEffect(() => {
        getCharacters(name)
            .then(data => {
                setState({
                    data: data,
                    loading: false,
                    error: false,
                });

            })
            .catch(data => {
                setState(s => ({
                    ...s,
                    error: true
                }))
            })
    }, [name]);

    return state;
}       
