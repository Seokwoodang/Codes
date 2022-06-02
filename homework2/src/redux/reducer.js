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
            movie_list.push({id:b.id,...b.data()})
        });
        console.log(movie_list);
        dispatch(LOAD_MOVIE(movie_list));
    }
}


export const addMovieFB=(movie)=>{
    return async function(dispatch){
       const docRef = await addDoc(collection(db,"movie"),movie);
       const _movie = await getDoc(docRef);
       const movie_data = {id: _movie.id, ..._movie.data()};

       console.log(movie_data);
       dispatch(ADD_MOVIE(movie_data))
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