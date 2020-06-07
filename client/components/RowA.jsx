import React from 'react';
import PropTypes from 'prop-types';

// first row of review 
function RowA({ first, last, userImage }) {
  const userName = first.concat(' ', last);
  return (
    <div className="row_a">
      <div className="user_image_wrapper">
        <img alt="user_image" src={userImage} className="user_image" />
      </div>
      <div className="user_name_wrapper">
        <span className="user_name">{userName}</span>
      </div>
    </div>
  );
}

RowA.propTypes = {
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
};

export default RowA;
