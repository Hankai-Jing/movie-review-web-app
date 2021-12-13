import {API_URL} from "../consts";
import Alert from "../components/Alert";


export const callCreateReview = (review) =>
    fetch(`${API_URL}/reviews`, {
      method: 'POST',
      body: review,
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const callDeleteReview = (reviewId) =>
    fetch(`${API_URL}/reviews/${reviewId}`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(response => response.json());

