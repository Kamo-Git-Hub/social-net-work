import React from 'react'
import s from './login.module.css'
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {logInThunk} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import { Input } from '../utils/fields/Filds'
import { requairedFild, maxLengthCreater } from '../utils/validate/validate'
const Login =props=>{
    if(props.isAuth) return <Redirect to='/profile'/>
    const logIn =(data)=>{
        props.logInThunk(data.email, data.password, data.rememberMe, data.captcha)
    }
    return(
        <div className={s.login}>
            <div className={s.content}>
            <center>
                <h1>Login</h1>
                <LoginForm onSubmit={logIn} captchaUrl={props.captchaUrl}/>
            </center>
            </div>
        </div>
    )
}

const maxLength = maxLengthCreater(25)

const LoginFormHoc =props=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={s.fild}>
                <Field component={Input} validate={[requairedFild,maxLength]} name={"email"}/>
            </div>
            <div className={s.fild}>
            <Field component={Input} validate={[requairedFild,maxLength]} name={"password"} type="password"/>
            </div>
            <div>
            <Field component={"input"} name={"rememberMe"} type="checkbox"/>
            </div>
            <div>
                <button>Log In</button>
            </div>
    <div>{props.error&&props.error}</div>
            <div>
                {props.captchaUrl&&<img src={props.captchaUrl}/>}
                {props.captchaUrl&&<Field name={"captcha"} component={Input} validate={requairedFild}/>}
            </div>
        </form>
    )
}

const LoginForm = reduxForm({form:"login"})(LoginFormHoc)


const mapStateToprops =(state)=>{
    return({
        isAuth:state.auth.isAuth,
        captchaUrl:state.auth.captchaUrl
    })
}

export default connect(mapStateToprops,{
logInThunk
})(Login)