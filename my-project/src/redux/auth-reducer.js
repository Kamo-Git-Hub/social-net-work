import { loginAPI, securityAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const initialState ={
    id:null,
    email:null,
    login:null,
    isAuth:false,
    captchaUrl:null
}

const GET_AUTH_ME = "/auth/GET_AUTH_ME"
const GET_CAPTCHA_URL = "/auth/GET_CAPTCHA_URL"

export const authReducer =(state=initialState, action)=>{
    switch(action.type){
        case GET_CAPTCHA_URL:
        case GET_AUTH_ME:
            return{
                ...state, 
                ...action.payload 
            }
        default:
            return state
    }
}


const getAuthMeAC =(id, email, login, isAuth)=>({type:GET_AUTH_ME, payload:{id, email, login, isAuth}})
const getCaptchaUrlAC =(captchaUrl)=>({type:GET_CAPTCHA_URL, payload:{captchaUrl}})


export const getAuthMeThunk =()=>{
  
    return async (dispatch)=>{
        const response = await loginAPI.authMeApi()
        if(response.data.resultCode === 0){
            const{id, email, login}=response.data.data
            dispatch(getAuthMeAC(id, email, login, true))
        }
    }
}


export const logInThunk =(email, password, rememberMe, captcha)=>{
    return async(dispatch)=>{
        const response = await loginAPI.logInApi(email, password, rememberMe, captcha)
        if(response.data.resultCode===0){
            dispatch(getAuthMeThunk())
        }
        else{
            if(response.data.resultCode ===10){
                dispatch(getCaptchaUrlThunk())
            }
            const errorMessag = response.data.messages.length>0?response.data.messages[0]:"some error"
                dispatch(stopSubmit("login",{_error:errorMessag}))
              
        }
    }
}


export const logAuthThunk=()=>{
    return async(dispatch)=>{
        const response = await loginAPI.logAuthApi()
        if(response.data.resultCode===0){
            dispatch(getAuthMeAC(null, null, null, false))
        }
    }
}


const getCaptchaUrlThunk =()=>{
    return async(dispatch)=>{
        const response = await securityAPI.getCaptchaUrlApi()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlAC(captchaUrl))
    }
}