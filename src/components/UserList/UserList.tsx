import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard from "../UserCard/UserCard";
import "./UserList.scss";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      `https://randomuser.me/api/?results=10&page=${page}`
    );
    const data = await response.json();
    setUsers((prevUsers) => [...prevUsers, ...data.results]);
    if (data.results.length === 0) {
      setHasMore(false);
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchUsers}
      hasMore={hasMore}
      loader={<h4>در حال بارگذاری...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>پایان لیست</b>
        </p>
      }
    >
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.login.uuid} user={user} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default UserList;
