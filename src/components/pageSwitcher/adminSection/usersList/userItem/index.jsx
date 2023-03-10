import React from "react";
import { BASE_API } from "../../../../../constants/api";
import { CardItem, CardTitle } from "./style";

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
    <CardItem>
      <CardTitle>{user.first_name}</CardTitle>
      <p>{user.email}</p>
      {user.avatar && (
        <img key={user.avatar} src={user.avatar} alt="a person" />
      )}
      <button onClick={() => handleOnClick(user.id)}>Delete</button>
    </CardItem>
  );
};

export default UserItem;
