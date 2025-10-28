import { RootState } from '../../store/index';

export const selectSearchQuery = (state: RootState) => state.products.searchQuery;
