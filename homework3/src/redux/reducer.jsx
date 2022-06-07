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



// export const editCommentFB=
// (id,coId,comment,setEditMode) => async(dispatch)=>{
//     const{data} = await apis.Edit(id,coId,comment);
//     dispatch(Edit(coId,data));
//     setEditMode(false);
// }

export const deleteCommentFB=(payload)=>{
    return async function (dispatch,getState){

        const data= doc(db,"post",payload);
        console.log(data)
        await deleteDoc(data);
        const post_index =getState().reducer.commentList.findIndex((v)=>{
            return v.id === payload;
        });
        console.log(post_index);
        dispatch(Delete(post_index));
    }
}

function reducer(state= initialState,action){
    console.log(action.type)
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
            const data = action.payload.newContent;
            return {
                ...state,
                commentList:state.commentList.map((comment,idx)=>{
                    if(comment.email===data.id){
                        return(state.commentList[idx]=data);}
                        else{
                            return comment;
                        }
                    })
                }
            }

        default:
            return{...state};
    }
}


export default reducer;
