import React, {useEffect, useState} from "react";
import NavigationSidebar from "../NavigationSidebar/index";
import Banner from "../Banner/index";
import Footer from "../Footer/index";
import MovieList from "../MovieList";
import ReviewList from "../ReviewList";
import MovieDetail from "../MovieDetail";
import {API_URL} from "../../consts";
import Alert from "../Alert";
import {useNavigate} from "react-router-dom";

const HomeScreen = () => {

  const navigate = useNavigate();
  let [isDetail, setIsDetail] = useState(false);
  let [imdbId, setImdbId] = useState();
  let [movieName, setMovieName] = useState();
  const [movieList, setMovieList] = useState([]);
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
    navigate(`/`);
    setIsDetail(isDetail => !isDetail);
  };

  const movieDetailHandler = (id, name) => {
    navigate(`./details/${id}`);
    setImdbId(id);
    setMovieName(name);
    setIsDetail(isDetail => !isDetail);
  };

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

  const renderHomePageContent = (userRole) => {
    switch (userRole) {
      case 'admin':
        return (
            <ReviewList
                isAdmin={true}
                username={user.username}/>);
      case 'moderator':
        return (
            <>
              <li className="list-group-item">
                <h5 className="fw-bolder">movie</h5>
              </li>
              <MovieList
                  movieList = {movieList}
                  movieDetailHandler = {movieDetailHandler}
                  isModerator={true}/>
            </>
        );
      case 'user':
        return(
            <>
              <li className="list-group-item">
                <h5 className="fw-bolder">movie</h5>
              </li>
              <MovieList
                  movieList = {movieList}
                  movieDetailHandler = {movieDetailHandler}
                  isModerator={false}/>
              <br/>
              <ReviewList
                  isAdmin={false}
                  username={user.username}/>
            </>
        );
      default:
        return(
            <>
              <li className="list-group-item">
                <h5 className="fw-bolder">movie</h5>
              </li>
              <MovieList
                  movieList = {movieList}
                  movieDetailHandler = {movieDetailHandler}
                  isModerator={false}/>
            </>
        )
    }
  };

  if (!movieList) {
    return <></>
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
                    username={user.username}
                    movieName = {movieName}
                    isDetail = {isDetail}
                    imdbId={imdbId}/></>
                :
                renderHomePageContent(user.role)
            }
          </div>

        </div>
        <Footer/>
      </div>

  );
}
export default HomeScreen;