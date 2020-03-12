import React from 'react'
import s from './myPosts.module.css'
import { Preloader } from '../utils/preloader/Preloader'


const MyPosts =props=>{
    if(!props.profile) return <Preloader/>
    return(
        <div>
            <div>
                <img className={s.uPhoto} src={props.profile.photos.small} alt=""/>
            </div>
            <div className={s.myPosts}>
            {props.posts}
            </div>
        </div>
    )
}

export default MyPosts