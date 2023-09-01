import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: null, age: null },
  reducers: {
    addUserName(state, action) {
        state.name = action.payload
        // console.log(action.payload);
        // state.age = action.payload.age
    },
    addUserAge(state, action) {
        state.age = action.payload
        // state.age = action.payload.age
    },
  },
});

export default userSlice.reducer;
export const { addUserName, addUserAge } = userSlice.actions;
