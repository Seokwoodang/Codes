import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { async } from "@firebase/util";

const initialState={
    twoList:[]
}

const ADD_TWO = "two/ADD_TWO";
const LOAD_TWO = "two/LOAD_TWO";
const DELETE_TWO = "two/DELETE_TWO";
const EDIT_TWO = "two/EDIT_TWO";


export function Add(payload){
    return{type:ADD_TWO,payload}
}

export function Load(payload){
    return{type:LOAD_TWO,payload}
}

export function Delete(payload){
    return{type:DELETE_TWO,payload}
}

export function Edit(payload,id){
    return{type:EDIT_TWO,payload,id}
}


export const addTwoFB = (two)=>{
    return async function(dispatch,getState){
        const docRef = await addDoc(collection(db,"comment"),two)
        const two_data = {id:docRef.id,...two};
        dispatch(Add(two_data));
    }
}

export const loadTwoFB = ()=>{
    return async function(dispatch,getState){
        const data = await getDocs(collection(db,"comment"));
        let data_list = [];
        data.forEach((value)=>{
            data_list.push({id:value.id,...value.data()})
        });
        dispatch(Load(data_list));
    }
}

function comment(state=initialState,action){
    switch(action.type){
        case ADD_TWO:{window.alert("comment complete")
            return {...state,twoList:[...state.twoList]}
        }
        case LOAD_TWO:
            return {...state,twoList:action.payload}
        
        case DELETE_TWO:{

        }
        case LOAD_TWO:{

        }
        default:
            return {...state};
    }
}

export default comment;