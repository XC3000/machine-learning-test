import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import taskReducer from "../features/task/taskSlice";
import modalReducer from "../features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    modal: modalReducer,
  },
});
