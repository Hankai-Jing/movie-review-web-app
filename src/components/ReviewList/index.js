import React, {useEffect, useState} from "react";
import Alert from "../Alert";
import {API_URL} from "../../consts";
import {callCreateReview} from "../../services/movieService";

const ReviewList = (props) => {

  const [reviewList, setReviewList] = useState();
  const [review, setReview] = useState('');

  useEffect(() => {
    if (props.isDetail) {
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
    } else {
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

  }, []);

  const updateReview = (event) =>
      setReview(event.target.value);

  const createReview = () => {
    callCreateReview(JSON.stringify({
      reviewerUsername: props.username,
      review: review,
      imdbid: props.imdbId,
      movieName: props.movieName,
    }))
    .then(actualReview =>
        setReviewList([
          actualReview, ...reviewList
        ]));
  };

  const renderCreateReview = () =>{
    return (
        <li className="list-group-item d-flex justify-content-between">
          <div class="w-100">
            <input
                onChange={updateReview}
                defaultValue={review.title}
                className="form-control"/>
          </div>
          <span class="px-3">
          <button
              onClick={createReview}
              className="btn btn-success float-end">
            Create
          </button>
</span>
        </li>
    )
  }

  const listTitle = () => {
    if (props.isDetail) {
      return `Reviews for ${props.movieName}`;
    }
    return 'My Reviews'
  };


  if (!reviewList) {
    return <></>
  }

  return (
      <>
        <ul className="list-group">
          {
            <li className="list-group-item">
              <h5 className="fw-bolder">
                { listTitle() }
              </h5>
            </li>
          }
          {renderCreateReview()}
          {reviewList &&
            reviewList.map((review, idx) => {
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