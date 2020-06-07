import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';

// returns list of reviews
function ReviewList({ reviews }) {
  return (
    <div className="review_list">
      {reviews.map((review) => (<Review key={review.reviewId} review={review} />))}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewList;
