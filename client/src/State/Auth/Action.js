import { API_BASE_URL } from "../../Config/apiConfig.js";
import axios from "axios";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType.js";

const token = localStorage.getItem("jwt");

export const register = (userData) => async (dispatch) => { 
    dispatch({ type: REGISTER_REQUEST })
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/register`, userData);
        const user = response.data;
        if (user.token) {
            localStorage.setItem("jwt", user.token);
        }
        dispatch({ type: REGISTER_SUCCESS, payload: user.token })
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error.message })
    }
}


export const login = (userData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, userData);
        const user = response.data;
        if (user.token) {
            localStorage.setItem("jwt", user.token);
        }
        dispatch({ type: LOGIN_SUCCESS, payload: user.token })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message })
    }
}


export const getUser = (jwt) => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/decoded/token`, {
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        });
        const user = response.data.user;
        dispatch({ type: GET_USER_SUCCESS, payload: user })
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error.message })
    }
}


export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT, payload: null });
    localStorage.clear();
}