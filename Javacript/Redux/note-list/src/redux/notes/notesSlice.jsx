import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        not: [],
        filteredNot: [],
    },
    reducers: {
        addnot: (state, action) => {
            state.not.push(action.payload);
        },
        searchNot: (state, action) => {
            console.log(action.payload);
            const b = state.not.filter(item => {
                const a = item.title.toLowerCase().search(action.payload.toLowerCase())
                if (a !== -1) {
                    const data = { ...item }
                    return data
                }
            })
            state.filteredNot = b;
        },
        empty: (state, action) => {
            state.filteredNot = action.payload;
        },
    },

});

export const { addnot, searchNot, empty, colorChange } = notesSlice.actions;
export default notesSlice.reducer;