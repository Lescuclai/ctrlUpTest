import * as types from "../../config/types";

export const headerMemberSelection = (payload) => ({
  type: types.HEADER_MEMBER_SELECTION,
  payload,
});
