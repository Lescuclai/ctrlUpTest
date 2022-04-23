import * as types from "../../config/types";

export const handleSubmit = (payload) => ({
  type: types.HANDLE_SUBMIT_FOR_PROJECT,
  payload,
});

export const setSelectedTag = (payload) => ({
  type: types.SET_SELECTED_TAG,
  payload,
});
