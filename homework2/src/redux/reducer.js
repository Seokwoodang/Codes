let initialState = {
    contentList: []
};

const ADDMOVIE="reducer/ADD";

export function ADD_MOVIE(payload){
    
    return{
        type:ADDMOVIE,payload
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADDMOVIE:
            return {...state,contentList:[action.payload]};
        default:
            return {...state};
    }
}
export default reducer;