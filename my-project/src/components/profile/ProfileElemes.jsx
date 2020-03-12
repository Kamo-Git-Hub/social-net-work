import React from "react";
import s from "./profile.module.css";
import { Preloader } from "../utils/preloader/Preloader";
import uPhoto from '../../images/userphoto.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileElems = ({ profile, isOwner, status, updateStatus, getPrifilePhoto }) => {
  const changeProfilePhoto=(e)=>{
    if(e.currentTarget.files[0])
    getPrifilePhoto(e.currentTarget.files[0])
  }
  if (!profile) return <Preloader />;
  return (
    <div className={s.profileElems}>
      <div><img className={s.uPhoto} src={profile.photos.large||uPhoto} alt="photo"/></div>
      <div className={s.fullName}>{profile.fullName}</div>
      <div>
          {isOwner&&<input onChange={changeProfilePhoto} type='file'/>}
      </div>
      
      <div className={s.status}>
      <div className={s.statusName}>Status</div>
        <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileElems;
