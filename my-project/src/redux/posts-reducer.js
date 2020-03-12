const initialState ={
    posts:[
        {post:"social-network",id:1},
        {post:"my project",id:2},
        {post:"Kamo Amirkhanyan", id:3}
    ]
}

const ADD_POST ="/posts/ADD_POST"

export const postsReducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_POST:
            const pushed={
                post:action.newPost,
                id:+1
            }
            return{
                ...state,
                posts:[...state.posts, pushed]
            }
        default:
            return state
    }
}


export const addPostAC =newPost=>({type:ADD_POST, newPost})