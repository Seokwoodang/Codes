import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase';


let initialState = {
    contentList: []
};

const LOAD="reducer/LOAD";
const ADDMOVIE="reducer/ADD";

export function ADD_MOVIE(payload){
    return{
        type:ADDMOVIE,payload
    }
}

export function loadMovie(movie_list){
    return{type:LOAD,movie_list};
  }
  
  export const loadMovieFB=()=>{
    return async function (dispatch){
      const movie_data=await getDocs(collection(db,"movie"));
      console.log(movie_data);
  
      let movie_list=[];
      movie_data.forEach((b)=>{
        console.log(b.data());
        movie_list.push({...b.data()});
      });
      dispatch(loadMovie(movie_list));
    }
  }
  


function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADDMOVIE":
            return {...state,contentList:action.payload};
        
        case "movie/LOAD":
            return {
                list:action.movie_list

            }

        default:
            return {
                ...state
            };
    }
}



export default reducer;