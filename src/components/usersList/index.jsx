import React, { useState, useEffect } from "react";
import { BASE_API } from "../../constants/api";
import UserItem from "./userItem";

const UsersList = () => {
  const [users, setUsers] = useState([]);

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
            return <UserItem key={user.id} user={user} />;
          })}
      </div>
    </div>
  );
};

export default UsersList;
