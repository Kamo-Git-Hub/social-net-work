import React from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import { Navbar } from './components/navbar/Navbar';
import { Route,withRouter } from 'react-router-dom';
import Login from './components/login/Login';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {initialaizedThunk} from './redux/app-reducer'
import { Preloader } from './components/utils/preloader/Preloader';
import { withSuspens } from './components/utils/hoc/withSuspens';


const ProfileContainer = React.lazy(()=>import(`./components/profile/ProfileContainer`))
const MyPostsContainer =React.lazy(()=>import(`./components/MyPosts/MyPostsContainer`))
const UsersContainer = React.lazy(()=>import(`./components/users/UsersContainer`))

class App extends React.Component{
  componentDidMount(){
    this.props.initialaizedThunk()
  }
  render(){
    if(!this.props.initialaized) return <Preloader/>
    return(
      <div>
        <HeaderContainer/>
        <div className='pages-content'>
          <div className='navbar-page'>
        <Navbar/>
        </div>
        <Route path='/users' render={withSuspens(UsersContainer)}/>
        <Route path='/profile/:userId?' render={withSuspens(ProfileContainer)}/>
        <Route path='/login' render={()=><Login/>}/>
        <Route path='/posts' render={withSuspens(MyPostsContainer)}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return({
    initialaized:state.app.initialaized
  })
}

export default compose(connect(mapStateToProps,{
initialaizedThunk
}), withRouter )(App)