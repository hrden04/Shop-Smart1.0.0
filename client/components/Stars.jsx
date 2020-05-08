import React from 'react';

// creates stars image that reflects reviews stars count
function Stars({ starCount }) {
  if (starCount === 1) {
    return (
      <div className="stars_wrapper">
        <i className="stars_1" />
      </div>
    );
  }
  if (starCount === 2) {
    return (
      <div className="stars_wrapper">
        <i className="stars_2" />
      </div>
    );
  }
  if (starCount === 3) {
    return (
      <div className="stars_wrapper">
        <i className="stars_3" />
      </div>
    );
  }
  if (starCount === 4) {
    return (
      <div className="stars_wrapper">
        <i className="stars_4" />
      </div>
    );
  }
  if (starCount === 5) {
    return (
      <div className="stars_wrapper">
        <i className="stars_5" />
      </div>
    );
  }
  if (starCount === 0) {
    return (
      <div className="stars_wrapper">
        <i className="stars_0" />
      </div>
    );
  }
}

export default Stars;