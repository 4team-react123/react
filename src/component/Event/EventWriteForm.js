import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory 대신 useNavigate 사용
import eventData from '../../data/EventData';
import styles from './EventWriteForm.module.css';

function WriteForm() {
    const [year, setYear] = useState('');
    const [text, setText] = useState('');
    const [explain, setExplain] = useState('');
    const [place, setPlace] = useState('');
    const [image, setImage] = useState(null); // 이미지 상태 추가
    const [events, setEvents] = useState(eventData); // 이벤트 목록을 상태로 관리
    const navigate = useNavigate(); // useHistory 대신 useNavigate 사용

    useEffect(() => {
        // 로컬 스토리지에 저장된 이벤트 데이터를 가져옵니다.
        const savedEventData = localStorage.getItem('eventData');
        if (savedEventData) {
            setEvents(JSON.parse(savedEventData));
        }
    }, []);

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleExplainChange = (e) => {
        setExplain(e.target.value);
    };

    const handlePlaceChange = (e) => {
        setPlace(e.target.value);
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0]; // 업로드된 파일 가져오기
        setImage(file); // 이미지 상태 업데이트
    };

    const submitPost = () => {
        // 중복된 행사명이 있는지 확인
        const isExistingEvent = events.some(event => event.text === text);

        if (isExistingEvent) {
            // 중복된 행사명이 있으면 경고 메시지를 표시하고 종료
            alert("이미 존재하는 이벤트입니다.");
            return;
        }

        // 중복되지 않는 경우 이벤트를 추가합니다.
        const id = events.length + 1;
        const newEvent = { id, year, text, explain, place, imageUrl: '' };
        const updatedEvents = [...events, newEvent]; // 기존 이벤트 목록에 새 이벤트를 추가합니다.
        setEvents(updatedEvents);

        // 이미지 업로드 로직 및 후속 처리 부분은 여기에 있어야 합니다.
        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            fetch('upload_url', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                newEvent.imageUrl = data.imageUrl; // 이미지 URL을 이벤트 데이터에 추가
                // 로컬 스토리지에 업데이트된 이벤트 데이터를 저장합니다.
                localStorage.setItem('eventData', JSON.stringify(updatedEvents));
                console.log("Event Data:", updatedEvents); // 이벤트 데이터를 콘솔에 출력합니다.
                alert(`Post submitted!\n\n행사명: ${text}\n개최일시: ${year}\n장소: ${place}\n내용: ${explain}`);
                navigate('/event'); // 경고창이 뜬 후에 페이지 이동
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
        } else {
            // 이미지가 없는 경우에도 로컬 스토리지에 업데이트된 이벤트 데이터를 저장합니다.
            localStorage.setItem('eventData', JSON.stringify(updatedEvents));
            console.log("Event Data:", updatedEvents); // 이벤트 데이터를 콘솔에 출력합니다.
            alert(`Post submitted!\n\n행사명: ${text}\n개최일시: ${year}\n장소: ${place}\n내용: ${explain}`);
            navigate('/event'); // 경고창이 뜬 후에 페이지 이동
        }
    };

    return (
        <form id="writeForm">
            <table>
                <tbody>
                    <tr>
                        <td><h2>글쓰기</h2></td>
                    </tr>
                    <tr>
                        <td className={styles.description}>행사명</td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type="text" 
                                placeholder="행사명을 입력해주세요" 
                                name="text" 
                                value={text} 
                                onChange={handleTextChange} 
                                className={styles.input}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.description}>개최일시</td>
                    </tr>
                    <tr>
                        <td>
                            <input 
                                type="text" 
                                placeholder="일시:YYYY.MM.DD(수) - MM.DD(일) 이런식으로 작성해주세요" 
                                name="year" 
                                value={year} 
                                onChange={handleYearChange} 
                                className={styles.input}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.description}>장소를 입력해주세요</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text" 
                                placeholder="장소를 입력해주세요" 
                                name="place" 
                                value={place} 
                                onChange={handlePlaceChange} 
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
                                name="explain" 
                                value={explain} 
                                onChange={handleExplainChange}
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
                                onChange={handleFileSelect} // 파일 선택 시 핸들러 호출
                            />
                            <button 
                                type="button" 
                                className={styles.but} 
                                onClick={() => document.getElementById('imageInput').click()} // 파일 선택 버튼 클릭 시 input 클릭
                            >
                                파일 선택
                            </button>
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

export default WriteForm;
