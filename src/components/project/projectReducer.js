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
      case types.SELECT_MEMBER:
        draft.member = action.payload;
        break;

      case types.HEADER_MEMBER_SELECTION:
        draft.member = action.payload;
        break;

      case types.SELECT_TAG:
        draft.selectedTag = action.payload;
        break;

      case types.SUBMIT_FORM:
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
