import React, {useEffect, useState} from "react";
import Alert from "../Alert";
import {API_URL} from "../../consts";
import {callSearchMovies} from "../../services/movieService"
import Banner from "../Banner";
import NavigationSidebar from "../NavigationSidebar";
import Footer from "../Footer";
import MovieList from "../MovieList";
import { useNavigate } from "react-router-dom";
import MovieDetail from "../MovieDetail";
import ReviewList from "../ReviewList";


const SearchScreen = () => {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [actor, setActor] = useState('');

  let [isDetail, setIsDetail] = useState(false);
  let [imdbId, setImdbId] = useState();
  let [movieName, setMovieName] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/profile`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((user) => {
      setUser(user);
    }).catch(e => <Alert/>);
  }, []);

  const backHandler = () => {
    setIsDetail(isDetail => !isDetail);
  };

  const movieDetailHandler = (id, name) => {
    setImdbId(id);
    setMovieName(name);
    setIsDetail(isDetail => !isDetail);
  };

  useEffect(()=> {
      let params = new URLSearchParams(window.location.search);
      let actorName = params.get('actor');
      callSearchMovies(actorName)
      .then(searchResults =>
          setMovieList(searchResults));
  }, []);

  const updateSearch = (event) =>
      setActor(event.target.value);

  const searchMovie = () => {
    navigate(`./?actor=${actor}`);
    callSearchMovies(actor)
    .then(searchResults =>
        setMovieList(searchResults));
  }

  const renderSearchMovie = () =>{
    return (
        <li className="list-group-item d-flex justify-content-between">
          <div class="w-100">
            <input
                onChange={updateSearch}
                placeholder="search by actors, e.g. brad pitt"
                className="form-control"/>
          </div>
          <span class="px-3">
            <button
                onClick={searchMovie}
                className="btn btn-success float-end text-nowrap">
              Search
            </button>
          </span>
        </li>
    )
  }
  return(
      <div>
        <Banner/>
        <div className="row mt-2">
          <div className="col-2 col-md-2">
            <NavigationSidebar active="home"/>
          </div>
          <div className="col-10 col-md-10" style={{"position": "relative"}}>
            {isDetail?
                <><MovieDetail
                    imdbId = {imdbId}
                    backHandler = {backHandler}/>
                  <br/>
                  <ReviewList
                      isAdmin={false}
                      user={user}
                      movieName = {movieName}
                      isDetail = {isDetail}
                      imdbId={imdbId}/></>
                :
                (<>
                {renderSearchMovie()}
                  <MovieList
                      movieList = {movieList}
                      movieDetailHandler = {movieDetailHandler}
                      isModerator={false}/></>)
            }
          </div>
        </div>
        <Footer/>
      </div>

  );
}

export default SearchScreen;