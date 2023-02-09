import { useState, useEffect } from "react";

const useCharacters = baseUrl => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState({ status: false, error: null });
    const [info, setInfo] = useState({});

    useEffect(()=> {
        fetch(baseUrl)
        .then((response) => {
            if (response.status >= 500) {
                // Server error? (>= 500)
                throw new Error("Internal server error. This section could not be retrieved");
            } else if (!response.ok) {
                // Client error? (400-499) or Redirection? (300-399)
                throw new Error("This section could not be retrieved");
            } else {
                // Ok? (200-299)}
                return response.json();
            }
        })
        .then((data) => {
            setCharacters(data.results);
            setError({ ...error, status: false });
            setInfo(data.info);
            
        })
        .catch((fetchError) => {
            setError({ error: fetchError.message, status: true });
        });
    }, [baseUrl]);
    return {characters, error, info};
};

export default useCharacters;