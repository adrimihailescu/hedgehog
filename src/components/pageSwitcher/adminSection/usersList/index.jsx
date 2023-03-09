import React from "react";
import UserItem from "./userItem/index";
import { Cards, UsersListWrapper } from "./style";

const UsersList = ({ users, deleteUserById }) => {
  return (
    <UsersListWrapper>
      <h3>Meet your fellow hedgehogs!</h3>
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
    </UsersListWrapper>
  );
};

export default UsersList;
