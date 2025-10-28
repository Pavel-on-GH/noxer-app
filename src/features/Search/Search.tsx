import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../app/store/products/slice';
import { useAppSelector } from '../../app/redux';
import { selectSearchQuery } from '../../app/store/products/selectors';
import { SearchResult } from '../SearchResult/SearchResult';
import styles from './Search.module.scss';

const searchSuggestions = [
  'футболка',
  'женская кофта',
  'сертификат',
  'куртка',
  'детская футболка',
  'подарочный сертификат',
  'штаны спортивные',
  'сертификат на 1000 рублей',
  'шапка',
  'брелок',
];

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);

  return (
    <div className={styles.search}>
      {!searchQuery && <h2>Часто ищут</h2>}
      {!searchQuery &&
        searchSuggestions.map((suggestion) => (
          <div
            key={suggestion}
            className={styles.searchSuggestion}
            onClick={() => dispatch(setSearchQuery(suggestion))}>
            {suggestion}
          </div>
        ))}
      {searchQuery && <SearchResult />}
    </div>
  );
};
