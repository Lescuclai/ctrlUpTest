import produce from "immer";
import { createSlice } from "@reduxjs/toolkit";

// cette fonction est une action asynchrone
// elle attend le store redux en paramètre
export async function fetchOrUpdateApiData(store) {
  const { status } = store.getState();
  // si la requête est déjà en cours on ne la relance pas
  if (status === "pending" || status === "updating") {
    return;
  }
  // ici on indique que la requête est en cours
  store.dispatch(fetchApiData());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    store.dispatch(resolvedApiData(data));
  } catch (error) {
    store.dispatch(rejectedApiData(error));
  }
}

const { actions, reducer } = createSlice({
  // le nom du slice
  name: "connection",
  // le state initial

  initialState: {
    user: {
      name: "",
      formErrorMessage: "",
      isFormSent: false,
      isRegistered: null,
    },
    status: "void",
    data: null,
    error: null,
  },
  // reducers permet de définir les actions et le reducer
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
    fetchApiData: (state, action) => {
      return produce(state, (draft) => {
        switch (draft.status) {
          case "void":
            draft.status = "pending";
            break;

          case "rejected":
            draft.error = null;
            draft.status = "pending";
            break;

          case "resolved":
            draft.status = "updating";
            break;

          default:
            break;
        }
      });
    },
    resolvedApiData: (state, action) => {
      return produce(state, (draft) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
        }
      });
    },
    rejectedApiData: (state, action) => {
      return produce(state, (draft) => {
        if (draft.status === "pending" || draft.status === "updating") {
          draft.status = "rejected";
          draft.error = action.payload;
          draft.data = null;
        }
      });
    },
  },
});

export const {
  rejectedApiData,
  resolvedApiData,
  fetchApiData,
  changeForConnection,
  submitForConnection,
} = actions;

export default reducer;
