import React, { useState, useEffect } from "react";
import { BASE_API } from "../../constants/api";
import UserItem from "./userItem";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const deleteUserById = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`${BASE_API}users`);
      const userData = await res.json();
      setUsers(userData.data);
    };
    getUsers();
    console.log(users);
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <div>
        {users.length &&
          users.map((user) => {
            return (
              <UserItem
                key={`user-${user.id}`}
                user={user}
                deleteUserById={deleteUserById}
              />
            );
          })}
      </div>
    </div>
  );
};

export default UsersList;
