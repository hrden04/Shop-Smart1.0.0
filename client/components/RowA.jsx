import React from 'react';

function RowA(props) {
  console.log('props in row a', props)
  return (
    <div className="row_a_user_username">
      <img alt="user_image" />
      <span className="span_a_user_name"> username span </span>
    </div>
  )
}


export default RowA;
