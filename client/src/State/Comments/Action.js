import { api } from "../../Config/apiConfig";
import { toast } from "react-toastify";
import { CREATE_COMMENT_FAILURE, CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, FIND_COMMENT_BY_POST_ID_FAILURE, FIND_COMMENT_BY_POST_ID_REQUEST, FIND_COMMENT_BY_POST_ID_SUCCESS, UPDATE_COMMENT_FAILURE, UPDATE_COMMENT_REQUEST, UPDATE_COMMENT_SUCCESS } from "./ActionType";

export const createComment = (commentData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_COMMENT_REQUEST });
        const { data } = await api.post(`/api/comments/create`, commentData);
        dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
        // toast.success(data.message);
        // return true;
    } catch (error) {
        dispatch({ type: CREATE_COMMENT_FAILURE, payload: error.message });
        // toast.error(error.response.data.message);
        // return false;
    }
};

export const updateComment = (commentId, comment) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_COMMENT_REQUEST });
        const { data } = await api.put(`/api/comments/${commentId}`, comment);
        dispatch({ type: UPDATE_COMMENT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_COMMENT_FAILURE, payload: error.message });
    }
};

export const deleteComment = (commentId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_COMMENT_REQUEST });
        const { data } = await api.delete(`/api/comments/delete/${commentId}`);
        dispatch({ type: DELETE_COMMENT_SUCCESS, payload: commentId }); // in payload sending the productid so that in reducer, it can filter the product with this id
    } catch (error) {
        dispatch({ type: DELETE_COMMENT_FAILURE, payload: error.message });
    }
};


export const findCommentByPostId = (postId) => async (dispatch) => {
    try {
        dispatch({ type: FIND_COMMENT_BY_POST_ID_REQUEST });
        const { data } = await api.get(`/api/comments/post/${postId}`);
        dispatch({ type: FIND_COMMENT_BY_POST_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_COMMENT_BY_POST_ID_FAILURE, payload: error.message });
    }
};