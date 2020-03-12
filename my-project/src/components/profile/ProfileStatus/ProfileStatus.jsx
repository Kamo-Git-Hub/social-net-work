import React, { useState, useEffect } from "react";
import s from "../profile.module.css";

const ProfileStatus = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const onChangeStatus = () => {
    setEditMode(true);
  };
  const saveStatus = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onChangeContent = e => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      <div>
        {!editMode && (
          <span>
            {props.status}
            <div>
              {props.isOwner && (
                <button className={s.button} onClick={onChangeStatus}>
                  change
                </button>
              )}
            </div>
          </span>
        )}
      </div>
      <div>
        {editMode && (
          <span>
            <input onChange={onChangeContent} value={status} />
            <div>
              <button className={s.button} onClick={saveStatus}>
                save
              </button>
            </div>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProfileStatus;
