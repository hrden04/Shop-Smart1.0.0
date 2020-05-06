import React from 'react';
import DateFormat from './DateFormat.jsx';


function RowC({ date }) {
  return (
    <div className="row_c">
      <div className="review_date">
        <span className="date_prefix">
          Reviewed in the United States on
        </span>
      </div>
      <DateFormat rawDate={date} />
    </div>
  );
}


export default RowC;
