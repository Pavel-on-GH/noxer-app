import { RootState } from '../index';

export const selectIsSearching = (state: RootState) => state.ui.isSearching;
