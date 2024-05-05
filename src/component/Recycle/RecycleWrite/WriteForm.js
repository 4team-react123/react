import React, { useState } from 'react';
import styles from './RecycleWriteForm.module.css'; // CSS 모듈 파일 임포트
import { getNextMenuCode } from '../../../apis/MenuAPI';

function EtcWriteForm({ onPostSubmit, categoryName }) {
    // 초기 state 설정
    const [menuData, setMenuData] = useState({
        menuCode: getNextMenuCode(), // 자동으로 다음 메뉴 코드 할당
        menuName: '', // 사용자 입력을 받음
        categoryName: categoryName, 
        detail: {
            description: '', // 사용자 입력을 받음
            image: '/recycleImages/4.png' // 고정 이미지
        }
    });

    // 입력 필드 변경 처리 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'description') {
            setMenuData({
                ...menuData,
                detail: { ...menuData.detail, description: value }
            });
        } else {
            setMenuData({
                ...menuData,
                [name]: value
            });
        }
    };

    // 제출 처리 함수
    const submitPost = () => {
        onPostSubmit(menuData); // 작성된 내용을 부모 컴포넌트로 전달
        alert('Post submitted!');

        window.location.reload();
    };

    return (
        <form id="writeForm">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>글쓰기</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.description}>분리수거 항목명을 입력하세요</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="항목명을 입력하세요"
                                name="menuName"
                                value={menuData.menuName}
                                onChange={handleInputChange}
                                className={styles.input}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.description}>내용</td>
                    </tr>
                    <tr>
                        <td>
                            <textarea
                                placeholder="분리수거 방법을 입력해주세요."
                                name="description"
                                value={menuData.detail.description}
                                onChange={handleInputChange}
                                className={styles.textarea}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" className={styles.but} onClick={submitPost}>
                                등록
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default EtcWriteForm;
