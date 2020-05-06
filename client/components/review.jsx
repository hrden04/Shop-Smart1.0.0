/* eslint-disable max-len */
import React from 'react';

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
const Review = ({ review }) => {
  return (
    <div className="review_card" id="table">
      <RowA firstName={review.reviewersFirstName} lastName={review.reviewersLastName} userImage={review.reviewersImage} />
      <RowB stars={review.starsCount} description={review.topDescription} />
      <RowC date={review.reviewDate} />
      <RowD verified={review.verifiedPurchase} />
      <RowE description={review.midDescription} />
      <RowF productImage={review.productImage} />
      <RowG helpfulCount={review.helpfulCount} />
      <RowH />
    </div>
  );
};

export default Review;
