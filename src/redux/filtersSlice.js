import { createSlice } from '@reduxjs/toolkit';

export const selectNameFilter = state => state.filters.filterName;

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
