import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const imgUrl = "https://via.placeholder.com/200/200";
const Movies = () => {
  const {movie, isLoading} = useGlobalContext();
  if(isLoading){
    return(
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
    );
  }
  return (
    <>
    <section className='movie-page'>
    <div className='grid grid-4-col'>
    {movie ? movie.map((curMovie)=>{
      const {imdbID, Title, Poster} = curMovie;
      const moviename = Title.substring(0,15);

      return(
        <NavLink to={`movie/${imdbID}`} key={imdbID}>
          <div className='"card'>
           <div className='card-info'>
            <h2>{moviename.length >= 15 ? `${moviename}...` : moviename}</h2>
            <img src={Poster === "N/A" ? imgUrl : Poster} alt="#"></img>
           </div>
          </div>
        </NavLink>
      );
     } )
     :""}
    </div>
    </section>
     
    </>
  )
}

export default Movies
