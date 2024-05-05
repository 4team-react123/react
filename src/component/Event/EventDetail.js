import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './EventDetail.module.css';
import Eventcontent from './Eventcontent';

import EventData from "../../data/EventData"; // eventData 가져오기 assuming you might need this import if not fetched from localStorage

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch event data from local storage
    const savedEventData = localStorage.getItem('eventData');
    if (savedEventData) {
      const events = JSON.parse(savedEventData);
      // Find the event with the ID from URL parameters
      const selectedEvent = events.find(event => event.id === parseInt(id));
      setEvent(selectedEvent);
    }
  }, [id]);
  const handleDeleteEvent = () => {
    if (window.confirm("글을 삭제하시겠습니까?")) {
      const adminPassword = window.prompt("관리자 비밀번호를 입력하세요.");
      if (adminPassword === "1234") {
        const savedEventData = localStorage.getItem('eventData');
        if (savedEventData) {
          const events = JSON.parse(savedEventData);
          const filteredEvents = events.filter(event => event.id !== parseInt(id));
          localStorage.setItem('eventData', JSON.stringify(filteredEvents));
          alert("해당 글을 삭제했습니다.");
          navigate('/event'); // Redirects to the event list page
        }
      } else {
        alert("관리자 비밀번호가 틀렸습니다.");
      }
    }
  };

  // Rendering function that includes a delete button with the correct onClick handler

  const renderEventContent = () => {
    switch (id) {
      case '1':
        return (
          <div className={styles.content}>
            <Eventcontent text={"Environmental event"} coment={"Home > Event"} />
        
            <div className={styles.eventInfo}>
            <span className={styles.eventTitle}>2024 청정제주V-Possible스탬프투어<br/></span>
              <img src="/images/v51_976.png" alt="Event" className={styles.eventImage} />

              <span className={styles.eventDescription}>
                <br/><strong>연중 미션 1. 우유팩모으기♻️</strong> <br/>▣ 우유팩 1kg 당 자원봉사 1시간 인정<br/> 1. 교육영상을 보시고 댓글을 남겨주세요!<br/> 2. 씻고, 자르고, 펼치고, 건조시킨 깨끗한 우유팩을 모아주세요! (*본인 활동 사진 타임스탬프로 사진찍기 - 3장 이상)<br/> 3. 첨부파일의 결과보고 양식을 작성하여 제출해주세요!<br/> 4. 깨끗이 모인 우유팩을 제주도자원봉사센터로 가져오시면 우유팩 1kg당 자원봉사 1시간을 드립니다~!<br/><br/>
              </span>
              <span className={styles.eventDescription}>
              <strong>연중 미션 2. 제주도내플로깅🏃‍♂️</strong> <br/>(다같이줍자 제주한바퀴) 자원봉사 1시간 인정 <br/>1. 플로깅을 진행하기 전 활동 전 사진을 찍어주세요!<br/> 2. 플로깅을 진행한 후 마무리 사진을 찍어주세요!<br/> 3. 플로깅을 진행한 장소도 찍어주세요! <br/>4. 찍은 활동 사진들을 (활동 전 · 활동 후, 장소 짧은 소감과 함께 "제주특별자치도자원봉사센터" 카카오톡채널로 전송<br/><br/>
              </span>
              <span className={styles.eventDescription}>
              <strong>연중 미션 3. 플라스틱병뚜껑모으기✨</strong><br/> 플라스틱 병뚜껑 50개 - 자원봉사 활동인증 1건 <br/>1. 교육영상을 보시고 댓글을 남겨주세요! <br/>2. 깨끗한 플라스틱 병뚜껑을 모으고 제주도자원봉사센터로 제출해주세요! <br/><br/>⭐ 제출처 : 제주특별자치도자원봉사센터 (제주시 문연로 30 도청 제2청사 108호) <br/>⭐ 제출시간 : 평일 9:00~18:00 (점심 12-13)<br/>
              </span>
              <span className={styles.eventDescription}>
                환경 위기 극복을 위한 일상 속 환경 지킴 봉사 습관 만들기!<br/> 제주 도민, 관광객의 주도적 참여로 청정 제주를 만들어 가요~!<br/> 활동방법 : 구글신청서 작성 -&gt; 미션 확인 -&gt; 미션 수행하고 카카오채팅으로 인증사진 전송 <br/>-&gt; 스탬프 받으면 성공!
              </span>
            </div>
          </div>
        );
      case '2':
        return (
          <div className={styles.content}>
          <Eventcontent text={"Environmental event"} coment={"Home > Event"} />
      
          <div className={styles.eventInfo}>
          <span className={styles.eventTitle}>세계환경의 날,<br/>제주환경, 함께 그리다<br/></span>
            <img src="/images/jeju.png" alt="Event" className={styles.eventImage} />

            <span className={styles.eventDescription}>
              <br/><strong>일정</strong> <br/>▣ 6월 5일 세계환경의 날을 기념해 오는 6월 15일(금)~6월 16일(토) 이틀간 환경의날 기념행사가 제주시민복지타운 광장 일대에서 진행된다.<br/>  제주특별자치도지속가능발전협의회(상임의장 박차상)이 주관하는 이날 행사는 16일(토) 본 행사에 앞서 15일(금) 전야제 행사가 열릴 예정이다.<br/><br/>
            </span>
            <span className={styles.eventDescription}>
            <strong>야간 프리마켓 셀러</strong> <br/>야간 프리마켓 셀러는 오는 8일(금) 18:00까지 먹거리(현장조리 불가),<br></br> 개인 창작품, 농산품, 환경체험 등 셀러 20팀을 선착순 모집하고 있다.<br/> 프리마켓 셀러에 대해서는 부스, 테이블 1개, 의자 1개 등이 제공될 예정이며 참가비 및 물품대여비는 없다.<br/><br/>
            </span>
            <span className={styles.eventDescription}>
            <strong>신청방법✨</strong><br/> 신청방법은 신청서를 작성, 이메일 jjagenda21@daum.net 또는 팩스 064-746-1021로 송부하면<br></br> 오는 11일(월) 오전 내 개별문자로 참여여부를 열려줄 예정이다.<br/>문의는 제주특별자치도지속가능발전협의회(064-748-1021 담당 이현주)로 하면 된다.<br/>제주특별자치도지속가능발전협의회는 “프리마켓 셀러는 재활용UP, 쓰레기ZERO! <br/>되도록 쓰레기가 적게 나오는 상품 판매와 먹거리 및 농산품 경우 지역 농산품 이용·판매 셀러를 우선적으로 선정한다”고 밝혔다<br/>또한 “각 부스에서 발생한 쓰레기는 자체적으로 해결하고 판매가격 및 상품설명 안내판 등은 개인적으로 준비를 부탁드린다”고 당부했다.<br/><br></br>
             </span>
            <span className={styles.eventDescription}>
            제주특별자치도지속가능발전협의회 박차상 상임의장은 <br/>“자연이 선사하는 아름다움에 감사하는 마음을 갖고,<br/> 나아가 지구를 위한 다짐을 되새겨보는, <br/> 2018년 환경의 날 기념 행사에 도민 여러분의 많은 관심과 참여를 부탁드린다”고 밝혔다. </span>
          </div>
        </div>
        );
        case '3':
          return (
            <div className={styles.content}>
              <Eventcontent text={"Environmental event"} coment={"Home > Event"} />
          
              <div className={styles.eventInfo}>
              <span className={styles.eventTitle}>제 21회 고창 청보리밭 축제<br/></span>
                <img src="/images/v43_650.png" alt="Event" className={styles.eventImage} />
  
                <span className={styles.eventDescription}>
                  <br/><strong>축제의 제재</strong> <br/>보리의 생육 기간 중 가장 아름다울 때는 ‘청보리’ 기간이라고 한다.<br/> 보리가 가장 환상적인 모습을 띠는 이 기간, <br/>매년 4월 중순부터 5월 중순까지 고창군 공음면 학원농장 일대의 약 77만㎡ 땅에서 ‘고창 청보리밭 축제’는 주인공의 모습을 드러낸다. <br/> 봄바람에 파릇하게 흩날리는 청보리의 모습은 오선지 위에서 음표들이 춤추듯이 만들어내는<br/> 음악의 모습과 비슷하다고 연상시켜, 이번 제21회 축제는 ‘청보리밭’과 ‘음악’을 제재로 삼았다.<br/><br/>
                </span>
                <span className={styles.eventDescription}>
                <strong>프로그램</strong> <br/> 축제 기간 내내 오감을 만족시키는 프로그램을 경험할 수 있을 것이다. <br/>청보리와 유채꽃이 광활하게 펼쳐진 청보리밭을 보면 시각이<br/> 전문 공연팀과 고창 군민이 만드는 다양한 버스킹의 음악을 들으면 청각이<br/> 우리 지역 농특산물로 만든 음식을 먹으면 미각이, 보리 놀이터 및 보리 새싹 키우기 체험을 하면 촉각이 <br/>청보리밭 축제에 사랑하는 사람과 추억이 더해져 오랜 향기를 남기면 후각이 즐거운 축제이다. <br/><br/>
                </span>
                <span className={styles.eventDescription}>
                <strong>세가지목표✨</strong><br/> 첫째, 음악으로 힐링하는 보리밭이다. <br/>다양한 장르의 음악 공연으로 다채로운 축제 분위기를 조성하고 방문객이 함께 어우러지고자 한다 <br/> 둘째, 아이들의 놀이 공간 확대이다.  <br/>다목적 전시관 내 ‘보리알 놀이터’ 및 ‘보릿가루 글씨쓰기 체험’의 구성으로 아이들만이 즐길 수 있는 활동을 기획하였다. <br/>그로 인해 축제를 즐길 수 있는 연령대를 기존보다 확대하고자 한다. <br/>⭐ 마지막으로, 축제장의 청결도를 높이는 것이다. 축제장 쓰레기 수거, 이동식 화장실 증설, 오수 배출구 개선 등의 방안을 실천하고자 한다.<br/><br/>
                </span>
                <span className={styles.eventDescription}>
                고창 청보리밭 축제는 전북특별자치도 고창군의 주요 생태자원 중 하나인 청보리밭을 중심으로 하는 고창군의 대표축제이다 <br/>  2004년 처음 개최한 이래로 해마다 평균 50만여 명이 방문하는 전국 경관 농업의 1번지 축제로서<br/>그 오랜 역사를 만들어가고 있다.<br/>
                </span>
              </div>
            </div>
          );
          case '4':
            return(
              <div className={styles.content}>
              <Eventcontent text={"Environmental event"} coment={"Home > Event"} />
          
              <div className={styles.eventInfo}>
              <span className={styles.eventTitle}>2024년 2분기 지구를 살리는 습관<br/>"미니 봉사 챌린지"</span>
                <img src="/images/jeju2.png" alt="Event" className={styles.eventImage} />
  
                <span className={styles.eventDescription}>
                  <br/><strong>참가대상</strong> <br/>1365자원봉사자 누구나!<br/><br/>
                </span>
                <span className={styles.eventDescription}>
                <strong>활동기간</strong> <br/>2024. 4. 1.(월) ~ 6. 30.(일)<br/><br/>
                </span>
                <span className={styles.eventDescription}>
                <strong>활동내용✨</strong><br/>- 탄소중립실천 활동 - <br/>① 종이팩 세척 후 배출(2팩 이상)<br/> ② 장바구니 사용 <br/>③ 다회용기 사용하기 <br/>④ 텀블러 사용(리유저블컵 가능) <br/>⑤ 대중교통이용하기)<br/>⑥ 친환경 인증마크 제품 사용하기<br/>
                </span>
                <span className={styles.eventDescription}>
                  - 위 6가지 활동 중 3가지 탄소중립 봉사활동을 실시<br/>- 대중교통을 이용의 경우 상황에 따라 촬영 후 인증해주시면 됩니다. <br/>- 참여자의 의견을 반영하여 분기별 활동 추가 및 변경이 있습니다. <br/>- 활동 후 인터넷 설문을 통해 참여인증 <br/>※ SNS( 인스타그램, 페이스북, 틱톡, 쓰레드, 트위터 등)에 활동사진과 함께 #대구북구자원봉사센터 #탄소중립 #미니봉사<br/>챌린지 태그 및 인증하는 것으로 봉사시간 30분 추가 인정
                </span>
              </div>
            </div>
            );
            case '5':
              return(
                <div className={styles.content}>
                <Eventcontent text={"Environmental event"} coment={"Home > Event"} />
            
                <div className={styles.eventInfo}>
                <span className={styles.eventTitle}>시민과 함께하는<br/>환경의 날</span>
                  <img src="/images/seung.png" alt="Event" className={styles.eventImage} />
    
                  <span className={styles.eventDescription}>
                    <br/><strong>참가대상</strong> <br/>화성시민 누구나<br/><br/>
                  </span>
                  <span className={styles.eventDescription}>
                  <strong>활동기간</strong> <br/>2021.6.5(토)<br/><br/>
                  </span>
                  <span className={styles.eventDescription}>
                  <strong>활동내용✨</strong><br/>화성시는 재활용가능 자원인 투명 페트병, 폐건전지, 종이팩, 아이스팩을 일정량 모아오면- <br/> 에코백, 새건전지, 코리요 그립톡 등으로 교환해주고<br/>  행사 참여자 중 희망자에게는 봉사시간 30분도 부여한다고 밝혔다.<br/>화성시생활폐기물협의회도 동탄호수공원을 비롯해 <br/>화성시 쓰레기 취약지역 12개소에서 쓰레기 줍깅 및 쓰레기 줄이기 캠페인을 실시한다. <br/><br/>
                  </span>
                  <span className={styles.eventDescription}>
                   화성시는 오는 5일 ‘제26회 환경의 날’을 맞아<br/> 시민들과 함께하는 재활용품 교환 및 줍깅 캠페인 등 <br/>다채로운 행사를 개최한다고 밝혔다. <br/>
                  </span>
                </div>
              </div>
              );

              default:
                return (
                  <div className={styles.container}>
                    {event ? (
                      <div className={styles.content}>
                        <Eventcontent text={"Environmental event"} coment={"Home > Event"} />
                        <div className={styles.eventInfo}>
                          <span className={styles.eventTitle}>{event.year}<br/><br/></span>
                          <span className={styles.eventTitle}>{event.text}<br/><br/></span>
                          <span className={styles.eventDescription}>{event.explain}<br/><br/></span>
                          {event.place && <span className={styles.eventDescription}><strong>장소:</strong> {event.place}</span>}
                          <button onClick={handleDeleteEvent} className={styles.deleteButton}>삭제</button>
                        </div>
                      </div>
                    ) : (
                      <div>이벤트를 찾을 수 없습니다.</div>
                    )}
                  </div>
        );
    }
  };

  return <div className={styles.container}>{renderEventContent()}</div>;
};

export default EventDetail;