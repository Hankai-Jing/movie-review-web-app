import React, {useEffect, useState} from "react";
import Alert from "../Alert";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../../consts";

const PersonalReviewList = (props) => {
  const [reviewList, setReviewList] = useState([]);
  const navigate = useNavigate();

  const getReviews = () => {
    fetch(`${API_URL}/reviews/?username=${props.username}`, {
      method: 'GET',
      //credentials: 'include',
      //headers: {
      //  'content-type': 'application/json'
      //}
    })
    .then(response => response.json())
    .then(data => {
      setReviewList(data);
      console.log(reviewList)
    }).catch(e => <Alert/>);
  }
  useEffect(getReviews, [navigate]);

  return (
      <ul className="list-group">
        <h5>My reviews</h5>
        {
          reviewList.map((review, idx) => {
          return (
              <li className="list-group-item" key={idx}>
                <p className="fw-bold">{review.movieName}</p>
                <p>{review.review}</p>
              </li>
          );
          })
        }
      </ul>
  )
}

export default PersonalReviewList;