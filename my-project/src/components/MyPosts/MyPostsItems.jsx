import React from "react";
import s from "./myPosts.module.css";
import MiniProfile from "./MiniProfile";
import MyPostsPages from "./MyPostsPages";

const MyPostsItems = props => {
  return (
    <div className={s.postsPage}>
      <div className={s.content}>
        <div>
          <MiniProfile status={props.status} profile={props.profile} />
        </div>

        <div>
          <MyPostsPages
            addPostAC={props.addPostAC}
            profile={props.profile}
            posts={props.posts}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPostsItems;
