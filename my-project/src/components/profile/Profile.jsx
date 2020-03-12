import React, { useState } from "react";
import s from "./profile.module.css";
import ProfileElems from "./ProfileElemes";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import EditProfileForm from "./ProfileInfo/EditProfileInfo";

const Profile = props => {
  const onSubmit = data => {
    props.getProfileInfoThunk(data).then(() => {
      setEditMode(false);
    });
  };
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={s.profile}>
      <div className={s.content}>
        <ProfileElems
          isOwner={props.isOwner}
          status={props.status}
          profile={props.profile}
          updateStatus={props.updateStatus}
          getPrifilePhoto={props.getPrifilePhoto}
        />
        <div className={s.profileInfo}>
          {!editMode ? (
            <span>
              <ProfileInfo
                edit={() => setEditMode(true)}
                profile={props.profile}
                isOwner={props.isOwner}
              />
            </span>
          ) : (
            <span>
              <EditProfileForm
                onSubmit={onSubmit}
                initialValues={props.profile}
                profile={props.profile}
              />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
