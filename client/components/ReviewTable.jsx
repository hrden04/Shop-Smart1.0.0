/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import StarsAvg from './StarsAvg.jsx';
import StarsPerc from './StarsPerc.jsx';

function ReviewTable({ reviews }) {
  const starsObj = reviews.map((obj) => {
    const starObj = {};
    starObj.stars = obj.starsCount;
    return starObj;
  });
  const total = starsObj.reduce((acc, currVal) => acc + currVal.stars, 0);
  const starAverage = (total / starsObj.length).toFixed(1);
  return (
    <div className="table_row_1">
      <StarsAvg average={starAverage} />
      <div className="b_star_rating">
        <span className="ratings_number">
          {total} customer ratings
        </span>
      </div>
      <div className="review_prog_bars">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="star_text_wrapper">
                  <span className="star_text">5 star</span>
                  <span> </span>
                </div>
              </td>
              <td>
                <div className="star_bar_5">
                  <div className="star_prog_5" />
                </div>
              </td>
              <td>
                <div className="star_bar_percent_5">
                  <span className="star_percent_text">
                    <StarsPerc stars={starsObj} num={2} total={total} />
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="star_text_wrapper">
                  <span className="star_text">4 star</span>
                  <span> </span>
                </div>
              </td>
              <td>
                <div className="star_bar_5">
                  <div className="star_prog_4" />
                </div>
              </td>
              <td>
                <div className="star_bar_percent_5">
                  <span className="star_percent_text">12%</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

ReviewTable.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ReviewTable;
