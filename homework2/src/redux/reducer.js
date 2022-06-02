import { db } from "../firebase";
import { collection,doc,getDoc,getDocs,addDoc,updateDoc,deleteDoc} from "firebase/firestore"
import { async } from "@firebase/util";

const initialState = {
    contentList: []
};

const LOAD = "reducer/LOAD";
const ADDMOVIE="reducer/ADD";
const DELETE="reducer/DELETE";


export function ADD_MOVIE(payload){
    return{
        type:ADDMOVIE,payload
    }
}

export function LOAD_MOVIE(movie_list){
    return{type:LOAD,movie_list}
}


// middlewares
export const loadMovieFB =()=>{
    return async function(dispatch){
        const movie_data=await getDocs(collection(db,"movie"));
        console.log(movie_data)

        let movie_list=[];
        movie_data.forEach((b)=>{
            console.log(b.data());
            movie_list.push({id:b.id,...b.data()})
        });
        console.log(movie_list);
        dispatch(LOAD_MOVIE(movie_list));
    }
}


export const addMovieFB=(movie)=>{
    return async function(dispatch){
       const docRef = await addDoc(collection(db,"movie"),movie);
       //const _movie = await getDoc(docRef);
       const movie_data = {id: docRef.id, ...movie};
       dispatch(ADD_MOVIE(movie_data))
    }
}

export const updateMovieFB=(movie_id)=>{
    return async function (dispatch,getState){
        const docRef=doc(db,"movie",movie_id);
        await updateDoc(docRef,{completed:true});
        const _movie_list=getState().movie.list;
        const movie_index=_movie_list.findIndex((b)=>{
            return b.id=== movie_id;
        });
    }
}



export const deleteMovieFB=(movie_id)=>{
    return async function(dispatch, getState){
        if(!movie_id){
            window.alert("There's no id!!")
            return;
        }
        const docRef = doc(db,"movie",movie_id);
        await deleteDoc(docRef);
    
    }
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case ADDMOVIE:{
            console.log("작성완료!")
            return {...state,contentList:[action.payload]};
        }
        case DELETE:
            return{}
        case LOAD:
            return{contentList:action.movie_list};
        default:
            return {...state};
    }
}

export default reducer;