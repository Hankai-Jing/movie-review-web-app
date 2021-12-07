import React from "react";

const Alert = () => {
  return(

      <div className="alert alert-dismissible alert-danger">
        <button type="button" className="btn-close"
                data-bs-dismiss="alert"></button>
        <strong>Oh snap! Username or password does not match!</strong>
      </div>

  )
};

export default Alert;