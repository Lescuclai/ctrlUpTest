import * as types from "../../config/types";

export const handleChange = (payload) => ({
  type: types.HANDLE_CHANGE,
  payload: payload,
});

export const handleSubmit = (payload) => ({
  type: types.HANDLE_SUBMIT,
  payload: payload,
});
