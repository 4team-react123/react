import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Eventcontent from "../Event/Eventcontent";
import styles from './Event.module.css';
import Eventbox from "./Eventbox";
import Leftbox from "./Leftbox";

import eventData from './eventData'

const Event = () => {

  const [events, setEvents] = useState([]);


  // eventData 업데이트 함수


  useEffect(() => {
    const storedEventData = localStorage.getItem("eventData");
    if (storedEventData) {
      setEvents(JSON.parse(storedEventData));
    } else {
      setEvents(eventData);
    }
  }, []);
  const updateEventData = (id, updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, ...updatedEvent } : event
      )
    );
  };

  useEffect(() => {

    const updatedEvent = { id: 5, year: '일시:2024.6.5(토)', text: '시민과 함께하는\n환경의 날', explain: '장소 : 동탄호수공원 선큰바닥분수', imageUrl: '/images/seung.png' };
    updateEventData(5, updatedEvent);
  }, []);


  const handleWriteButtonClick = () => {
    const isAdmin = window.prompt("관리자 비밀번호를 입력하세요.");
    if (isAdmin === "1234") {
      window.location.href = "/events/write"; 
    } else {
      window.alert("관리자만 글을 작성할 수 있습니다.");
    }
  };


  const handleDeleteAllButtonClick = () => {
    const isAdmin = window.prompt("관리자 비밀번호를 입력하세요.");
    if (isAdmin === "1234") {
      if (window.confirm("정말로 모든 글을 삭제하시겠습니까?")) {
        setEvents([]);
        localStorage.removeItem('eventData');
        alert("모든 글이 성공적으로 삭제되었습니다.");
      }
    } else {
      window.alert("관리자만 글을 삭제할 수 있습니다.");
    }
  };

  return (
    <div>
      <Eventcontent text={"Environmental event"} coment={"Home > Event"} />
      <div className={styles.homeone_box}>
        <div className={styles.left_column}>
          <div><Leftbox /></div>
        </div>
        <div className={styles.right_column}>
          <h2> <button
              className={styles.writeButton}
              onClick={handleWriteButtonClick} 
            >
              글쓰기
            </button>
            <br />
          </h2>
          {events.map((event) => (
            <div key={event.id} className={styles.small_box}>
              <Link to={`/events/${event.id}`} className={styles.link}>
                <img src={event.imageUrl} alt="Event Icon" className={styles.icon} />
                <Eventbox
                  year={event.year}
                  text={<span style={{ whiteSpace: 'pre' }}>{event.text}</span>}
                  explain={<span style={{ whiteSpace: 'pre' }}>{event.explain}</span>}
                  style={{ marginLeft: '20px' }}
                />
              </Link>
            </div>
          ))}
          <button onClick={handleDeleteAllButtonClick}>전체 글 삭제</button>
        </div>
      </div>
    </div>
  );
};

export default Event;