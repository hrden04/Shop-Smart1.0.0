import React from 'react';

function RowA({ firstName, lastName, userImage }) {
  const userName = firstName.concat(' ', lastName);
  return (
    <div className="row_a_user_username">
      <div className="user_image_wrapper">
        <img alt="user_image" src={userImage} className="row_a_user_image" />
      </div>
      <div className="user_name_wrapper">
        <span className="span_a_user_name">{userName}</span>
      </div>
    </div>
  );
}


export default RowA;
