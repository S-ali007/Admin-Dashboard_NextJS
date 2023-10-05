const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
  users: [],
};

const slice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
    },
  },
});

export const { loginUser } = slice.actions;
export default slice.reducer;
