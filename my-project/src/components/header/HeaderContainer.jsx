import React from 'react'
import Header from './Header'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { logAuthThunk} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component{
    render(){
        return(
            <div>
                <Header isAuth={this.props.isAuth}
                login={this.props.login}
                logAuthThunk={this.props.logAuthThunk}
                profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return({
        isAuth:state.auth.isAuth,
        login:state.auth.login,
        profile:state.profilePage.profile
    })
}

export default compose(connect(mapStateToProps,{
 logAuthThunk
}))(HeaderContainer)