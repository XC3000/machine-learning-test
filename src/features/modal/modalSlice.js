import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddTaskModalModalVisible: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleAddTaskModal: (state) => {
      state.isAddTaskModalModalVisible = !state.isAddTaskModalModalVisible;
    },
  },
});

export const { toggleAddTaskModal } = modalSlice.actions;

export default modalSlice.reducer;
