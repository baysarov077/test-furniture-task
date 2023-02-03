import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sofasSlice = createSlice({
  name: "sofas",
  initialState: {
    sofas: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSofas.fulfilled.type, (state, action) => {
      state.sofas = action.payload;
    });
  },
});

export const getSofas = createAsyncThunk("sofas/get", async (_, thunkApi) => {
  try {
    const response = await axios.get("http://localhost:4000/data");
    return thunkApi.fulfillWithValue(response.data);
  } catch (error) {
    console.log(error.toString());
  }
});

export default sofasSlice.reducer;
