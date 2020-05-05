import React from 'react';
import DateFormat from './DateFormat.jsx';


function RowC({ date }) {
  return (
    <div className="row_c">
      <span className="review_date">
        Reviewed in the United States on
      </span>
      <DateFormat rawDate={date} />
    </div>
  );
}


export default RowC;
