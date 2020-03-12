import React from 'react'
import s from './myPosts.module.css'
import MyPosts from '../MyPosts/MyPosts'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../utils/fields/Filds'
import { requairedFild, maxLengthCreater } from '../utils/validate/validate'

const MyPostsPages=props=>{
const addPost =(value)=>{
    props.addPostAC(value.newPost)
}

    return(
        <div  className={s.myPostsPage}>
            <MyPostsForm onSubmit={addPost}/>
             {props.posts.map((p)=><MyPosts key={p.id} profile={props.profile} posts={p.post}/>)}
        </div>
    )
}

const maxLength = maxLengthCreater(120)

const MyPostsHoc =props=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={s.erroreMessag}>
            <Field name='newPost' component={Textarea} validate={[requairedFild, maxLength]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

export const MyPostsForm= reduxForm({form:"posts"})(MyPostsHoc)

export default MyPostsPages