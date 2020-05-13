import React from 'react';
import PropTypes from 'prop-types';
import ReviewTable from './ReviewTable.jsx';

const ReviewReport = ({ reviews }) => (
  <div className="left_div">
    <h2>Customer reviews</h2>
    <div className="left_reviews">
      <ReviewTable reviews={reviews} />
    </div>
  </div>
);

ReviewReport.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewReport;
