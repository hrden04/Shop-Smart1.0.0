import React from 'react';

// creates stars image that reflects reviews stars count
// uses sprite image thats requested from website
function Stars({ starCount }) {
  if (starCount === 1) {
    return (
      <div className="stars_wrapper">
        <i className="stars stars_1" />
      </div>
    );
  }
  if (starCount === 2) {
    return (
      <div className="stars_wrapper">
        <i className="stars stars_2" />
      </div>
    );
  }
  if (starCount === 3) {
    return (
      <div className="stars_wrapper">
        <i className="stars stars_3" />
      </div>
    );
  }
  if (starCount === 4) {
    return (
      <div className="stars_wrapper">
        <i className="stars stars_4" />
      </div>
    );
  }
  if (starCount === 5) {
    return (
      <div className="stars_wrapper">
        <i className="stars stars_5" />
      </div>
    );
  }
  if (starCount === 0) {
    return (
      <div className="stars_wrapper">
        <i className="stars stars_0" />
      </div>
    );
  }
}

export default Stars;
