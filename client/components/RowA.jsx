import React from 'react';

function RowA({ firstName, lastName, userImage }) {
  const userName = firstName.concat(' ', lastName);
  return (
    <div className="row_a">
      <div className="user_image_wrapper">
        <img alt="user_image" src={userImage} className="user_image" />
      </div>
      <div className="user_name_wrapper">
        <span className="user_name">{userName}</span>
      </div>
    </div>
  );
}


export default RowA;
