import React, {useState, useEffect} from 'react';
import './App.css';
import MovieList from './components/movielist'; 
import SearchBox from "./components/SearchBox"; 
import MovieListHeading from "./components/MovieListHeading";



  const App = () => {
//calls movie results from search
//added movies into the usestate from post man
//after adding them Set the movies 
    const [movies, setMovies] = useState([
      {
        Title: "Resident Evil",
        Year: "2002",
        imdbID: "tt0120804",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmI1ZGRhNDYtOGVjZC00MmUyLThlNTktMTQyZGE3MzE1ZTdlXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg",
      },
      {
        Title: "Resident Evil: Apocalypse",
        Year: "2004",
        imdbID: "tt0318627",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTc1NTUxMzk0Nl5BMl5BanBnXkFtZTcwNDQ1MDIzMw@@._V1_SX300.jpg",
      },
      {
        Title: "Resident Evil: Extinction",
        Year: "2007",
        imdbID: "tt0432021",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDQ0MWI3MmEtMzM0OC00Y2ViLWE4MDItMzNhNmY1ZTdjMWE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "Resident Evil: Afterlife",
        Year: "2010",
        imdbID: "tt1220634",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjRlMGQ0NmUtM2U2Ny00MTk3LTg5NjAtN2M3Y2JmZjllNjJlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      },
      {
        Title: "Evil Dead",
        Year: "2013",
        imdbID: "tt1288558",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYzk2ZTVhOWMtMWQxYS00OWQzLWFmY2QtODQ4NGFmNGQxZWVmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
      },
      {
        Title: "Jackass Presents: Bad Grandpa",
        Year: "2013",
        imdbID: "tt3063516",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYyMzk0MjY5NV5BMl5BanBnXkFtZTgwODI1MzIxMDE@._V1_SX300.jpg",
      },
      {
        Title: "Insidious",
        Year: "2010",
        imdbID: "tt1591095",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_SX300.jpg",
      },
      {
        Title: "Insidious: Chapter 2",
        Year: "2013",
        imdbID: "tt2226417",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg0OTA5ODIxNF5BMl5BanBnXkFtZTcwNTUzNDg4OQ@@._V1_SX300.jpg",
      },
      {
        Title: "Insidious: Chapter 3",
        Year: "2015",
        imdbID: "tt3195644",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTUwNDU4NjE1N15BMl5BanBnXkFtZTgwOTc0MzA5NDE@._V1_SX300.jpg",
      },
      {
        Title: "Insidious: The Last Key",
        Year: "2018",
        imdbID: "tt5726086",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTUxODU0NjQ2Nl5BMl5BanBnXkFtZTgwMTc4NDQ0MzI@._V1_SX300.jpg",
      },
      {
        Title: "The Conjuring",
        Year: "2013",
        imdbID: "tt1457767",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SX300.jpg",
      },
      {
        Title: "The Conjuring 2",
        Year: "2016",
        imdbID: "tt3065204",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_SX300.jpg",
      },
      {
        Title: "The Conjuring: The Devil Made Me Do It",
        Year: "2021",
        imdbID: "tt7069210",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOWRkOTYzZTQtMzQwNi00NDYwLTk4NjUtN2FjYTI4Y2UzM2RjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      },
      {
        Title: "The Texas Chainsaw Massacre",
        Year: "2003",
        imdbID: "tt0324216",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDg2NDJkOGYtMjM3My00Mzc2LWJiYjktODFlMzBjNmQwMTEyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "The Texas Chainsaw Massacre: The Beginning",
        Year: "2006",
        imdbID: "tt0420294",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTIwMzAxNDcyMl5BMl5BanBnXkFtZTYwMjMwMDc2._V1_SX300.jpg",
      },
      {
        Title: "Texas Chainsaw",
        Year: "2013",
        imdbID: "tt1572315",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTQzMzAyNTE2N15BMl5BanBnXkFtZTcwNzM1NDg2OA@@._V1_SX300.jpg",
      },
      {
        Title: "Texas Chainsaw Massacre",
        Year: "2022",
        imdbID: "tt11755740",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDU4Yzk1NmUtNDU4OC00YzVmLTgwOTUtYTY2NjNmMjY5YjVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
    ]);
    //helps find the movie
    //set to empty string when app loads
        const [searchValue, setSearchValue] = useState('');


//API CALL
//add searchValue in async
const getMovieRequest = async (seachValue) => {
  //Grab the url for the site being used
  //back ticks `` changed the url to a template string
  //change the name in the url to $ braces and add in searchvalue
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=3dbef48b`;
  //fetches the api url request
  const response = await fetch(url);
  //convert http to JSON
    const responseJson = await response.json();
    
if (responseJson.Search) {
  //set movies so that I can search through the JSON list of movies
  setMovies(responseJson.Search);

}
}

//gets called when the page loads ONLY
//add the seachValue in useEffect for the change in searchbar
useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);



    return (
      <div>
        {/* heading */}
        {/* //adding in the component movielist with the prop movies and adding jsx to make it equal */}
        <div className="container-fluid  justify-content-center movie-app">
          <div className="row d-flex  justify-content-center  align-items-center mt-4 mb-4 ">
            <MovieListHeading className="row d-flex  justify-content-center" />
            <h1 id="fire">UNDERDGROUND MOVIE MADNESS</h1>
          </div>

          {/* image */}
          <div>
            <div className="row rounded d-flex justify-content-center align-items-center mt-4 mb-4">
              <img src={require("./components/groudon.gif")} alt="my-gif" />
            </div>
          </div>

          {/* searchbar */}
          <div className="row d-flex justify-content-center align-items-center mt-4 mb-4 ">
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              className="row"
            />
          </div>

          {/* movies */}
          <div id="moviesCard" className="row">
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
    );
  }
  
  export default App
