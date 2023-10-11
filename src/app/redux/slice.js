const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  user: [],
};

const slice = createSlice({
  name: "loginUser",
  initialState,

  reducers: {
    loginUser: (state, action) => {
      //   console.log(action);
      const data1 = {
        name: action.payload,
      };
      state.user.push(data1);
    },
    removeUser: (state, action) => {
      // console.log(action);
      state.user = state.user.filter((user) => user == action.payload);
    },
  },
});

export const { loginUser, removeUser } = slice.actions;

export default slice.reducer;
