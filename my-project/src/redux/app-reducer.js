import { getAuthMeThunk } from "./auth-reducer"

const initialState = {
    initialaized:false
}

const INITIALAIZED = "/app/INITIALAIZED"


export const appReducer =(state=initialState, action)=>{
    switch(action.type){
        case INITIALAIZED:
            return{
                ...state,
                initialaized:true
            }
        default:
            return state
    }
}


const initialaizedAC =()=>({type:INITIALAIZED})


export const initialaizedThunk =()=>{
    return async(dispatch)=>{
        const promise = dispatch(getAuthMeThunk())
        promise.then(()=>dispatch(initialaizedAC()))
    }
}