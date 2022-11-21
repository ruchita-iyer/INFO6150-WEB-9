import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../constants/constants";

export const login = (email, password) => async (dispatch) => {
    const token = sessionStorage.getItem('token')
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const config = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.post(
            "/api/users/login",
            { email, password },
            config
          );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } 
  
  catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};