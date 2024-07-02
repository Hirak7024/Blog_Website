import { FIND_COMMENT_BY_POST_ID_FAILURE, FIND_COMMENT_BY_POST_ID_REQUEST, FIND_COMMENT_BY_POST_ID_SUCCESS } from "./ActionType";



const initialState = {
    comments: [],
    loading: false,
    error: null,
}

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_COMMENT_BY_POST_ID_REQUEST:
            return { ...state, loading: true, error: null };
        case FIND_COMMENT_BY_POST_ID_SUCCESS:
            return { ...state, loading: false, error: null, comments: action.payload };
        case FIND_COMMENT_BY_POST_ID_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}