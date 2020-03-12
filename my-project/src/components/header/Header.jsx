import React from "react";
import s from "./header.module.css";
import { NavLink } from "react-router-dom";
import { Preloader } from "../utils/preloader/Preloader";


const Header = props => {
  if(!props.profile) return <Preloader/>
  return (
    <div className={s.header}>
<div className={s.logo}><h1>S/N</h1></div>
      <div className={s.content}>
        <div className={s.settingsbutton}>&#128736; Setting</div>
        {props.isAuth ? (
          <div>
            <span onClick={()=>props.logAuthThunk()} className={s.button}>Log Auth</span>
            <span>{props.profile.fullName}&#128065;</span>
          </div>
        ) : (
          <NavLink to="/login">
            <div className={s.button}>Login</div>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
