import React, { useState, useEffect } from "react";
import Styles from "../../assets/styles/user/c_user.module.scss";
import Button from "../UI/Button";
import Spinner from "../UI/Spinner";
import API from "../../Config/API";

const User = props => {
  const [userInfo, setUserInfo] = useState(null);
  const { user, name, image, githubId, desc, corp, country, email } = Styles;

  useEffect(() => {
    API.User()
      .then(user => {
        setUserInfo(user);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return userInfo === null ? (
    <Spinner />
  ) : (
    <div className={user}>
      <img className={image} src={userInfo.imageUrl} alt="" target="_blank" />
      <div className={name}>{userInfo.name}</div>
      <div className={githubId}>{userInfo.githubId}</div>
      <div className={desc}>{userInfo.desc}</div>
      <Button name="Edit profile" />
      <hr />
      <div className={corp}>{userInfo.corp}</div>
      <div className={country}>{userInfo.location}</div>
      <div className={email}>{userInfo.email}</div>
    </div>
  );
};

export default User;
