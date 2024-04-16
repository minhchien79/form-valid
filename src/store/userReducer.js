import * as ActionType from "./constant";

const initialState = {
  listUsers: [
    {
      maSV: 1,
      hoTen: "Nguyen Van A",
      soDienThoai: "123456789",
      email: "vana@gmail.com",
    },
    {
      maSV: 2,
      hoTen: "Nguyen Van B",
      soDienThoai: "123456789",
      email: "vanb@gmail.com",
    },
  ],
  keyword: "",
  editUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.DELETE_USER:
      const updatedListUsers = state.listUsers.filter(
        (user) => user.maSV !== action.payload
      );
      return { ...state, listUsers: updatedListUsers };

    case ActionType.KEYWORD_USER:
      return { ...state, keyword: action.payload };

      case ActionType.SUBMIT_USER: {
        const user = action.payload;
        const listUsersClone = [...state.listUsers];
        if (user.id) {
          // UPDATE
          const index = listUsersClone.findIndex((item) => item.maSV === user.maSV);
          if (index !== -1) {
            listUsersClone[index] = user;
          }
        } else {
          //ADD
          const date = new Date();
          // clone user
          const userNew = { ...user, maSV: date.getTime() };
          listUsersClone.push(userNew);
        }
  
        state.listUsers = listUsersClone;
        return { ...state };
      }

    case ActionType.EDIT_USER:
      return { ...state, editUser: action.payload };

    default:
      return {...state};
  }
};

export default userReducer;
