import React from 'react';
import styles from '../Event/Eventcontent.module.css'; // CSS 모듈 import

const Eventcontent = ({text ,coment}) => {
  return (
    <div className={styles['box-container']}> 
      <div className={styles['text-container']}> 
        <div className={styles['co']}>{text}
        <p>{coment}</p>
        </div>
      </div>
    </div>
  );
};

export default Eventcontent;
