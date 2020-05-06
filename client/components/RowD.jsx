import React from 'react';

function RowD({ verified }) {
  if (verified === true) {
    const display = 'Verified Purchase';
    return (
      <div className="row_d">
        <div className="item_specs_wrapper">
          <span className="item_specs"> </span>
        </div>
        <div className="verified_wrapper">
          <span className="verified">{display}</span>
        </div>
      </div>
    );
  }
  if (verified === false) {
    const display = '';
    return (
      <div className="row_d">
        <div className="item_specs_wrapper">
          <span className="item_specs"> </span>
        </div>
        <div className="verified_wrapper">
          <span className="verified">{display}</span>
        </div>
      </div>
    );
  }
}

export default RowD;
