import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import Users from './Users'
import {getUsersThunk, followThunk, unfollowThunk} from '../../redux/users-reducer'
import s from './users.module.css'
import Paginator from '../utils/paginator/Paginator'
import { Preloader } from '../utils/preloader/Preloader'
import { witRedirectToLogin } from '../utils/hoc/witRedirectToLogin'

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChange =(pageNum)=>{
        this.props.getUsersThunk(pageNum, this.props.pageSize)
    }
    render(){
        return(
            <div className={s.users}>
                {this.props.isFitching?<Preloader/>:null}
                <div className={s.content}>
                    <Paginator 
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalItemsCount={this.props.totalItemsCount}
                    onPageChange={this.onPageChange}/>
                    
                <Users
                users={this.props.users}
                unfollow={this.props.unfollowThunk}
                follow={this.props.followThunk}
                isDisable={this.props.isDisable}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return({
        users:state.usersPage.users,
        currentPage:state.usersPage.currentPage,
    pageSize:state.usersPage.pageSize,
    totalItemsCount:state.usersPage.totalItemsCount,
    isFitching:state.usersPage.isFitching,
    isDisable:state.usersPage.isDisable
    })
}

export default compose(connect(mapStateToProps,{
    getUsersThunk, followThunk, unfollowThunk
}),witRedirectToLogin)(UsersContainer)