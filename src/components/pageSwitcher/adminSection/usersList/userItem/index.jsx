import React from "react";
import { BASE_API } from "../../../../../constants/api";

const UserItem = ({ user, deleteUserById }) => {
  const handleOnClick = async (id) => {
    try {
      const { ok, status } = await fetch(`${BASE_API}users/${id}`, {
        method: "DELETE",
      });

      if (ok && status === 204) {
        deleteUserById(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{user.first_name}</h2>
      <p>{user.email}</p>
      {user.avatar && (
        <img key={user.avatar} src={user.avatar} alt="a person" />
      )}
      <button onClick={() => handleOnClick(user.id)}>Delete</button>
    </div>
  );
};

export default UserItem;
