import {API_URL} from "../consts";
import Alert from "../components/Alert";

export const getAllMovies = (dispatch) =>
    fetch(`${API_URL}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(movies => {
      dispatch({
        type: 'get-all-movies',
        movies
      })
    }).catch(e => <Alert/>);

export const callCreateMovie = (movie) =>
    fetch(`${API_URL}/movies/?movie=${movie}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const callCreateReview = (review) => {
  console.log(review);
  fetch(`${API_URL}/reviews`, {
    method: 'POST',
    body: review,
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json());
}
