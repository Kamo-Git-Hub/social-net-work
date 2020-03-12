import { usersAPI } from "../api/api"

const initialState ={
    users:[],
    currentPage:1,
    pageSize:10,
    totalItemsCount:null,
    isFitching:false
}

const GET_USERS = "/users/GET_USERS"
const CURRENT_PAGE = "/users/CURRENT_PAGE"
const TOTAL_ITEMS_COUNT = "/users/TOTAL_ITEMS_COUNT"
const IS_FITCHING = "/users/IS_FITCHING"
const FOLLOW = "/users/FOLLOW"
const UNFOLLOW = "/users/UNFOLLOW"

export const usersReducer =(state=initialState, action)=>{
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                users:action.users
            }
            case CURRENT_PAGE:
                return{
                    ...state,
                    currentPage:action.currentPage
                }
                case TOTAL_ITEMS_COUNT:
                    return{
                        ...state,
                        totalItemsCount:action.totalCount
                    }
                    case IS_FITCHING:
                        return{
                            ...state,
                            isFitching:action.isFitching
                        }
                        case FOLLOW:
                            return{
                                ...state,
                                users:state.users.map(u=>{
                                    if(u.id===action.userId){
                                        return{
                                            ...u, followed:true
                                        }
                                    }
                                    return u
                                })
                            }
                            case UNFOLLOW:
                            return{
                                ...state,
                                users:state.users.map(u=>{
                                    if(u.id===action.userId){
                                        return{
                                            ...u, followed:false
                                        }
                                    }
                                    return u
                                })
                            }
        default:
            return state
    }
}


const getUsersAC =users=>({type:GET_USERS, users})
const currentPageAC =currentPage=>({type:CURRENT_PAGE, currentPage})
const totalItemsCountAC =totalCount=>({type:TOTAL_ITEMS_COUNT, totalCount})
const isFitchingAC = isFitching=>({type:IS_FITCHING, isFitching})
const followAC = userId =>({type:FOLLOW, userId})
const unfollowAC = userId =>({type:UNFOLLOW, userId})



export const getUsersThunk =(currentPage, pageSize)=>{
    return async(dispatch)=>{
        dispatch(isFitchingAC(true))
        const response = await usersAPI.getUsersApi(currentPage, pageSize)
        dispatch(getUsersAC(response.data.items))
        dispatch(totalItemsCountAC(response.data.totalCount))
        dispatch(currentPageAC(currentPage))
        dispatch(isFitchingAC(false))
    }
}


export const followThunk =(userId)=>{
    return async(dispatch)=>{
        const response = await usersAPI.followApi(userId)
        if(response.data.resultCode===0){
            dispatch(followAC(userId))
        }
    }
}


export const unfollowThunk =(userId)=>{
    return async(dispatch)=>{
        const response = await usersAPI.unfollowApi(userId)
        if(response.data.resultCode===0){
            dispatch(unfollowAC(userId ))
        }
    }
}