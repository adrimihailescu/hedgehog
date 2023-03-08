import React, { useState, useEffect } from "react";
import { BASE_API } from "../../../constants/api";
import AddNewUser from "./addUser";
import UsersList from "./usersList";

// let newUserName = "morpheus";
// let newUserJob = "leader";

const AdminSection = () => {
  const [users, setUsers] = useState();

  // const newUserNameRef = useRef();
  // const newUserJobRef = useRef();

  const deleteUserById = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const addNewUser = ({ name, job, id }) => {
    setUsers([
      ...users,
      {
        first_name: name,
        email: `${name}@${job}.com`,
        id,
        avatar: "https://picsum.photos/150",
      },
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
