import { combineReducers, createStore, applyMiddleware } from "redux";
import { authReducer } from "../auth-reducer";
import ThunkMiddleware from 'redux-thunk'
import { usersReducer } from "../users-reducer";
import { profileReducer } from "../profile-reducer";
import {reducer as formReducer} from 'redux-form';
import { postsReducer } from "../posts-reducer";
import { appReducer } from "../app-reducer";

const reducers =combineReducers({
    auth:authReducer,
    usersPage:usersReducer,
    profilePage:profileReducer,
    form:formReducer,
    myPosts:postsReducer,
    app:appReducer
})


export const store = createStore(reducers, applyMiddleware(ThunkMiddleware) )