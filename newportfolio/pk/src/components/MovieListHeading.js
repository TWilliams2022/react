import React from 'react'


//props help bring from the other js files
const MovieListHeading = (props) => {
  return (
    <div className='row d-flex justify-center text-center text-3xl'>
    <h1>{props.heading}</h1>
    
    </div>
  )
}

export default MovieListHeading