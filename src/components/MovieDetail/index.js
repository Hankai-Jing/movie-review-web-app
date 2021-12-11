import React, {useEffect, useState} from "react";
import Alert from "../Alert";
import {API_URL} from "../../consts";

const MovieDetail = (props) => {
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    if (props.imdbId) {
      fetch(`${API_URL}/details/?imdbid=${props.imdbId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        setMovieDetail(data);
      }).catch(e => <Alert/>);
    }
  })


  if (!movieDetail) {
    return <></>
  }
  return ( <>
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div><i className="fa fa-times" onClick={props.backHandler}></i></div>

        <div className={'ms-4 me-auto'}>
          <div><h5 className="fw-bolder">{movieDetail.title}</h5></div>
          <div>
            {movieDetail.rated}, {movieDetail.year}, {movieDetail.runtime}
          </div>
        </div>
      </li>

      <li className="list-group-item p-10 d-flex">

        <div className="w-50">
          <img src={movieDetail.poster} className="banner-img"/>
        </div>
        <div className="w-75">
          Description
          <br/>
          {movieDetail.plot}
        </div>
      </li>

    </ul>
  </>);

}

export default MovieDetail;