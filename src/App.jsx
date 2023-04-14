import React from 'react'
import Movies from './pages/Movies'
import FilterMovies from './components/FilterMovies'

const App = () => {
  return (
    <div className='py-5 container  mx-auto'>
      <FilterMovies/>
      <Movies/>
    </div>
  )
}

export default App
