import React, { useState } from 'react';
import styles from './WriteForm.module.css'; // CSS 모듈 파일 임포트

function WriteForm() {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDetailChange = (e) => {
        setDetail(e.target.value);
    };

    const handleFileSelect = () => {
        document.getElementById('imageInput').click();
    };

    const submitPost = () => {
       
        alert('Post submitted!'); // 제출 알림
    };

    return (
        <form id="writeForm">
            <table>
                <tbody>
                    <tr>
                        <td><h2>글쓰기</h2></td>
                    </tr>
                    <tr>
                        <td className={styles.description}>제목</td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type="text" 
                                placeholder="제목을 입력해주세요" 
                                name="title" 
                                value={title} 
                                onChange={handleTitleChange} 
                                className={styles.input}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.description}>내용을 입력해주세요</td>
                    </tr>
                    <tr>
                        <td>
                            <textarea 
                                placeholder="내용을 입력해주세요." 
                                name="detail" 
                                value={detail} 
                                onChange={handleDetailChange}
                                className={styles.textarea}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.description}>이미지 업로드</td>
                    </tr>
                    <tr>
                        <td>
                        <input 
                            type="file" 
                            id="imageInput" 
                            accept="image/*" 
                            style={{ display: 'none' }}
                        />


                            <button 
                                type="button" 
                                className={styles.but} 
                                onClick={handleFileSelect}
                            >파일 선택</button>
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

export default EventWriteForm;
