import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Main.module.css'; 
import Header from './Nav';


function Main() {
    const navigate = useNavigate();

    const recycleHandleClick = () => {
      navigate('/nomal');
    };
      const EventHandleClick = () => {
        navigate('/event');
      };
    const OrgHandleClick = () => {
        navigate('/organization');
    }
    return (
        <main className={styles.v4_7987}>
            
            <Header />
            
            
            <div className={styles.v4_7990}></div>
            <div className={styles.v4_7993}>
            <img src="/images/plant1.png" alt="Plant" className={styles.plantImage}/>
                <div className={styles.v4_7994}></div>
            </div>
            <section className={styles.v4_7998}>
                <span className={styles.v4_7999}>예그리나</span>
                <span className={styles.v4_8000}> 제로웨이스트 실천을위해</span>
            </section>
            <section className={styles.v4_8001}>
                <span className={styles.v4_8008}>예그리나,</span>
                <span className={styles.v4_8009}>환경문제, 우리만의 것이 아니다.</span>
                <span className={styles.v4_8023}>지구를 위한 첫걸음<br/>예그리나 할까요?</span>
                <div className={styles.v4_8013}></div>
                <article>
                    <span className={styles.v4_8014}>재활용</span>
                    <span className={styles.v4_8015}>지구를 위한다면 재활용부터</span>
                    <button className={styles.r_button} onClick={recycleHandleClick} >recycle</button>
                </article>
                <article>
                    <div className={styles.v4_8021}></div>
                    <span className={styles.v4_8025}>Event</span>
                    <span className={styles.v4_8019}>환경을 위하는, 당신만의.</span>
                    <div className={styles.v4_8022}></div>
                    <button className={styles.e_button} onClick={EventHandleClick}>Event</button>
                </article>
            </section>
            <section>
                <div className={styles.v4_8002}></div>
                <div className={styles.v4_7988}></div>
                <span className={styles.v4_8024}>기업</span>
                <button className={styles.c_button} onClick={OrgHandleClick}>더보기</button>
                <span className={styles.v4_8026}>친환경을 선두하는.</span>
            </section>

        </main>
    );
}

export default Main;
