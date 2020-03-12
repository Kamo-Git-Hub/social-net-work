

export const requairedFild =(value)=>{
    if(value) return undefined
    return `empty field` 
}


export const maxLengthCreater =(maxLength)=>(value)=>{
    if(value.length>maxLength) return `max number of characters ${maxLength}`
}

