import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacters = createAsyncThunk(
  "characters/getCharacters",
  async () => {
    const response = await fetch("https://breakingbadapi.com/api/characters/?limit=10&offset=10");
    const data = await response.json();
    return data;
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
  },
  reducers: {
  },
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = action.payload;
    }
  }
});


export default charactersSlice.reducer;

