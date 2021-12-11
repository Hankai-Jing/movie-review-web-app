import {useEffect, useState} from "react";
import {API_URL} from "../../consts";
import {useNavigate, useParams} from "react-router-dom";

const PublicProfile = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  console.log(params.username);
  const getProfile = () => {
    console.log("get profile")
    fetch(`${API_URL}/profile/${params.username}`, {
      method: 'GET',
      //credentials: 'include'
    }).then(res => res.json())
    .then(user => {
      setUser(user);
    }).catch(e => navigate('/login'));
  }

  useEffect(getProfile, [navigate]);

  return(
      <div>
        <h1>PublicProfile</h1>
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
                 className="col-sm-2 col-form-label">Joined Date</label>
          <div className="col-sm-10">
            <input type="text" readOnly="" className="form-control-plaintext"
                   id="staticEmail" value={user.joinedDate}/>
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

      </div>
  );
};
export default PublicProfile;