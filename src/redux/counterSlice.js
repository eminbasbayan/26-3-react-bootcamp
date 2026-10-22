import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    arttir: (state, action) => {
      console.log(action);

      state.count += action.payload.deger;
    },
    azalt: (state, action) => {
      state.count -= action.payload.deger;
    },
  },
});

export const { arttir, azalt } = counterSlice.actions;

export default counterSlice;
