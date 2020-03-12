import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const witRedirectToLogin=(Component)=>{
    class redirectLogin extends React.Component{
        render(){
            if(!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
    const mapStateToProps =(state)=>{
        return({
            isAuth:state.auth.isAuth
        })
    }
    const redirectHoc = connect(mapStateToProps)(redirectLogin)
    return redirectHoc
}