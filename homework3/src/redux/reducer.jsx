import { async } from "@firebase/util"
import { db } from "../firebase"
import { collection,doc,getDoc,getDocs,addDoc,updateDoc,deleteDoc} from "firebase/firestore"

const initialState={
    commentList:[]
}
//const comment_db = db.app.collection("post");

const LOAD ="reducer/LOAD";
const ADD = "reducer/ADD";
const DELETE = "reducer/DELETE";
const EDIT = "reducer/UPDATE";

export function Add(payload){
    return{type:ADD,payload}
}

export function Load(payload){
    return{type:LOAD,payload}
}

export function Delete(payload){
    return{type:DELETE,payload}
}

export function Edit(payload,coId){
    return{type:EDIT, payload,coId}
}


//middlewares
export const addCommentFB=(comment)=>{
    return async function(dispatch){
        const docRef = await addDoc(collection(db,"post"),comment)
        const comment_data = {id:docRef.id,...comment};
        dispatch(Add(comment_data));
        console.log(comment)
        //window.location.replace('/')
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
    }
}

export const deleteCommentFB=(payload)=>{ //payload 부분에 id값이 들어가게 됨.
    return async function (dispatch,getState){ //dispatch,getState 주는 이유는?
        const data= doc(db,"post",payload); // data 에 db.post.id를 저장함. id 에 포스트의 모든 정보가 저장되어있음
        console.log(data)
        await deleteDoc(data); // data를 삭제한다.
        const post_index =getState().reducer.commentList.findIndex((v)=>{ // getState(스토어라고 이해하면됨)의 reducer의 commentList 에서 인자를 찾고 
            return v.id === payload;
        });
        console.log(post_index); // 작동이 안됨,,,
        dispatch(Delete(post_index)); // post_index 뿌려주기!!
    }
}

export const editCommentFB=(payload,id)=>async(dispatch,getState)=>{
    
    const data = doc(db,"post",id);
    await updateDoc(data,{
        image_url : payload.image_url,
      comment : payload.comment,
      email : payload.email,
     nickname: payload.nickname,
      user_pic: payload.user_pic
    });
    dispatch(Edit({payload,id}))
}

function reducer(state= initialState,action){
    console.log(action.payload)
    switch(action.type){
        case LOAD :
            return{...state,commentList:action.payload}

        case ADD :{window.alert("작성완료!!")
            return{...state,commentList:[...state.commentList]}}

        case DELETE :{
            const newDeletedPost = state.commentList.filter((value,idx)=>{
                return idx===action.payload?false:true;
            })
           return{...state,list:[...newDeletedPost]};
        }

        case EDIT:{
            const newChangePost = state.commentList.map((v,idx)=>{
                return v.id ===action.payload.id ? action.payload.payload: v;
            });
            return {...state, commentList:newChangePost};
            }

        default:
            return{...state};
    }
}


export default reducer;
