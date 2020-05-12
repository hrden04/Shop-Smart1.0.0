import React from 'react';
import StarsAvg from './StarsAvg.jsx';

function ReviewTable({ reviews }) {
  const starsObj = reviews.map((obj) => {
    const starObj = {};
    starObj.stars = obj.starsCount;
    return starObj;
  });
  const total = starsObj.reduce((acc, currVal) => acc + currVal.stars, 0);
  const starAverage = (total / starsObj.length).toFixed(1);
  return (
    <div className="table_row_1">
      <div className="big_stars">
        <span className="big_stars_icon">
          <StarsAvg average={starAverage} />
        </span>
      </div>
    </div>
  );
}

export default ReviewTable;
