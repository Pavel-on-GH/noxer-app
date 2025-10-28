import { Slider } from '../../features/Slider/Slider';
import { CategoryFilters } from '../../entities/CategoryFilters/CategoryFilters';
import { Products } from '../../entities/Products/Products';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <CategoryFilters />
      <Products />
    </div>
  );
};
