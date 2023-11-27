import React from "react";
const ApiCard = ({ details }) => {
  return (
    <div className="container">
      <img
        className="profile"
        src={details.picture?.large}
        alt=" "
        height={150}
        width={150}
      />
      <h1 className="username">
        <span>{details.name?.title}.</span>
        <span>{details.name?.first}</span> &nbsp;
        <span>{details.name?.last} </span>
      </h1>
      <div className="userDetails">
        <ul>
          <li>
            <b>userId</b> {details.id?.name}
          </li>
          <li>
            <b>Location:</b> {details.location?.city}
            <b>Location:</b> {details.location?.coordinates?.latitude}
            <b>Location:</b> {details.location?.coordinates?.longitude}
          </li>
          <li>
            <b>Email:</b> {details.email}
          </li>
          <li>
            <b>Email:</b> {details.gender}
          </li>
          <li>
            <b>date of birth</b> {details.dob?.date}
          </li>
          <li>
            <b>Phone:</b> {details.phone}
          </li>
        </ul>
      </div>
      <button>Say Hi!</button>
    </div>
  );
};
export default ApiCard;
