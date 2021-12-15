import React, {useEffect, useState} from "react";
import Alert from "../Alert";
import {API_URL} from "../../consts";
import {callCreateMovie} from "../../services/movieService"

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState('');

  useEffect(() => {
    setMovieList(props.movieList);
  }, [props.movieList]);

  const updateMovie = (event) =>
      setMovie(event.target.value);

  const createMovie = () =>
      callCreateMovie(movie)
      .then(actualMovie =>
          setMovieList([
            actualMovie, ...movieList
          ]));

  const renderCreateMovie = () =>{
    return (
        <li className="list-group-item d-flex justify-content-between">
          <div class="w-100">
            <input
                onChange={updateMovie}
                defaultValue={movie.title}
                placeholder="Enter movie name, e.g. Inception"
                className="form-control"/>
          </div>
          <span class="px-3">
            <button
                onClick={createMovie}
                className="btn btn-primary float-end text-nowrap">
              Add Movie
            </button>
          </span>
        </li>
    )
  }

  if (!movieList) {
    return <></>
  }

  return (
      <>
        <ul className="list-group">
          {
            movieList.map((movie, idx) => {
              return (
                  <li className="list-group-item list-group-item-action"
                      key={idx}
                      onClick={() => props.movieDetailHandler(movie.imdbid, movie.name)}>

                    <span><img style={{width: "100px"}} src={movie.poster} /></span>

                    <b>   {movie.name}</b>
                    <span>  {movie.year}</span>
                  </li>
              );
            })
          }
          {props.isModerator && renderCreateMovie()}
        </ul>
      </>
  );
}

export default MovieList;