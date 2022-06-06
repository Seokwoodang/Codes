import { async } from "@firebase/util"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

const initialState={
    userList:[]
}

const ADD = "signing/ADD";

export function Add(payload){
    return{type:ADD,payload}
}

//middlewares
export const addUserFB=(user)=>{
    return async function(dispatch){
        const docRef = await addDoc(collection(db,"users"),user)
        const user_data = {id:docRef.id,...user};
        dispatch(Add(user_data));
    }
}
/*
  const user_doc = await addDoc(collection(db,"users"),{
    user_id:user.user.email,
    user_pw:pw,
    user_pwch:pwcheck,
    user_nick:nick
  })*/

function signing(state= initialState,action){
    switch(action.type){
        case ADD :{window.alert("회원이 된걸 환영한다!!")
            return{...state,userList:[action.payload]}}
        default:
            return{...state};
    }
}


export default signing;
