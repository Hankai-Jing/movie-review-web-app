import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {API_URL} from "../../consts";

const Register = () => {
  const [user, setUser] = useState({username: 'alice', password: 'alice123'});
  const navigate = useNavigate();
  const register = () => {
    const newUser = {...user, joinedDate: "12/7/2021"}
    fetch(`${API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify(newUser),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(status => navigate('/login'));
  };
  return(
      <div>
        <h1>Register</h1>
        <input
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            className="form-control mb-2 input-field"/>
        <input
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            type="password"
            className="form-control mb-2 input-field"/>
        <input
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            type="email"
            className="form-control mb-2 input-field"/>
        <input
            onChange={(e) => setUser({...user, firstname: e.target.value})}
            placeholder="firstname"
            type="text"
            className="form-control mb-2 input-field"/>
        <input
            onChange={(e) => setUser({...user, lastname: e.target.value})}
            placeholder="lastname"
            type="text"
            className="form-control mb-2 input-field"/>

        <legend className="col-form-label col-sm-2 pt-0">Role</legend>
          <div className="form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input"
                     name="optionsRadios" id="optionsRadios1" value="option1"
                     checked=""
                     onChange={(e) => setUser({...user, role: "user"})}/>
                User
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input"
                     name="optionsRadios" id="optionsRadios2" value="option2"
                     onChange={(e) => setUser({...user, role: "admin"})}/>
                Admin
            </label>
          </div>
          <div className="form-check mb-2">
            <label className="form-check-label">
              <input type="radio" className="form-check-input"
                     name="optionsRadios" id="optionsRadios3" value="option3"
                     onChange={(e) => setUser({...user, role: "moderator"})}/>
                Moderator
            </label>
          </div>

        <button
            className="btn btn-primary"
            onClick={register}>
          Register
        </button>
      </div>
  );
};
export default Register;