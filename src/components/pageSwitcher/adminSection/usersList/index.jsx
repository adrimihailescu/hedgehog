import React from "react";
import UserItem from "./userItem/index";

const UsersList = ({ users, deleteUserById }) => {
  return (
    <div>
      <h1>Your dashboard</h1>
      <div>
        {users &&
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
