import React from 'react';

function ReviewTable({ reviews }) {
  const total = reviews.reduce((acc, currVal) => acc + currVal.starsCount, 0);
  const average = (total / reviews.length).toFixed(1);
  return (
    <div>
      <div className="big_stars">
        <span>{average}</span>
      </div>
    </div>
  );
}

export default ReviewTable;