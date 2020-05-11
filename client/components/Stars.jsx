import React from 'react';

// creates stars image that reflects reviews stars count
function Stars({ starCount }) {
  if (starCount === 1) {
    return (
      <div className="stars_wrapper">
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
    );
  }
  if (starCount === 2) {
    return (
      <div className="stars_wrapper">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
    );
  }
  if (starCount === 3) {
    return (
      <div className="stars_wrapper">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
    );
  }
  if (starCount === 4) {
    return (
      <div className="stars_wrapper">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="far fa-star" />
      </div>
    );
  }
  if (starCount === 5) {
    return (
      <div className="stars_wrapper">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
      </div>
    );
  }
  if (starCount === 0) {
    return (
      <div className="stars_wrapper">
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
        <i className="far fa-star" />
      </div>
    );
  }
}

export default Stars;