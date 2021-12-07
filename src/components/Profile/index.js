import {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate} from "react-router-dom";

const Profile = () => {
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

  const logout = () => {
    fetch(`${API_URL}/logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => navigate('/'));
  }

  useEffect(getProfile, [navigate]);

  return(
      <div>
        <h1>Profile</h1>
        <div className="form-group row">
          <label htmlFor="staticEmail"
                 className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticEmail" value={user.username}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticEmail"
                 className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticEmail" value={user.password}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticEmail"
                 className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticEmail" value={user.email}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticEmail"
                 className="col-sm-2 col-form-label">Joined Date</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticEmail" value={user.joinedDate}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticEmail"
                 className="col-sm-2 col-form-label">Firstname</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticEmail" value={user.firstname}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticEmail"
                 className="col-sm-2 col-form-label">Lastname</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticEmail" value={user.lastname}/>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="staticEmail"
                 className="col-sm-2 col-form-label">Role</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticEmail" value={user.role}/>
          </div>
        </div>

        <button
            onClick={logout}
            className="btn btn-danger">
          Logout
        </button>
      </div>
  );
};
export default Profile;