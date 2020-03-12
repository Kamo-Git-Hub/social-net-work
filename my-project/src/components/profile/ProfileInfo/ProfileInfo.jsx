import React from "react";
import s from "../profile.module.css";
import { Preloader } from "../../utils/preloader/Preloader";

const ProfileInfo = ({ profile, edit, isOwner }) => {
  if (!profile) return <Preloader />;
  return (
    <div className={s.profileInfo}>
      <div className={s.header}>
        <h2>Profile Info</h2>
      </div>
      {isOwner&&<button className={s.editButton} onClick={edit}>edit</button>}
      
      <div>
        <b>Full Name</b>:<p>{profile.fullName}</p>
      </div>
      <div>
        <b>About Me</b>:<p>{profile.aboutMe}</p>
      </div>
      <div>
        <b>Looking For A Job</b>:<p>{profile.lookingForAJob?"yes":"no"}</p>
      </div>
      <div>
        <b>Profesional Skils</b>:<p>{profile. lookingForAJobDescription}</p>
      </div>
      
      <h1>Contacts</h1>
      <div>
          {Object.keys(profile.contacts).map(key=>{
              return <Contacts key={key} contactKey={key} contactValue={profile.contacts[key]}/>
          })}
      </div>
    </div>
  );
};


const Contacts =({contactKey, contactValue})=>{
return <div><b>{contactKey}</b>:<p>{contactValue}</p></div>
}

export default ProfileInfo;
