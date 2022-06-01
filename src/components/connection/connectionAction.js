import * as types from "../../config/types";

export const changeValue = (payload) => ({
  type: types.CHANGE_FOR_CONNECTION,
  payload: payload,
});

export const submitData = (payload) => ({
  type: types.SUBMIT_FOR_CONNECTION,
  payload: payload,
});

export const saveApiData = (payload) => ({
  type: types.SAVE_API_DATA,
  payload: payload,
});
