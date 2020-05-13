import React from 'react';
import PropTypes from 'prop-types';

function RowF({ productImage }) {
  return (
    <div className="product_images">
      <div className="image_wrapper">
        <img className="review_image" alt="review_image" src={productImage} />
      </div>
    </div>
  );
}

RowF.propTypes = {
  productImage: PropTypes.string.isRequired,
};

export default RowF;
