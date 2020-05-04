import React from 'react';
// eslint-disable-next-line import/extensions
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

export default RowB;
