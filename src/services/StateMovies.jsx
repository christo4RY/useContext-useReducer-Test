import { createContext, useEffect, useReducer, useState } from "react";

export const StateMovies = createContext()

export const StateMoviesProvider = ({children}) => {
    const [movies,setMovies] = useState([])
    const [active,setActive] = useState(0)

    useEffect(()=>{
        getMovies();
    },[])

    const filterMovies = movies?.filter(movie => movie.genre_ids.includes(active))

    useEffect(()=>{
        if(filterMovies.length){
            dispatch({type:"GET_MOVIES",payload:filterMovies})
        }else{
            dispatch({type:"GET_MOVIES",payload:movies})
        }
    },[movies,active])

    const getMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=424dc63bb3774272352871c8e197039f&language=en-US&page=1");
        const {results} = await response.json();
        setMovies(results)
    }

    const initalState = {
        movies:[]
    }

    const reducer = (state,action) => {
        switch (action.type) {
            case "GET_MOVIES":
                return {
                    ...state,
                    movies:action.payload
                }
            default:
                break;
        }
    }
    const [state,dispatch] = useReducer(reducer,initalState)

    const data = {
        state,
        dispatch,
        setActive,
    }
    return (
        <StateMovies.Provider value={data}>
            {children}
        </StateMovies.Provider>
    )
}