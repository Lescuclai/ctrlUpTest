import * as types from "../../config/types";

export const selectMember = (payload) => ({
  type: types.SELECT_MEMBER,
  payload,
});
