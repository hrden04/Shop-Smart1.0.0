import React from 'react';

function DateFormat({ rawDate }) {
  console.log(rawDate.slice(4, 7));

  if (rawDate.slice(4, 7) === 'Jan') {
    const newDate = `January ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // feb
  if (rawDate.slice(4, 7) === 'Feb') {
    const newDate = `Febuary ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // mar
  if (rawDate.slice(4, 7) === 'Mar') {
    const newDate = `March ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // apr
  if (rawDate.slice(4, 7) === 'Apr') {
    const newDate = `April ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // may
  if (rawDate.slice(4, 7) === 'May') {
    const newDate = `May ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // jun
  if (rawDate.slice(4, 7) === 'Jun') {
    const newDate = `June ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // jul
  if (rawDate.slice(4, 7) === 'Jul') {
    const newDate = `July ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // aug
  if (rawDate.slice(4, 7) === 'Aug') {
    const newDate = `August ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // sep
  if (rawDate.slice(4, 7) === 'Sep') {
    const newDate = `September ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // oct
  if (rawDate.slice(4, 7) === 'Oct') {
    const newDate = `October ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // nov
  if (rawDate.slice(4, 7) === 'Nov') {
    const newDate = `November ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
  // dec
  if (rawDate.slice(4, 7) === 'Dec') {
    const newDate = `December ${rawDate.slice(7, 15)}`;
    return (
      <div>
        <span>{newDate}</span>
      </div>
    );
  }
}

export default DateFormat;
