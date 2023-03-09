import React from "react";
import UserItem from "./userItem/index";
import { Cards, UsersWrapper } from "./style";

const UsersList = ({ users, deleteUserById }) => {
  return (
    <UsersWrapper>
      <h2>Meet the hedgehogs!</h2>
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
    </UsersWrapper>
  );
};

export default UsersList;
