import produce from "immer";

import * as types from "../../config/types";

const initialState = {
  user: {
    name: "",
    formErrorMessage: "",
    isFormSent: false,
    isRegistered: null,
  },
  apiData: [],
};

const connection = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.HANDLE_CHANGE:
        draft.user = { name: action.payload };
        break;

      case types.HANDLE_SUBMIT:
        draft.user = {
          name: action.payload.name,
          isRegistered: action.payload.isRegistered,
          formErrorMessage: action.payload.formErrorMessage,
          isFormSent: action.payload.isFormSent,
        };
        break;

      case types.SAVE_API_DATA:
        draft.apiData = action.payload;
        break;

      default:
        break;
    }
  });

export default connection;
