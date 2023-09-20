import React, { useEffect, useState } from "react";

 export const API_URL = 
`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const useFetch = (apiParams) => {
    const [isLoading, setisLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const [isError, setIsError] = useState({ show: "false", msg: "" });
    const getMovies = async (url) => {
        setisLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setisLoading(false);
                setMovie(data.Search);
                    setIsError({
                        show: false,
                        msg: "",
                    });
                
            } else {
                setIsError({
                    show: true,
                    msg: data.Error,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        let timer = setTimeout(() => {
            getMovies(`${API_URL}&i=${apiParams}`);
        }, 500);
        return () => {
            clearTimeout(timer);
        };
               }, [apiParams]);

 return{isLoading, isError, movie}
}
 export default useFetch;