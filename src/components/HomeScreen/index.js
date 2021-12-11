import React, {useEffect, useState} from "react";
import NavigationSidebar from "../NavigationSidebar/index";
import Banner from "../Banner/index";
import Footer from "../Footer/index";
import MovieList from "../MovieList";
import ReviewList from "../ReviewList";
import MovieDetail from "../MovieDetail";

const HomeScreen = () => {

  let [isDetail, setIsDetail] = useState(false);
  let [imdbId, setImdbId] = useState();
  let [movieName, setMovieName] = useState();

  const backHandler = () => {
    setIsDetail(isDetail => !isDetail);
  };

  const movieDetailHandler = (id, name) => {
    setImdbId(id);
    setMovieName(name);
    setIsDetail(isDetail => !isDetail);
  };

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
                    username={"bob"}
                    movieName = {movieName}
                    isDetail = {isDetail}
                    imdbId={imdbId}/></>
                :
                (<><MovieList
                    movieDetailHandler = {movieDetailHandler}
                    isModerator={true}/>
                <ReviewList username={"bob"}/></>)
            }
          </div>

        </div>
        <Footer/>
      </div>

  );
}
export default HomeScreen;