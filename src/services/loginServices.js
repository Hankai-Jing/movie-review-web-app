import {API_URL} from "../../consts";
import Alert from "../components/Alert";

export const login = (dispatch, navigate, user) =>
  fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(status => {
    navigate('/profile')
    dispatch
  }).catch(e => <Alert/>);
