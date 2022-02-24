import { POEMS_REQUEST, POEMS_SUCCESS, POEMS_FAILED } from "./actionsTypes";
import axios from "axios";
export const fetchPoemsReq = () => {
  return {
    type: POEMS_REQUEST,
  };
};
export const fetchPoemsSucceed = (poems) => {
  return {
    type: POEMS_SUCCESS,
    poems,
  };
};
export const fetchPoemsFaild = (error) => {
  return {
    type: POEMS_FAILED,
    error,
  };
};

export const fetchPoemsaction = () => {
  return (dispatch) => {
    dispatch(fetchPoemsReq);

    axios
      .get("https://poetrydb.org/random/20")
      .then((res) => {
        const poems = res.data;
        dispatch(fetchPoemsSucceed(poems));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPoemsFaild(errorMsg));
      });
  };
};
