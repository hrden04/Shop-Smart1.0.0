import React from 'react';

function RowD({ helpfulCount }) {
  return (
    <div className="row_g">
      <span className="helpful_vote">{helpfulCount} people found this helpful</span>
    </div>
  );
}

export default RowD;