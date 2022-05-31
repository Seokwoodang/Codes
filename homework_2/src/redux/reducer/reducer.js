let initialState ={
    contactList:[]
 };
 
 function reducer(state=initialState,action){
   switch(action.type){
     case "ADD_CONTENTS":        
       return{...state,   
             contactList:[...state.comtactList,{title:action.payload.title,genre:action.payload.genre,actor:action.payload.actor,director:action.payload.director}]} 
   default:
     return {...state};
 }
}

 export default reducer;