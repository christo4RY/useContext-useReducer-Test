import React from 'react'
import { useStateMovies } from '../hooks/useStateMovies'

const filterMovies = () => {
  const {setActive} = useStateMovies();
  return (
    <div className='flex gap-2 pl-12 mb-5'>
      <button onClick={()=>setActive(0)} className="p-2 bg-black text-white rounded-md">All</button>
      <button onClick={()=>setActive(28)} className="p-2 bg-black text-white rounded-md">Action</button>
      <button onClick={()=>setActive(35)} className="p-2 bg-black text-white rounded-md">Comedy</button>
    </div>
  )
}

export default filterMovies