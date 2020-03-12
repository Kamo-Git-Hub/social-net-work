import React from "react";
import Profile from "./Profile";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  getProfileThunk,
  getProfileInfoThunk,
  getStatusThunk,
  updateStatusThunk, getPrifilePhotoThunk
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { witRedirectToLogin } from "../utils/hoc/witRedirectToLogin";

class ProfileContainer extends React.Component {
  refreshProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.id;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfileThunk(userId);
    this.props.getStatusThunk(userId);
  };
  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prewProps) {
    if (this.props.match.params.userId != prewProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <div>
        <Profile
          profile={this.props.profile}
          isOwner={!this.props.match.params.userId}
          getProfileInfoThunk={this.props.getProfileInfoThunk}
          status={this.props.status}
          updateStatus={this.props.updateStatusThunk}
          getPrifilePhoto={this.props.getPrifilePhotoThunk}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
    id: state.auth.id,
    status: state.profilePage.status
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfileThunk,
    getProfileInfoThunk,
    getStatusThunk, updateStatusThunk,
    getPrifilePhotoThunk
  }),
  withRouter, witRedirectToLogin
)(ProfileContainer);
