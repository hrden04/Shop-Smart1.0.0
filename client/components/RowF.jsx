import React from 'react';

function RowF({ productImage }) {
  return (
    <div className="product_images">
      <div className="image_wrapper">
        <img className="review_image" alt="review_image" src={productImage} />
      </div>
    </div>
  );
}

export default RowF;
