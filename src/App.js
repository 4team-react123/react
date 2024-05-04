// App.js

import React from "react";
import "./App.css"; // style.css

function App() {
  return (
    <div className="frame">
      <section className="total">
        <section className="header">
          <div className="navigationBar">
            <div className="userName">
              <img src="/images/logo.png"/>
              <span>Yegrina</span>
            </div>
            <div className="navigationItems">
              <span>Main</span>
              <span>Recycle</span>
              <span>Event</span>
              <span>Business</span>
            </div>
          </div>
        </section>
        <section className="Content">
          <div className="mainContent">
            <div className="mainBar">
              <span>Eco-Friendly Companies</span>
            </div>
            <div className="detailContents">
              <div className="leftContent">
                <div className="leftContentFirst">
                  <p>
                    <span>6월 5일</span>은 무슨날?
                  </p>
                  <p className="checkCircle">환경의 날</p>
                </div>
                <div className="leftContentSecond">
                  <p>4월 5일 식목일</p>
                  <p>4월 22일 지구의 날</p>
                  <p>6월 5일 환경의 날</p>
                </div>
                <div className="leftContentThird">
                  <img src="/images/v46_631.png" />
                </div>
                <div className="leftContentForth"> 
                  <p>1. 종이컵 안 쓰기</p>
                  <p>2. 텀블러 사용하기</p>
                  <p>3. 손수건 사용하기</p>
                  <p>4. 화장지 1칸 덜 쓰기</p>
                  <p>5. 양면 출력하기</p>
                  <p>6. 이면지 재활용하기</p>
                  <p>7. 종이류 분리배출 잘하기</p>
                </div>
              </div>
              <div className="rightContent">
                <div className="rightContentFirst">
                  <div className="contentImg">
                    <p><img src="/images/UnionKid.jpg" alt="Union Kid" /></p>
                  </div>
                  <div className="explanation">
                    <span>유니온 키드</span>
                    <p>
                      골판지나 종이로 만드는 가구, 행사 부스, 장난감 등을 만드는
                      제품 생산과<br/>아이들을 중심으로 이러한 제품을 스스로
                      만들어보는 체험 교육과<br/>자원순환 교육을 진행하고 있는
                      사회적 기업입니다.
                    </p>
                  </div>
                </div>
                <div className="rightContentSecond">
                  <div className="contentImg">
                    <p><img src="/images/Basf.jpg" alt="Union Kid" /></p>
                  </div>
                  <div className="explanation">
                    <span>바스프</span>
                    <p>
                      90% 까지 자연 분해되는 플라스틱 비닐, 온실 가스 배출량 감소를 위한 탄소<br/>
                      제로 운동 등 다양한 친환경적 지속 가능한 에너지 및 기후 보호를 위해 노력<br/>
                      하는 독일의 사회적 친환경 기업입니다.
                    </p>
                  </div>
                </div>
                <div className="rightContentThird">
                  <div className="contentImg">
                    <p><img src="/images/ReHarvest.jpg" alt="Union Kid" /></p>
                  </div>
                  <div className="explanation">
                    <div>
                    <span>리하베스트</span>
                    </div>
                    <div>
                    <p>
                      버려지는 음식이 없는 세상을 꿈꾸는 푸드 업사이클링 회사, 리하베스트<br/>
                      입니다. 다양한 먹거리들을 가공하며 버려지는 식품들의 부산물을 이용해 고기능성,<br/>
                      고영양 식품을 개발하는 기술을 개발, 제공하고 있습니다.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer">
          <div className="footerNavigationBar">
            <div className="footerUserName">
              <img src="/images/logo.png"/>
              <span>Yegrina</span>
            </div>
            <div className="footerNavigationContent">
              <div className="footerNavigationItems">
                <span>main</span>
                <span>AboutUs</span>
                <span>Blog</span>
                <span>Contact</span>
              </div>
              <hr />
            </div>
          </div>
          <div className="footerHR">
            <hr />
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
