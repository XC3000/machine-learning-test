import { createSlice } from "@reduxjs/toolkit";
import { BOARDS } from "../../data/task";

const initialState = {
  count: 0,
  searchText: "",
  1: [],
  2: [],
  3: [],
  4: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    shiftTask: (state, action) => {
      const { boardId, task, shiftDirection } = action.payload;
      const newBoardId = boardId + shiftDirection;

      // Checking for out of bound conditions
      if (newBoardId === 0 || newBoardId > BOARDS.length) return;

      // task removed from current board
      const updatedFromBoardTaks = state[boardId].filter(
        (t) => t.id !== task.id
      );
      state[boardId] = updatedFromBoardTaks;

      let tasks = [...state[newBoardId]];
      // Adding the task to the new Board
      tasks = [...tasks, task];

      tasks.sort((a, b) => a.id - b.id);

      state[newBoardId] = tasks;
    },

    addTask: (state, action) => {
      const newCount = ++state.count;
      const newTask = {
        id: newCount,
        content: action.payload.content,
      };

      let tasks = [...state[1]];
      tasks = [...tasks, newTask];
      state[1] = tasks;
    },

    deleteTask: (state, action) => {
      // const newCount = --state.count;
      const { boardId, task } = action.payload;
      let tasks = [...state[boardId]];
      const updatedTasks = tasks.filter((t) => t.id !== task.id);

      state[boardId] = updatedTasks;
      // state.count = newCount;
    },

    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { shiftTask, addTask, deleteTask, setSearchText } =
  taskSlice.actions;

export default taskSlice.reducer;
