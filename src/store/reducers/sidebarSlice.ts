import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  status: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    sidebarToggle: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

export default sidebarSlice;
