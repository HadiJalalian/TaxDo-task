import React from "react";
import UserList from "../components/UserList/UserList";

const UserListPage: React.FC = () => {
  return (
    <div>
      <h1>لیست کاربران</h1>
      <UserList />
    </div>
  );
};

export default UserListPage;
