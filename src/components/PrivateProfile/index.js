import React, {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";
import PersonalReviewList from "../PersonalReviewList";

const PrivateProfile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.json())
    .then(user => {
      setUser(user);
    }).catch(e => navigate('/login'));
  }

  const editProfile = () => {
    fetch(`${API_URL}/profile`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
    .then(user => {
      setUser(user);
    }).catch(e => navigate('/login'));
  }

  const logout = () => {
    fetch(`${API_URL}/logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => navigate('/'));
  }

  useEffect(getProfile, [navigate]);

  return(
      <>
      <div className="mb-4">
        <h3>PrivateProfile</h3>
        <div className="col-2">
            <button className="btn btn-dark wd-border-radius-20px" onClick={editProfile}>Save</button>
        </div>
        <div className="form-group row">
          <label htmlFor="staticUsername"
                 className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticUsername" value={user.username}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticPassword"
                 className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="text" className="form-control-plaintext"
                   id="staticPassword" value={user.password}
                   onChange={(e) => setUser({...user, password: e.target.value})}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticEmail"
                 className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control-plaintext"
                   id="staticEmail" value={user.email}
                   onChange={(e) => setUser({...user, email: e.target.value})}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticJoinedDate"
                 className="col-sm-2 col-form-label">Joined Date</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticJoinedDate" value={user.joinedDate}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticFirstname"
                 className="col-sm-2 col-form-label">Firstname</label>
          <div className="col-sm-10">
            <input type="text" className="form-control-plaintext"
                   id="staticFirstname" value={user.firstname}
                   onChange={(e) => setUser({...user, firstname: e.target.value})}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticLastname"
                 className="col-sm-2 col-form-label">Lastname</label>
          <div className="col-sm-10">
            <input type="text" className="form-control-plaintext"
                   id="staticLastname" value={user.lastname}
                   onChange={(e) => setUser({...user, lastname: e.target.value})}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticRole"
                 className="col-sm-2 col-form-label">Role</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticRole" value={user.role}/>
          </div>
        </div>

        <button
            onClick={logout}
            className="btn btn-danger">
          Logout
        </button>
      </div>

      {/*<PersonalReviewList username={user.username}/>*/}
      </>
  );
};
export default PrivateProfile;