import { FIND_POSTS_BY_USER_ID_FAILURE, FIND_POSTS_BY_USER_ID_REQUEST, FIND_POSTS_BY_USER_ID_SUCCESS, FIND_POST_BY_POST_ID_FAILURE, FIND_POST_BY_POST_ID_REQUEST, FIND_POST_BY_POST_ID_SUCCESS, GET_ALL_POST_FAILURE, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS } from "./ActionType";


const initialState = {
    posts: [],
    userPosts:[],
    post: null,
    loading: false,
    error: null,
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POST_REQUEST:
        case FIND_POST_BY_POST_ID_REQUEST:
        case FIND_POSTS_BY_USER_ID_REQUEST:
            return { ...state, loading: true, error: null };

        case GET_ALL_POST_SUCCESS:
            return { ...state, loading: false, error: null, posts: action.payload };
        case FIND_POST_BY_POST_ID_SUCCESS:
            return { ...state, loading: false, error: null, post: action.payload };
        case FIND_POSTS_BY_USER_ID_SUCCESS:
            return { ...state, loading: false, error: null, userPosts: action.payload };

        case GET_ALL_POST_FAILURE:
        case FIND_POST_BY_POST_ID_FAILURE:
        case FIND_POSTS_BY_USER_ID_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}