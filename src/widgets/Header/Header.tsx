import MoreIcon from '../../assets/icons/more.svg';
import BackIcon from '../../assets/icons/back.svg';
import CloseIcon from '../../assets/icons/close.svg';
import TelegramIcon from '../../assets/icons/icon_tg.svg';
import ChevronIcon from '../../assets/icons/chevron.svg';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../app/redux';
import { setIsSearching } from '../../app/store/ui/slice';
import { selectIsSearching } from '../../app/store/ui/selectors';
import { selectSearchQuery } from '../../app/store/products/selectors';
import { setSearchQuery } from '../../app/store/products/slice';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSearching = useAppSelector(selectIsSearching);
  const searchQuery = useAppSelector(selectSearchQuery);

  const handleFocus = () => dispatch(setIsSearching(true));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearchQuery(e.target.value));
  const handleClose = () => isSearching && dispatch(setIsSearching(false));

  const closeButtonIcon = isSearching ? BackIcon : CloseIcon;
  const closeButtonLabel = isSearching ? 'Назад' : '';

  return (
    <>
      <div className={styles.row}>
        <button
          type="button"
          className={clsx(styles.closeButton, styles.button)}
          onClick={handleClose}>
          <img src={closeButtonIcon} alt={closeButtonLabel} className={styles.closeImage} />
          {closeButtonLabel}
        </button>

        <button type="button" className={clsx(styles.telegramButton, styles.button)}>
          <img src={TelegramIcon} alt="Telegram" className={styles.telegramImage} />
          наш tg-канал
        </button>

        <button type="button" className={clsx(styles.optionsButton, styles.button)}>
          <img src={ChevronIcon} alt="options" className={styles.chevronImage} />
          <img src={MoreIcon} alt="more" />
        </button>
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          onFocus={handleFocus}
          className={styles.searchInput}
          placeholder="Найти товары"
        />
      </div>
    </>
  );
};
