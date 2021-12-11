import React from 'react';
import NavigationSidebar from "../NavigationSidebar/index";
import Banner from "../Banner/index";
import Footer from "../Footer/index";
import PrivateProfile from "../PrivateProfile/index";
import {Outlet} from "react-router-dom";

const ProfileScreen = () => {
  console.log("profile");
  return(
      <div>
        <Banner/>
        <div className="row mt-2">
          <div className="col-2 col-md-2">
            <NavigationSidebar active="home"/>
          </div>
          <div className="col-10 col-md-10" style={{"position": "relative"}}>
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>

  );
}
export default ProfileScreen;