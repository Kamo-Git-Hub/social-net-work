import React from 'react'
import { Preloader } from '../preloader/Preloader'



export const withSuspens =(Component)=>{
    return(props)=>{
        return <React.Suspense fallback={<div><Preloader/></div>}><Component {...props}/></React.Suspense>
    }
}