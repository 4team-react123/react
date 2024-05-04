import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './EventDetail.module.css';
import Eventcontent from './Eventcontent';
import Leftbox from './LeftBox';

const EventDetail = () => {
  const { id } = useParams();

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
              <br/><strong>일정♻️</strong> <br/>▣ 6월 5일 세계환경의 날을 기념해 오는 6월 15일(금)~6월 16일(토) 이틀간 환경의날 기념행사가 제주시민복지타운 광장 일대에서 진행된다.<br/>  제주특별자치도지속가능발전협의회(상임의장 박차상)이 주관하는 이날 행사는 16일(토) 본 행사에 앞서 15일(금) 전야제 행사가 열릴 예정이다.<br/><br/>
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
      // 추가적인 case 문 작성
      default:
        return <div>이벤트를 찾을 수 없습니다.</div>;
    }
  };

  return <div className={styles.container}>{renderEventContent()}</div>;
};

export default EventDetail;
