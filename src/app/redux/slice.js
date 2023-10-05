const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};

const slice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      //   console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
    removeUser: (state, action) => {
      // console.log(action);

      state.users = state.users.filter((user) => user.id == action.payload.id);
    },
  },
});

export const { loginUser } = slice.actions;
export const { removeUser } = slice.actions;

export default slice.reducer;
