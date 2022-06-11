import { createSlice } from "@reduxjs/toolkit";
export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        text: "Learn React",
        completed: false,
      },
      {
        id: 2,
        text: "Learn Redux",
        completed: false,
      },
      {
        id: 3,
        text: "Have a life!",
        completed: false,
      },
      
    ],
    activeFilter : "all",
  },
  reducers: {
    addTodo : (state, action) => {
      state.items.push(action.payload);
    },
    toggle : (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      item.completed = !item.completed;
    },
    destroy : (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter(item => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter : (state, action) => {
      console.log('here');
      state.activeFilter = action.payload;
    },
  },
});

export const { addTodo, toggle, destroy, changeActiveFilter} = todosSlice.actions;
export default todosSlice.reducer;
