import produce from "immer";
import {
  freelancesResolved,
  freelancesFetching,
  freelancesRejected,
} from "./connectionAction";

import * as types from "../../config/types";

const initialState = {
  user: {
    name: "",
    formErrorMessage: "",
    isFormSent: false,
    isRegistered: null,
  },
  status: "void",
  data: null,
  error: null,
};

// cette fonction est une action asynchrone
// elle attend le store redux en paramètre
export async function fetchOrUpdateApiData(store) {
  const { status } = store.getState();
  // si la requête est déjà en cours on ne la relance pas
  if (status === "pending" || status === "updating") {
    return;
  }
  // ici on indique que la requête est en cours
  store.dispatch(freelancesFetching());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    store.dispatch(freelancesResolved(data));
  } catch (error) {
    store.dispatch(freelancesRejected(error));
  }
}

const connection = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CHANGE_FOR_CONNECTION:
        draft.user.name = action.payload;
        if (draft.user.name === "") {
          draft.user.formErrorMessage = "";
          draft.user.isFormSent = false;
        }
        break;

      case types.SUBMIT_FOR_CONNECTION:
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

      case types.FETCHING:
        console.log("fetch");
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
        break;

      case types.RESOLVED:
        if (draft.status === "pending" || draft.status === "updating") {
          draft.data = action.payload;
          draft.status = "resolved";
        }

        break;

      case types.REJECTED:
        if (draft.status === "pending" || draft.status === "updating") {
          draft.status = "rejected";
          draft.error = action.payload;
          draft.data = null;
        }
        break;

      default:
        break;
    }
  });

export default connection;
