import styles from './Footer.module.scss';
import TelegramIcon from '../../assets/icons/tg.svg';
import { Menu } from '../Menu/Menu';

export const Footer = () => {
  return (
    <div>
      <p className={styles.noxer}>Разработано на платформе Noxer</p>
      <button className={styles.telegramButton}>
        <img src={TelegramIcon} alt={'Telegram'} />
        noxerai_bot
      </button>

      <Menu />
    </div>
  );
};
