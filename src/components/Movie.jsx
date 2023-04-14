import React from 'react'

const Movie = ({movie}) => {
  return (
    <div className=' w-1/5 shadow-md p-3'>
        <img src={"https://image.tmdb.org/t/p/w400/"+movie.poster_path} className='mb-3' alt="" />
        <h1 className=' text-md'>{movie.title.slice(0,12)+"..."}</h1>
    </div>
  )
}

export default Movie