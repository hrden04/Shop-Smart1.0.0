import React from 'react';
import PropTypes from 'prop-types';

function RowE({ description }) {
  return (
    <div className="row_e">
      <div>
        <span className="mid_description_p1">
          {description}
        </span>
      </div>
    </div>
  );
}

RowE.propTypes = {
  description: PropTypes.string.isRequired,
};

export default RowE;
