import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filters',
  initialState: {
    filterName: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filterName = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
