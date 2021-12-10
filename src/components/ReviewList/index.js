import React, {useEffect, useState} from "react";
import Alert from "../Alert";
import {API_URL} from "../../consts";

const ReviewList = (props) => {

  const [reviewList, setReviewList] = useState();
  const [review, setReview] = useState('');

  useEffect(() => {
    if (props.username) {
      fetch(`${API_URL}/reviews/?username=${props.username}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        setReviewList(data);
      }).catch(e => <Alert/>);
    }

    if (props.imdbId) {
      fetch(`${API_URL}/reviews/${props.imdbId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        setReviewList(data);
      }).catch(e => <Alert/>);
    }
  }, []);

  return (
      <>
        <ul className="list-group">
          {
            <li className="list-group-item">
              <h5 className="fw-bolder">My Reviews</h5>
            </li>
          }
          {reviewList &&
            reviewList.map((review, idx) => {
              console.log(reviewList);
              return (
                  <li className="list-group-item" key={idx} >
                    {review.movieName}
                    <br/>
                    <div>{review.review}</div>
                  </li>
              );
            })
          }
        </ul>
      </>
  )
}

export default ReviewList;