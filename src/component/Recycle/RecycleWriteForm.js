import React, { useState } from 'react';
import styles from './RecycleWriteForm.module.css'; // CSS 모듈 파일 임포트
import { getNextMenuCode } from '../../apis/MenuAPI'; // MenuAPI에서 getNextMenuCode 함수 임포트

function RecycleWriteForm({ onPostSubmit }) {
    const [menuData, setMenuData] = useState({
        menuCode: getNextMenuCode(), // 새로운 메뉴의 menuCode 설정
        menuName: '',
        categoryName: '일반', // 기본값은 '일반'으로 설정
        detail: {
            description: '',
            image: '/recycleImages/1.png' // 이미지 경로 설정
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMenuData({
            ...menuData,
            [name]: value
        });
    };

    const submitPost = () => {
        // 부모 컴포넌트로 데이터 전달
        onPostSubmit(menuData);
        alert('Post submitted!'); // 제출 알림
        console.log(menuData);
    };

    return (
        <form id="writeForm">
            <table>
                <tbody>
                    <tr>
                        <td><h2>글쓰기</h2></td>
                    </tr>
                    <tr>
                        <td className={styles.description}>메뉴 이름</td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type="text" 
                                placeholder="메뉴 이름을 입력하세요" 
                                name="menuName" 
                                value={menuData.menuName} 
                                onChange={handleInputChange} 
                                className={styles.input}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.description}>카테고리 선택</td>
                    </tr>
                    <tr>
                        <td>
                            <select 
                                name="categoryName" 
                                value={menuData.categoryName} 
                                onChange={handleInputChange} 
                                className={styles.input}
                            >
                                <option value="일반">일반</option>
                                <option value="종이">종이</option>
                                <option value="플라스틱">플라스틱</option>
                                <option value="음식물">음식물</option>
                                <option value="기타">기타</option>
                            </select>
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
                                onChange={(e) => handleInputChange({ target: { name: 'detail', value: { ...menuData.detail, description: e.target.value } } })}
                                className={styles.textarea}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type="button" 
                                value="등록" 
                                className={styles.but} 
                                onClick={submitPost}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecycleWriteForm;
