import React, { useState, useEffect } from "react";
import { BASE_API } from "../../../constants/api";
import AddNewUser from "./addUser";
import UsersList from "./usersList";

const AdminSection = () => {
  const [users, setUsers] = useState();

  const deleteUserById = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const addNewUser = ({ name, job, id }) => {
    setUsers([
      {
        first_name: name,
        email: `${name}@${job}.com`,
        id,
        avatar: "https://picsum.photos/130",
      },
      ...users,
    ]);
  };

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`${BASE_API}users`);
      const userData = await res.json();
      setUsers(userData.data);
    };
    getUsers();
    // console.log(users);
  }, []);

  return (
    <div>
      <AddNewUser addNewUser={addNewUser} />
      <UsersList users={users} deleteUserById={deleteUserById} />
    </div>
  );
};

export default AdminSection;
