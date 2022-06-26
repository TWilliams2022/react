import React from 'react'


//calling movies from app.js to map through 
//using props to pull them
//needs 2 vaiables inside of the map
const MovieList = (props) => {

  return (
    <>

  {props.movies.map((movie, index) => 
  <div className='image-container d-flex justify-content-center m-3 '>
<img id='poster' src={movie.Poster} alt='movie'></img>

  </div>
  )}

    </>
  )
}

export default MovieList