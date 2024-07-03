import { api } from "../../Config/apiConfig";
import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  FIND_POSTS_BY_USER_ID_FAILURE,
  FIND_POSTS_BY_USER_ID_REQUEST,
  FIND_POSTS_BY_USER_ID_SUCCESS,
  FIND_POST_BY_POST_ID_FAILURE,
  FIND_POST_BY_POST_ID_REQUEST,
  FIND_POST_BY_POST_ID_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from "./ActionType";
import { toast } from "react-toastify";

export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_POST_REQUEST });
    const {data} = await api.post(`/api/posts/create`, post);
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    toast.success(data.message);
    return true;
  } catch (error) {
    dispatch({ type: CREATE_POST_FAILURE, payload: error.message });
    toast.error(error.response.data.message);
    return false;
  }
};

export const updatePost = (postId, post) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_POST_REQUEST });
    const { data } = await api.put(`/api/posts/${postId}`, post);
    dispatch({ type: UPDATE_POST_SUCCESS, payload: data });
    toast.success(data.message);
    return true;
  } catch (error) {
    dispatch({ type: UPDATE_POST_FAILURE, payload: error.message });
    toast.error(error.message);
    return false;
  }
};

export const deleteProduct = (postId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_POST_REQUEST });
    const { data } = await api.delete(`/api/posts/${postId}`);
    dispatch({ type: DELETE_POST_SUCCESS, payload: postId }); // in payload sending the productid so that in reducer, it can filter the product with this id
  } catch (error) {
    dispatch({ type: DELETE_POST_FAILURE, payload: error.message });
  }
};

// TO FIND ALL POSTS
export const getAllPosts = (category) => async (dispatch) => {
  dispatch({ type: GET_ALL_POST_REQUEST });
  try {
    const { data } = await api.get(
      `/api/posts/getAll/posts?category=${category}`
    );

    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_POST_FAILURE, payload: error.message });
  }
};

// TO FIND A POST USING POST_ID
export const findPostById = (postId) => async (dispatch) => {
  dispatch({ type: FIND_POST_BY_POST_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/posts/${postId}`);

    dispatch({ type: FIND_POST_BY_POST_ID_SUCCESS, payload: data });
    console.log("Post By Id : ",data);
    return true;
  } catch (error) {
    dispatch({ type: FIND_POST_BY_POST_ID_FAILURE, payload: error.message });
    toast.error(error.message);
    return false;
  }
};

// TO FIND THE POST OF A USER
export const findPostByUserId = () => async (dispatch) => {
  dispatch({ type: FIND_POSTS_BY_USER_ID_REQUEST });
  try {
    const { data } = await api.post(`/api/posts/user`);
    dispatch({ type: FIND_POSTS_BY_USER_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_POSTS_BY_USER_ID_FAILURE, payload: error.message });
  }
};
