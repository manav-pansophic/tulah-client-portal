import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
  },
};

const guestSlice = createSlice({
  name: "guestUserData",
  initialState,
  reducers: {
    setGuestUserData(state, action) {
      console.log({ action: action.payload});
      state.user = action.payload
    },
  },
});

export const { setGuestUserData } = guestSlice.actions;
export default guestSlice.reducer;
