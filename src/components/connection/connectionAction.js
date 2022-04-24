import * as types from "../../config/types";

export const handleChange = (payload) => ({
  type: types.HANDLE_CHANGE_FOR_CONNECTION,
  payload: payload,
});

export const handleSubmit = (payload) => ({
  type: types.HANDLE_SUBMIT,
  payload: payload,
});

export const saveApiData = (payload) => ({
  type: types.SAVE_API_DATA,
  payload: payload,
});
