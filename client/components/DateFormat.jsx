import React from 'react';
import PropTypes from 'prop-types';


function DateFormat({ rawDate }) {
  const dateToMils = Date.parse(rawDate);
  const d = new Date(dateToMils);

  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  const newDate = `${mo} ${da}, ${ye}`;

  return (
    <div className="row_c_date">
      <span className="date">
        {newDate}
      </span>
    </div>
  );
}

DateFormat.propTypes = {
  rawDate: PropTypes.string.isRequired,
};

export default DateFormat;
