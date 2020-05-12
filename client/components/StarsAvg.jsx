import React from 'react';

function StarsAvg({ average }) {
  // if (average === 0) {
  return (
    <div className="big_stars_wrapper">
      <i className="b_stars b_stars_0" />
      <span className="b_stars_text">
        {average} out of 5
      </span>
    </div>
  );
  // }
  // if (average > 0 && average < 1) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_0_5" />
  //     </div>
  //   );
  // }
  // if (average === 1) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_1" />
  //     </div>
  //   );
  // }
  // if (average > 1 && average < 2) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_1_5" />
  //     </div>
  //   );
  // }
  // if (average === 2) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_2" />
  //     </div>
  //   );
  // }
  // if (average > 2 && average < 3) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_2_5" />
  //     </div>
  //   );
  // }
  // if (average === 3) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_3" />
  //     </div>
  //   );
  // }
  // if (average > 3 && average < 4) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_3_5" />
  //     </div>
  //   );
  // }
  // if (average === 4) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_4" />
  //     </div>
  //   );
  // }
  // if (average > 4 && average < 5) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_4_5" />
  //     </div>
  //   );
  // }
  // if (average === 5) {
  //   return (
  //     <div className="big_stars_wrapper">
  //       <i className="b_stars b_stars_5" />
  //     </div>
  //   );
  // }
}

export default StarsAvg;
