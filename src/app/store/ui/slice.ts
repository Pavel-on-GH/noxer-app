import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UIState {
  isSearching: boolean;
}

const initialState: UIState = {
  isSearching: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
  },
});

export const {setIsSearching} = uiSlice.actions;

export default uiSlice.reducer;