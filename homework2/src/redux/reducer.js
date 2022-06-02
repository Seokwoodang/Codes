import { db } from "../firebase";
import { collection,doc,getDoc,getDocs,addDoc,updateDoc,deleteDoc} from "firebase/firestore"
import { async } from "@firebase/util";

const initialState = {
    contentList: []
};

const LOAD = "reducer/LOAD"
const ADDMOVIE="reducer/ADD";


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
            movie_list.push({...b.data()})
        });
        console.log(movie_list);
        dispatch(LOAD_MOVIE(movie_list));
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADDMOVIE:
            return {...state,contentList:[action.payload]};
        case LOAD:
            return{contentList:action.movie_list};
        
            default:
            return {...state};
    }
}
export default reducer;