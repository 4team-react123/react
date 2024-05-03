import React from 'react';
import styles from './Main.module.css'; 
import Header from '../component/Nav';


function Main() {
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
                <span className={styles.v4_8000}>사랑으로 행복을 전하는,</span>
            </section>
            <section className={styles.v4_8001}>
                <span className={styles.v4_8008}>예그리나,</span>
                <span className={styles.v4_8009}>환경문제, 우리만의 것이 아니다.</span>
                <span className={styles.v4_8023}>지구를 위한 첫걸음<br/>예그리나 할까요?</span>
                <div className={styles.v4_8013}></div>
                <article>
                    <span className={styles.v4_8014}>재활용</span>
                    <span className={styles.v4_8015}>지구를 위한다면 재활용부터</span>
                    <button className={styles.v4_8016}>recycle</button>
                </article>
                <article>
                    <div className={styles.v4_8021}></div>
                    <span className={styles.v4_8025}>Event</span>
                    <span className={styles.v4_8019}>환경을 위하는, 당신만의.</span>
                    <div className={styles.v4_8022}></div>
                    <button className={styles.e_button}>Event</button>
                </article>
            </section>
            <section>
                <div className={styles.v4_8002}></div>
                <div className={styles.v4_7988}></div>
                <span className={styles.v4_8024}>기업</span>
                <button className={styles.c_button}>더보기</button>
                <span className={styles.v4_8026}>친환경을 선두하는.</span>
            </section>
            <footer className={styles.footer}>
                <div className={styles.f_yegrina}>
                    <img src=".../../images/logo.png" alt="Yegrina Logo"/>
                    <p>Yegrina</p>
                </div>
                <div className={styles.f_contect}>
                    <span className={styles.main_link}>Main</span>
                    <span className={styles.contect_link}>Contect</span>
                </div>
            </footer>
        </main>
    );
}

export default Main;
