import React from 'react';
import PropTypes from 'prop-types';

function RowD({ helpfulCount }) {
  return (
    <div className="row_g">
      <span className="helpful_vote">
        {helpfulCount}
        people found this helpful
      </span>
    </div>
  );
}

RowD.propTypes = {
  helpfulCount: PropTypes.number.isRequired,
};

export default RowD;
