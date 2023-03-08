import React from "react";

const UserItem = ({ user }) => {
  return (
    <div>
      <p>
        <h2>{user.first_name}</h2>
      </p>
      <p>{user.email}</p>
      <img key={user.avatar} src={user.avatar} alt="a person" />
    </div>
  );
};

export default UserItem;
