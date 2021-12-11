import React from "react";

const Alert = () => {
  return(

      <div className="alert alert-dismissible alert-danger">
        <button type="button" className="btn-close"
                data-bs-dismiss="alert"></button>
        <strong>Oh snap! Something went wrong!</strong>
      </div>

  )
};

export default Alert;