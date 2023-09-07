import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("slider/getData", async (page) => {
  const response = await axios.get("https://fakestoreapi.com/products/" + page);
  return response.data;
});

export const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    page: 1,
    isLoading: true,
    product: {},
  },
  reducers: {
    incrementSlider: function(state){
      state.page = state.page + 1
    },
    decrementSlider: function(state){
      state.page = state.page - 1
    }
  },
  extraReducers: {
    [getData.pending]: function (state, action) {      
      state.isLoading = false;
    },
    [getData.fulfilled]: function (state, action) {
      
      state.isLoading = true;
      state.product = action.payload;
    },
    [getData.rejected]: function (state) {
      state.isLoading = false;
    },
  },
});
export const {incrementSlider, decrementSlider} = sliderSlice.actions;

export default sliderSlice.reducer;
