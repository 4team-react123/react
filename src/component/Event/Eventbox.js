import React from 'react';
import styles from './Eventbox.module.css'; // CSS 모듈 import

const Eventbox = ({ year, text, explain}) => {
  return (
    <div className={styles.container}>
      <div className={styles.boxContent}>
        <div className={styles.year}>
          {year}
        </div>
        <a className={styles.textCenter}>{text}</a>
        <p className={styles.textCenter}>{explain}</p>
      </div>
    </div>
  );
};

export default Eventbox;
