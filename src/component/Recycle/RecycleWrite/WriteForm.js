import React, { useState, useEffect } from 'react';
import styles from './RecycleWriteForm.module.css'; // CSS 모듈 파일 임포트
import { getNextMenuCode } from '../../../apis/MenuAPI';

function WriteForm({ onPostSubmit, categoryName }) {
    // 초기 state 설정
    const [menuData, setMenuData] = useState({
        menuCode: getNextMenuCode(), 
        menuName: '', 
        categoryName: categoryName, 
        detail: {
            description: '', 
            image: '' 
        }
    });

    useEffect(() => {
        let imagePath = '';
        switch (categoryName) {
            case '플라스틱':
                imagePath = '/recycleImages/plastic.png';  // 예시 이미지, 실제 사용 시 적절한 이미지 경로로 변경 필요
                console.log(imagePath);
                break;
            case '일반':
                imagePath = '/recycleImages/normal.png';  // 예시 이미지, 실제 사용 시 적절한 이미지 경로로 변경 필요
                console.log(imagePath);
                break;
            case '종이':
                imagePath = '/recycleImages/paper.png';  // 예시 이미지, 실제 사용 시 적절한 이미지 경로로 변경 필요
                console.log(imagePath);
                break;
            case '기타':
                imagePath = '/recycleImages/etc.png';  // 예시 이미지, 실제 사용 시 적절한 이미지 경로로 변경 필요
                console.log(imagePath);
                break;
            default:
                imagePath = '/logo.png';  // 기본 이미지 경로
                console.log(imagePath);
        }

        setMenuData(prevData => ({
            ...prevData,
            detail: {
                ...prevData.detail,
                image: imagePath
            }
        }));
    }, [categoryName]);
    // 입력값 처리하는 함수
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

export default WriteForm;