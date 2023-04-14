import React from 'react'
import Movie from '../components/Movie'
import { useStateMovies } from '../hooks/useStateMovies'

const Movies = () => {
  const {state:{movies}} = useStateMovies()

  return (
    <div className='flex flex-wrap gap-5 justify-center'>
        {
            movies?.map((movie) => {
                return (
                    <Movie key={movie.id} movie={movie}/>
                )
            })
        }
    </div>
  )
}

export default Movies