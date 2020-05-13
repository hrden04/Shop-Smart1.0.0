import React from 'react';

function StarsPerc({ stars, num, total }) {
  let starCount = 0;
  for (let i = 0; i < stars.length; i++) {
    if (stars[i].stars === num) {
      starCount += 1;
    }
  }
  const percent = ((total / 100) * starCount) * 100;
  console.log(percent);
  return (
    <div>hello world</div>
  );
}

export default StarsPerc;
