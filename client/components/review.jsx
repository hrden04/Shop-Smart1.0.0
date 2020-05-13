import React from 'react';
import PropTypes from 'prop-types';

// component imports
import RowA from './RowA.jsx';
import RowB from './RowB.jsx';
import RowC from './RowC.jsx';
import RowD from './RowD.jsx';
import RowE from './RowE.jsx';
import RowF from './RowF.jsx';
import RowG from './RowG.jsx';
import RowH from './RowH.jsx';

// eslint-disable-next-line func-style
function Review({ review }) {
  return (
    <div className="review_card" id="table">
      <RowA first={review.reviewersFirstName} last={review.reviewersLastName} userImage={review.reviewersImage} />
      <RowB stars={review.starsCount} description={review.topDescription} />
      <RowC date={review.reviewDate} />
      <RowD verified={review.verifiedPurchase} />
      <RowE description={review.midDescription} />
      <RowF productImage={review.productImage} />
      <RowG helpfulCount={review.helpfulCount} />
      <RowH />
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    reviewersFirstName: PropTypes.string,
    reviewersLastName: PropTypes.string,
    reviewersImage: PropTypes.string,
    reviewersEmail: PropTypes.string,
    starsCount: PropTypes.number, // also want to make min max for stars
    topDescription: PropTypes.string,
    reviewDate: PropTypes.string,
    verifiedPurchase: PropTypes.bool,
    midDescription: PropTypes.string,
    productImage: PropTypes.string,
    productId: PropTypes.number,
    helpfulCount: PropTypes.number,
  }).isRequired,
};

export default Review;
