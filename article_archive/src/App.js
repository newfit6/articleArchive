import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import headerPattern from "./headerPattern.png";

/* 주석 다 영어로 달면 재미 없다고 도망갈까봐 친절히 한글로 작성해드립니다 ^^ 페이지가 단순해 컨벤션은 따로 없습니다 ~ */

function App() {
  let [title, titleChange] = useState([
    "220225 : 이월의 끝이자 삼월의 시작에 서서 회고하기를",
    "220223 : 전쟁같은 현대 사회에 환멸을 느끼며,",
    "161105 : 우리의 지금은 폭풍이 다 지나고 더이상 몰아칠게 없는 바다처럼 고요했다",
  ]);

  let [author, authorChange] = useState([
    "아티클러 : 이새벽    2022년 02월 25일  15:40 작성",
    "아티클러 : 척은샘    2022년 02월 23일  21:45 작성",
    "아티클러 : 이새벽    2016년 11월 05일  18:30 작성",
  ]);

  let [preview, previewChagne] = useState([
    "잠들기 전의 나를 기록할 수 없다. 전쟁터 만큼이나 목적지향적이지만 정신이 없다. 해야할 모든 일을 가까스로 끝마치고나면 모든 불이 꺼진다. 난 보이지 않는 앞을 손으로 한 번 휘저으며 한 숨을 내쉬곤 잠에 들어야만 한다. ...",
    "자본주의 현대 사회는 정글과 같아서, 먹이사슬이라는 피라미드에서 약육강식이 일어나는 것과 다르지 않은 현상이 일어난다. 구성원들은 개인의 생존, 혹은 영달을 위해, 어떠한 짓이든 마다하지 않는다. ...",
    "난 급히 약을 사러 가기 위해 운전대를 잡았다. 모든게 생소하고 달리는 도로마저 익숙하지 않은 농네였다. 길 위엔 아무도 보이지 않았고 이대로 달려서 약국이 나오는지도 확실하지 않았다. 곧이어 무엇인가 날 이끄는 듯 역시 처음 보는 상가 앞에 차를 멈추고 ...",
  ]);

  return (
    <div className="App">
      {/* 헤더 시작 */}
      <div className="Header">
        <div className="Title">아티클아카이브*</div>
        <img className="Header-Pattern" src={headerPattern} alt="profile"></img>
      </div>
      {/* 헤더 종료 */}

      {/* 포스트박스 시작 */}
      <div className="Post-Box">
        {/* 아티클1 시작 */}
        <div className="Article-List">
          <div className="Article-Title">{title[0]}</div>
          <div className="Article-Author">{author[0]}</div>
          <div className="Article-Preview">{preview[0]}</div>
          <div className="Btn-Group">
            <button type="button" className="More-Btn">
              조금 더 가까이
            </button>
            <button type="button" className="Comment-Btn">
              내 의견은 이래
            </button>
          </div>
        </div>
        {/* 아티클1 종료 */}
        {/* 아티클1 시작 */}
        <div className="Article-List">
          <div className="Article-Title">{title[1]}</div>
          <div className="Article-Author">{author[1]}</div>
          <div className="Article-Preview">{preview[1]}</div>
          <div className="Btn-Group">
            <button type="button" className="More-Btn">
              조금 더 가까이
            </button>
            <button type="button" className="Comment-Btn">
              내 의견은 이래
            </button>
          </div>
        </div>
        {/* 아티클1 종료 */}
        {/* 아티클1 시작 */}
        <div className="Article-List">
          <div className="Article-Title">{title[2]}</div>
          <div className="Article-Author">{author[2]}</div>
          <div className="Article-Preview">{preview[2]}</div>
          <div className="Btn-Group">
            <button type="button" className="More-Btn">
              조금 더 가까이
            </button>
            <button type="button" className="Comment-Btn">
              내 의견은 이래
            </button>
          </div>
        </div>
        {/* 아티클1 종료 */}
      </div>
      {/* 포스트박스 종료 */}
    </div>
  );
}

export default App;
