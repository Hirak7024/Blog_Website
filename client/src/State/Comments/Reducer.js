import { DELETE_COMMENT_SUCCESS, FIND_COMMENT_BY_POST_ID_FAILURE, FIND_COMMENT_BY_POST_ID_REQUEST, FIND_COMMENT_BY_POST_ID_SUCCESS, UPDATE_COMMENT_SUCCESS } from "./ActionType";



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
        case DELETE_COMMENT_SUCCESS:
            return { ...state, loading: false, error: null, comments: state.comments.filter((comment) => comment._id !== action.payload) }
        case UPDATE_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                comments: state.comments.map(comment =>
                    comment._id === action.payload._id ? action.payload : comment
                )
            };

        default:
            return state;
    }
}