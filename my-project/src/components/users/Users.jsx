import React from "react";
import s from "./users.module.css";
import uPhoto from "../../images/userphoto.png";
import { NavLink } from "react-router-dom";

const Users = props => {
  return (
    <div>
      {props.users.map(u =>{
        return (
          <div key={u.id} className={s.pagesInfo}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  className={s.uPhoto}
                  src={u.photos.small || uPhoto}
                  alt="photo"
                />
              </NavLink>
            </div>
            <div className={s.namePosition}>
              <div>{u.name}</div>
              <div>
                {u.followed ? (
                  <span
                    className={s.buttonUnfollow}
                    onClick={() => props.unfollow(u.id)}
                  >
                    unfollow &#128505;
                  </span>
                  
                ) : (
                  <span
                    className={s.buttonFollow} 
                    onClick={() => props.follow(u.id)}
                  >
                    follow
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
