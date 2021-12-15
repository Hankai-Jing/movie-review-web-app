import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return(
      <div className="bg-secondary mt-2 text-center footer fs-3">
        <Link to="/privacy" style={{textDecoration: 'none'}}>Privacy Policy</Link>
      </div>
  )
}

export default Footer;