import React from 'react';

function DateFormat({ rawDate }) {
  const shortMonth = rawDate.slice(4, 7);
  const dateMinusMonth = rawDate.slice(7, 15);

  if (shortMonth === 'Jan') {
    const newDate = `January ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">
          {newDate}
        </span>
      </div>
    );
  }
  // feb
  if (shortMonth === 'Feb') {
    const newDate = `Febuary ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // mar
  if (shortMonth === 'Mar') {
    const newDate = `March ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // apr
  if (shortMonth === 'Apr') {
    const newDate = `April ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // may
  if (shortMonth === 'May') {
    const newDate = `May ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // jun
  if (shortMonth === 'Jun') {
    const newDate = `June ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // jul
  if (shortMonth === 'Jul') {
    const newDate = `July ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // aug
  if (shortMonth === 'Aug') {
    const newDate = `August ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // sep
  if (shortMonth === 'Sep') {
    const newDate = `September ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // oct
  if (shortMonth === 'Oct') {
    const newDate = `October ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // nov
  if (shortMonth === 'Nov') {
    const newDate = `November ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
  // dec
  if (shortMonth === 'Dec') {
    const newDate = `December ${dateMinusMonth}`;
    return (
      <div className="row_c_date">
        <span className="date">{newDate}</span>
      </div>
    );
  }
}

export default DateFormat;
