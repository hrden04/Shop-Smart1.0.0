import React from 'react';
// eslint-disable-next-line import/extensions
import Stars from './Stars.jsx';

function RowB({ stars, description }) {
  return (
    <div className="row_b_stars_topdescrip">
      <Stars starCount={stars} />
      <div className="top_desc_wrapper">
        <div className="review-title">
          <span className="top_description">{description}</span>
        </div>
      </div>
    </div>
  );
}

export default RowB;
