import React from "react";
import s from "./myPosts.module.css";
import MyPostsItems from "./MyPostsItems";
import { compose } from "redux";
import { connect } from "react-redux";
import { addPostAC } from "../../redux/posts-reducer";
import {getProfileThunk, getStatusThunk} from '../../redux/profile-reducer'
import { withRouter } from "react-router-dom";
import { witRedirectToLogin } from "../utils/hoc/witRedirectToLogin";

class MyPostsContainer extends React.Component {
  componentDidMount(){
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.id;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId)
  }
  render() {
    return (
      <div>
        <MyPostsItems
        id={this.props.id}
          profile={this.props.profile}
          posts={this.props.posts}
          addPostAC={this.props.addPostAC}
          status={this.props.status}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    posts: state.myPosts.posts,
    status: state.profilePage.status,
    id:state.auth.id
  };
};

export default compose(
  connect(mapStateToProps, {
    addPostAC, getProfileThunk, getStatusThunk
  }), withRouter, witRedirectToLogin
)(MyPostsContainer);
