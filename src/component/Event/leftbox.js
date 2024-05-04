import React from "react";
import styles from './leftbox.module.css'; // 확장자 .module.css 사용

const Leftbox = () => {
    return (
        <div className={styles.box}>
            <div className={styles.check}></div> {/* styles 객체에서 클래스 이름 가져오기 */}
            <div className={styles.promise}></div> {/* styles 객체에서 클래스 이름 가져오기 */}
            <span className={styles.day}>
                4월 5일 식목일
                4월 22일 지구의 날
                6월5일 환경의 날
            </span>
            <div className={styles.a}></div> {/* styles 객체에서 클래스 이름 가져오기 */}
            <span className={styles.b}>
                1. 종이컵 안 쓰기
                2. 텀블러 사용하기
                3. 손수건 사용하기
                4. 화장지 1칸 덜 쓰기
                5. 양면 출력하기
                6. 이면지 재활용하기
                7. 종이류 분리배출 잘하기
            </span>
        </div>
    );
};

export default Leftbox;
