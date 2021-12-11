import React, {useEffect, useState} from "react";
import Alert from "../Alert";
import {API_URL} from "../../consts";
import {callCreateMovie} from "../../services/movieService"

const MovieList = (props) => {
  const [movieList, setMovieList] = useState();
  const [movie, setMovie] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setMovieList(data);
    }).catch(e => <Alert/>);
  }, []);

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
                className="form-control"/>
          </div>
          <span class="px-3">
          <button
              onClick={createMovie}
              className="btn btn-success float-end">
            Create
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
            <li className="list-group-item">
              <h5 className="fw-bolder">movie</h5>
            </li>
          }
          {
            movieList.map((movie, idx) => {
              return (
                  <li className="list-group-item list-group-item-action"
                      key={idx}
                      onClick={() => props.movieDetailHandler(movie.imdbid, movie.name)}>
                    {movie.name}
                    <span>  {movie.year}</span>
                    <span><img src={movie.poster} /></span>
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