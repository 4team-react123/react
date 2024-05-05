import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import eventData from '../../data/EventData';
import styles from './EventWriteForm.module.css';

function WriteForm() {
    const [year, setYear] = useState('');
    const [text, setText] = useState('');
    const [explain, setExplain] = useState('');
    const [place, setPlace] = useState('');
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

    const submitPost = () => {
        
        const isExistingEvent = events.some(event => event.text === text);

        if (isExistingEvent) {
            
            alert("이미 존재하는 이벤트입니다.");
            return;
        }

        // 행사를 추가하는 로직
        const id = events.length + 1;
        const newEvent = { id, year, text, explain, place, imageUrl: '/images/logo.png' };
        const updatedEvents = [...events, newEvent]; 
        setEvents(updatedEvents);
        // 로컬스토리지에 저장
        localStorage.setItem('eventData', JSON.stringify(updatedEvents));
        alert(`Post submitted!\n\n행사명: ${text}\n개최일시: ${year}\n장소: ${place}\n내용: ${explain}`);
        navigate('/event'); 
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
                    
                    {/* 이미지 업로드 부분은 삭제하였습니다. */}
                    
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
