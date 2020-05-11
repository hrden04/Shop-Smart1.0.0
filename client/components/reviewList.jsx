import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';


function ReviewList({ reviews }) {
  return (
    <div className="review_list">
      {reviews.map((review) => (<Review key={review.reactId} review={review} />))}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewList;
