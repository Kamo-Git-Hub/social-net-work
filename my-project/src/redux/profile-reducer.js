import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const initialState = {
  profile: null,
  status: ""
};

const GET_PROFILE = "/profile/GET_PROFILE";
const GET_STATUS = "/profile/GET_STATUS";
const GET_PROFILE_PHOTO = "/profile/GET_PROFILE_PHOTO";

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case GET_STATUS:
      return {
        ...state,
        status: action.status
      };
    case GET_PROFILE_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      };
    default:
      return state;
  }
};

const getProfileAC = profile => ({ type: GET_PROFILE, profile });
const getStatusAC = status => ({ type: GET_STATUS, status });
const getProfilePhotoAC = photos => ({ type: GET_PROFILE_PHOTO, photos });

export const getProfileThunk = userId => {
  return dispatch => {
    profileAPI.getProfileApi(userId).then(response => {
      dispatch(getProfileAC(response.data));
    });
  };
};

export const getProfileInfoThunk = profile => {
  return async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.getProfileInfoApi(profile);
    if (response.data.resultCode === 0) {
      dispatch(getProfileThunk(userId));
    } else {
      dispatch(
        stopSubmit("edit-profile", { _error: response.data.messages[0] })
      );
      return Promise.reject(response.data.messages[0]);
    }
  };
};

export const getStatusThunk = userId => {
  return async dispatch => {
    const response = await profileAPI.getProfileStatusApi(userId);
    dispatch(getStatusAC(response.data));
  };
};

export const updateStatusThunk = status => {
  return async dispatch => {
    const response = await profileAPI.updateProfileStatusApi(status);
    if (response.data.resultCode === 0) {
      dispatch(getStatusAC(status));
    }
  };
};

export const getPrifilePhotoThunk = file => {
  return async dispatch => {
    const response = await profileAPI.getProfilePhotoApi(file);
    if (response.data.resultCode === 0) {
      dispatch(getProfilePhotoAC(response.data.data.photos));
    }
  };
};
