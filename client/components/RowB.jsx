import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars.jsx';

function RowB({ stars, description }) {
  return (
    <div className="row_b">
      <Stars starCount={stars} />
      <div className="top_desc_wrapper">
        <span className="top_description">{description}</span>
      </div>
    </div>
  );
}

RowB.propTypes = {
  stars: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default RowB;
