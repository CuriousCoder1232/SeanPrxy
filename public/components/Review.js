import React from "react";
import moment from "moment";

const Review = props => {
  const { username, review, stars, review_created, user_id } = props.review;

  return (
    <div>
      <div>
        <img src={`profilepics/${user_id - 1}.jpg`} />
      </div>
      <div>
        <div>{username}</div>
        <div>{moment(review_created).fromNow()}</div>
        <div>{"★".repeat(stars) + "☆".repeat(5 - stars)}</div>
        <div>{review}</div>
      </div>
    </div>
  );
};

export default Review;
