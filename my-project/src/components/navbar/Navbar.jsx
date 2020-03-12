import React from "react";
import s from "./navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={s.navbar}>
      
        <ul className={s.content}>
          
            <NavLink activeClassName={s.activ} to="/profile"><li>Profile</li></NavLink>
          
          
            <NavLink activeClassName={s.activ}  to="/posts"><li>Posts</li></NavLink>
          
          
            <NavLink activeClassName={s.activ}  to="/users"><li>Users</li></NavLink>
          
          
            <NavLink activeClassName={s.activ}  to="/photos"><li>Photos</li></NavLink>
          
         
            <NavLink activeClassName={s.activ}  to="/news"> <li>News</li></NavLink>
          
        </ul>
      </div>
   
  );
};
