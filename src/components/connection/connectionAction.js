import * as types from "../../config/types";

export const freelancesFetching = () => ({ type: types.FETCHING });
export const freelancesResolved = (data) => ({
  type: types.RESOLVED,
  payload: data,
});
export const freelancesRejected = (error) => ({
  type: types.REJECTED,
  payload: error,
});

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
