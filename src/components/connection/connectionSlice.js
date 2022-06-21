import produce from "immer";
import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "connection",
  initialState: {
    user: {
      name: "",
      formErrorMessage: "",
      isFormSent: false,
      isRegistered: null,
    },
    data: null,
    error: null,
  },
  reducers: {
    submitForConnection: (state, action) => {
      return produce(state, (draft) => {
        draft.user = {
          name: action.payload.name,
          isRegistered: action.payload.isRegistered,
          formErrorMessage: action.payload.formErrorMessage,
          isFormSent: action.payload.isFormSent,
        };
      });
    },
    changeForConnection: (state, action) => {
      return produce(state, (draft) => {
        draft.user.name = action.payload;
        if (draft.user.name === "") {
          draft.user.formErrorMessage = "";
          draft.user.isFormSent = false;
        }
      });
    },
    resolvedApiData: (state, action) => {
      return produce(state, (draft) => {
        draft.data = action.payload;
      });
    },
    rejectedApiData: (state, action) => {
      return produce(state, (draft) => {
        draft.error = action.payload;
        draft.data = null;
      });
    },
  },
});

export const {
  rejectedApiData,
  resolvedApiData,
  changeForConnection,
  submitForConnection,
} = actions;

export default reducer;
