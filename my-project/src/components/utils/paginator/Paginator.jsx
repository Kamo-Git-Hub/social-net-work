import React, {useState} from 'react'
import s from '../../users/users.module.css'
import left from '../../../images/left.png'
import right from '../../../images/right.png'

const Paginator =({currentPage, pageSize, totalItemsCount, onPageChange, portionCount=10})=>{
    const pageCount=Math.ceil(totalItemsCount/pageSize)
    const pages =[]
    for(let i=1; i<pageCount;i++){
        pages.push(i)
    }

    const portionSize = Math.ceil(pageCount/portionCount)
    const [portionNum, setPortionNum]=useState(1)
    const leftPorion =(portionNum-1)*portionCount+1
    const rigthPortion =portionNum*portionCount
    return(
        <div>
            <div className={s.paginator}>
                
            <span>{portionNum>1&&<span onClick={()=>setPortionNum(portionNum-1)}><img className={s.button} src={left}/></span>}</span>
                {pages.filter(p=>p>=leftPorion&&p<=rigthPortion).map(p=>{
                    return(
                        <div>
                
                <span className={currentPage===p&&s.activNum} onClick={()=>onPageChange(p)}> <span className={s.nums}>{p}</span>
                    </span>
                
                    </div>
                    )
                })}
                <span>{portionSize>portionNum&&<span onClick={()=>setPortionNum(portionNum+1)}><img className={s.button} src={right}/></span>}</span>
            </div>
            
            
        </div>
    )
}


export default Paginator