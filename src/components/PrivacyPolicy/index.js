import React from 'react';
import NavigationSidebar from "../NavigationSidebar/index";
import Banner from "../Banner/index";
import Footer from "../Footer/index";

const PrivacyScreen = () => {
  console.log("profile");
  return(
      <div>
        <div className="bg-secondary bg-gradient banner text-center fs-1 ">
          Privacy Policy
        </div>
        <div className="row mt-2">
          <div className="col-2 col-md-2">
            <NavigationSidebar active="home"/>
          </div>
          <div className="col-10 col-md-10" style={{"position": "relative"}}>
            When you create a Rotten Potato Account, you provide us with personal information that includes your username and a password. You can also choose to add a email address or your name to your account. We collect these information to personalize your experience. Your username and reviews will be made public to others.
            <br/>
            <br/>
            We also collect the content you create, upload, or receive from others when using our services. This includes things like movie reviews, movies you searched/added. We will be displaying content you generate.
            <br/>
            <br/>
            When you search/add movie, We may receive and store log data that include your search history. The search results comes from a third party API and we do not share any user information except the searched content.

          </div>
        </div>
        <Footer/>
      </div>

  );
}
export default PrivacyScreen;