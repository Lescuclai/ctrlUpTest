import produce from "immer";

import * as types from "../../config/types";

const initialState = {
  projects: [],
  member: "",
  selectedTag: null,
};

const connection = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.HANDLE_MEMBER_SELECTION:
        draft.member = action.payload;
        break;

      case types.HANDLE_MEMBER_SELECTION_IN_HEADER:
        draft.member = action.payload;
        break;

      case types.SET_SELECTED_TAG:
        draft.selectedTag = action.payload;
        break;

      case types.HANDLE_SUBMIT_FOR_PROJECT:
        draft.projects = [
          ...state.projects,
          {
            userName: state.member,
            formData: action.payload,
          },
        ];
        break;

      default:
        break;
    }
  });

export default connection;
