import React from "react";
import s from "./myPosts.module.css";
import { Preloader } from "../utils/preloader/Preloader";
import {NavLink} from 'react-router-dom'

const MiniProfile = props => {
  if (!props.profile) return <Preloader />;
  return (
    <div>
      <div className={s.profile}>
        <div>
          <img
            className={s.photo}
            src={props.profile.photos.large}
            alt="user photo"
          />
        </div>
        <NavLink to={"/profile"}>
        <div className={s.fullName}>{props.profile.fullName}</div>
        </NavLink>
        <div className={s.status}>{props.status}</div>
      </div>
    
    </div>
  );
};

export default MiniProfile;
