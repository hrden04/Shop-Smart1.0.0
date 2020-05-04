import React from 'react';
import Review from './Review.jsx';

const ReviewList = ({ reviews }) => {
  return (
    <div className='review_list'>
      {reviews.map((review) => (<Review key={review._id} review={review} />))}
    </div>
  );
};

export default ReviewList;
