import styles from './CategoryFilters.module.scss';
import Filter1Image from '../../assets/images/filter_1.jpg';
import Filter2Image from '../../assets/images/filter_2.jpg';
import Filter3Image from '../../assets/images/filter_3.jpg';
import Filter4Image from '../../assets/images/filter_4.jpg';
import Filter5Image from '../../assets/images/filter_5.jpg';

const filters = [
  {
    image: Filter1Image,
    title: 'Аксессуары',
    id: 1,
  },
  {
    image: Filter2Image,
    title: 'Штаны',
    id: 2,
  },
  {
    image: Filter3Image,
    title: 'Толстовки',
    id: 3,
  },
  {
    image: Filter4Image,
    title: 'Куртки',
    id: 4,
  },
  {
    image: Filter5Image,
    title: 'Футболки',
    id: 5,
  },
];

export const CategoryFilters = () => {
  return (
    <div className={styles.filters}>
      {filters.map((item) => (
        <div key={item.id} className={styles.filter}>
          <img src={item.image} alt={'item.title'} className={styles.filterImage} />
          <p className={styles.filterTitle}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
