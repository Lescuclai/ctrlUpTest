import * as types from "../../config/types";

export const submitForm = (payload) => ({
  type: types.SUBMIT_FORM,
  payload,
});

export const selectTag = (payload) => ({
  type: types.SELECT_TAG,
  payload,
});
