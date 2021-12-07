import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {API_URL} from "../../consts";
import Alert from "../Alert";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const login = () => {
    console.log(user)
    fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      if (res.status === 403) {
        console.log("403");
        navigate('/error');
      } else {
        navigate('/profile')
      }

    }).catch(e => <Alert/>);
  }


  return(
      <div>
        <h1>Login</h1>
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
        <button
            className="btn btn-primary"
            onClick={login}>
          Login
        </button>
      </div>
  );
};
export default Login;