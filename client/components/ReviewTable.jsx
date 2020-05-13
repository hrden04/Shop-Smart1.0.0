/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import StarsAvg from './StarsAvg.jsx';


function ReviewTable({ reviews }) {
  // creates object containing stars count values for reviews
  const starsObj = reviews.map((obj) => {
    const starObj = {};
    starObj.stars = obj.starsCount;
    return starObj;
  });

  // total amount of stars count in all reviews combined
  const total = starsObj.reduce((acc, currVal) => acc + currVal.stars, 0);
  const starAverage = (total / starsObj.length).toFixed(1);

  // creates percentage of stars count for a single star
  function starsPerc(obj, num, numTotal) {
    let starCount = 0;
    for (let i = 0; i < obj.length; i += 1) {
      if (obj[i].stars === num) {
        starCount += 1;
      }
    }
    const percent = ((numTotal / 100) * starCount) * 100;
    return percent;
  }

  const stars5Percent = starsPerc(starsObj, 5, reviews.length);
  const stars4Percent = starsPerc(starsObj, 4, reviews.length);
  const stars3Percent = starsPerc(starsObj, 3, reviews.length);
  const stars2Percent = starsPerc(starsObj, 2, reviews.length);
  const stars1Percent = starsPerc(starsObj, 1, reviews.length);

  return (
    <div className="table_row_1">
      <StarsAvg average={starAverage} />
      <div className="b_star_rating">
        <span className="ratings_number">
          {reviews.length} customer ratings
        </span>
      </div>
      <div className="review_prog_bars">
        <table className="review_table_body">
          <tbody>
            <tr>
              <td>
                <div className="star_text_wrapper">
                  <span className="star_text">5 star</span>
                  <span> </span>
                </div>
              </td>
              <td className="graph_row">
                <div className="star_bar_5">
                  <div className="star_prog_5" style={{ width: stars5Percent }} />
                </div>
              </td>
              <td>
                <div className="star_bar_percent_5">
                  <span className="star_percent_text">
                    {stars5Percent}
                    %
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
              <td className="graph_row">
                <div className="star_bar_5">
                  <div className="star_prog_4" style={{ width: stars4Percent }} />
                </div>
              </td>
              <td>
                <div className="star_bar_percent_5">
                  <span className="star_percent_text">
                    {stars4Percent}
                    %
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="star_text_wrapper">
                  <span className="star_text">3 star</span>
                  <span> </span>
                </div>
              </td>
              <td>
                <div className="star_bar_5">
                  <div className="star_prog_3" style={{ width: stars3Percent }} />
                </div>
              </td>
              <td>
                <div className="star_bar_percent_5">
                  <span className="star_percent_text">
                    {stars3Percent}
                    %
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="star_text_wrapper">
                  <span className="star_text">2 star</span>
                  <span> </span>
                </div>
              </td>
              <td>
                <div className="star_bar_5">
                  <div className="star_prog_2" style={{ width: stars2Percent }} />
                </div>
              </td>
              <td>
                <div className="star_bar_percent_5">
                  <span className="star_percent_text">
                    {stars2Percent}
                    %
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="star_text_wrapper">
                  <span className="star_text">1 star</span>
                  <span> </span>
                </div>
              </td>
              <td>
                <div className="star_bar_5">
                  <div className="star_prog_1" style={{ width: stars1Percent }} />
                </div>
              </td>
              <td>
                <div className="star_bar_percent_5">
                  <span className="star_percent_text">
                    {stars1Percent}
                    %
                  </span>
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
