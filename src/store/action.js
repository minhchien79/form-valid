import { DELETE_USER, EDIT_USER, KEYWORD_USER, SUBMIT_USER } from "./constant";

const actDeleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

const actEditUser = (user) => ({
  type: EDIT_USER,
  payload: user,
});

const actSearch = (keyword) => ({
  type: KEYWORD_USER,
  payload: keyword,
});

const actSubmitUser = (user) => ({
  type: SUBMIT_USER,
  payload: user,
});

export { actDeleteUser, actEditUser, actSearch, actSubmitUser };
