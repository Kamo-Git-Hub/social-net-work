import React from 'react'
import s from './fields.module.css'

export const Textarea =({meta, input, ...props})=>{
    const error =meta.error&&meta.touched
    return(
        <div className={s.textareaForm}>
            <div className={error&&s.erroreMessag}>
                <textarea {...input} {...props}/>
            </div>
            <div className={s.errorInfo}>
            {error&&`${meta.error} !!!`}
            </div>
        </div>
    )
}

export const Input =({meta, input, ...props})=>{
    const error =meta.error&&meta.touched
    return(
        <div className={s.inputForm}>
            <div className={error&&s.erroreMessag}>
                <input {...input} {...props}/>
            </div>
            <div className={s.errorInfo}>
            {error&&`${meta.error} !!!`}
            </div>
            
        </div>
    )
}