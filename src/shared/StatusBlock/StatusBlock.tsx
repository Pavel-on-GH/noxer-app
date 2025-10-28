import React from 'react';
import styles from './StatusBlock.module.scss';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface StatusBlockProps {
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError;
  onRetry?: () => void;
}

export const StatusBlock: React.FC<StatusBlockProps> = ({ isLoading, error, onRetry }) => {
  if (isLoading) {
    return <div className={styles.statusBlock}>Загрузка...</div>;
  }

  if (error) {
    const errorMessage = 'status' in error ? `Ошибка: ${error.status}` : 'Произошла ошибка';

    return (
      <div className={styles.statusBlock}>
        <p className={styles.error}>{errorMessage}</p>
        {onRetry && (
          <button onClick={onRetry} className={styles.retryButton}>
            Попробовать снова
          </button>
        )}
      </div>
    );
  }

  return null;
};
