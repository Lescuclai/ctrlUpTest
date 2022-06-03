import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const { actions, reducer } = createSlice({
  // le nom du slice
  name: "project",
  // le state initial

  initialState: { projects: [], member: "", selectedTag: null },
  // reducers permet de définir les actions et le reducer
  reducers: {
    submitForm: (state, action) => {
      return produce(state, (draft) => {
        draft.projects = [
          ...state.projects,
          {
            userName: state.member,
            formData: action.payload,
          },
        ];
      });
    },
    selectMember: (state, action) => {
      return produce(state, (draft) => {
        draft.member = action.payload;
      });
    },
    headerMemberSelection: (state, action) => {
      return produce(state, (draft) => {
        draft.member = action.payload;
      });
    },
    selectTag: (state, action) => {
      return produce(state, (draft) => {
        draft.selectedTag = action.payload;
      });
    },
  },
});

// on export chaque action individuellement
export const { submitForm, selectMember, headerMemberSelection, selectTag } =
  actions;
// on export le reducer comme default export
export default reducer;
