
let initialState = {
    contentList: []
};

function reducer(state = initialState, action) {
  console.log(action);
    switch (action.type) {
        case "ADD_CONTENTS":
            return {
                ...state,
                contentList: [
                    ...state.contentList, {
                        title: action.payload.title,
                        genre: action.payload.genre,
                        actor: action.payload.actor,
                        director: action.payload.director
                    }
                ]
            }

        default:
            return {
                ...state
            };
    }
}

export default reducer;