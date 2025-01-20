import React from "react";
import "./UserCard.scss";

interface UserCardProps {
  user: {
    name: { first: string; last: string };
    picture: { large: string };
    location: {
      country: string;
      street: { number: number; name: string };
      city: string;
      state: string;
      postcode: string;
    };
    gender: string;
    phone: string;
    email: string;
    login: { username: string };
    nat: string;
  };
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="left-section">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="profile-picture"
        />
        <div className="basic-info">
          <h2 className="hname">
            {user.name.first} {user.name.last}
          </h2>
          <p> {user.gender}</p>
        </div>
      </div>
      <div className="right-section">
        <div className="contact-info">
          <p>👥Username: {user.login.username}</p>
          <p>📞Phone: {user.phone}</p>
          <p className="mail">📩Email: {user.email}</p>
          <p>
            🏡Address: {user.location.street.number} {user.location.street.name}
            , {user.location.city}, {user.location.state},{" "}
            {user.location.country}, {user.location.postcode}
          </p>
        </div>
      </div>
      <img
        height={25}
        src={`https://flagcdn.com/w40/${user.nat.toLowerCase()}.png`}
        alt={`${user.nat} flag`}
        className="flag"
      />
    </div>
  );
};

export default UserCard;
