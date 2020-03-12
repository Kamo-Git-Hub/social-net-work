import React from "react";
import s from "../profile.module.css";
import { Preloader } from "../../utils/preloader/Preloader";
import {Field, reduxForm} from 'redux-form'
import { Input, Textarea } from "../../utils/fields/Filds";
import { requairedFild } from "../../utils/validate/validate";

const EditProfileInfo = ({ profile, handleSubmit, error }) => {
  if (!profile) return <Preloader />;
  return (
    <div className={s.profileInfo}>
        <form onSubmit={handleSubmit}>
      <div>
        <h2 className={s.header}>Edit Profile Info</h2>
      </div>
      <div>
        {error&&error}
      </div>
      <button className={s.editButton}>save</button>
     
      <div>
        <b>Full Name</b>:<div><Field component={Input} validate={[requairedFild]} name={"fullName"}/></div>
      </div>
      <div>
        <b>About Me</b>:<div><Field component={Textarea} validate={[requairedFild]} name={"aboutMe"}/></div>
      </div>
      <div>
        <b>Looking For A Job</b>:<div><Field component={Input} name={"lookingForAJob"} type="checkbox"/></div>
      </div>
      <div>
        <b>Profesional Skils</b>:<div><Field component={Textarea} validate={[requairedFild]} name={"lookingForAJobDescription"}/></div>
      </div>
     
      <h3>Contacts</h3>
      <div>
          {Object.keys(profile.contacts).map(key=>{
              return(
                  <div>
          <b>{key}</b>: <div><Field name={"contacts."+key} component={Input}/></div>
                  </div>
              )
          })}
      </div>
      </form>
    </div>
  );
};


const EditProfileForm=reduxForm({form:"edit-profile"})(EditProfileInfo)


export default EditProfileForm;
