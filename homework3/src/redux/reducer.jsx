import { async } from "@firebase/util"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

const initialState={
    commentList:[]
}

const LOAD ="reducer/LOAD";
const ADD = "reducer/ADD";

export function Add(payload){
    return{type:ADD,payload}
}

export function Load(payload){
    return{type:LOAD,payload}
}


//middlewares
export const addCommentFB=(comment)=>{
    return async function(dispatch){
        
        const docRef = await addDoc(collection(db,"post"),comment)
        const comment_data = {id:docRef.id,...comment};
        dispatch(Add(comment_data));
    }
}


export const loadCommentFB=()=>{
    return async function(dispatch){
        const comment_data=await getDocs(collection(db,"post"));
        // console.log("comment_data : "+comment_data)
        let comment_list = [];
         comment_data.forEach((comment)=>{
             
             comment_list.push({id:comment.id,...comment.data()})
         });
         dispatch(Load(comment_list));
        console.log(comment_list)
    }
}

function reducer(state= initialState,action){
    switch(action.type){
        case LOAD :
            return{commentList:action.payload}
        case ADD :{window.alert("작성완료!!")
            return{...state,commentList:[action.payload]}}
        default:
            return{...state};
    }
}


export default reducer;
