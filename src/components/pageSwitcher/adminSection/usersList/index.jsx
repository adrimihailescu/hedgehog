import React from "react";
import UserItem from "./userItem/index";
import { Cards } from "./style";

const UsersList = ({ users, deleteUserById }) => {
  return (
    <div>
      <h2>Your dashboard</h2>
      <Cards>
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
      </Cards>
    </div>
  );
};

export default UsersList;
