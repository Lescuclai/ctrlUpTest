import * as types from "../../config/types";

export const handleMemberSelection = (payload) => ({
  type: types.HANDLE_MEMBER_SELECTION_IN_HEADER,
  payload,
});
