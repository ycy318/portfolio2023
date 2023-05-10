<template>
  <div>
    <div id="nav">
      <h1>
        <div id="icon"></div>
        Nick's portfolio /
        <p>web development</p>
      </h1>

      <ul>
        <li><a href="#page1" id="#page1"> ABOUT ME</a></li>
        <li><a href="#page2" id="#page2">PROJECT</a></li>
        <li><a href="#page3" id="#page3">MY HISTORY</a></li>
      </ul>
    </div>
    <full-page ref="fullpage" :options="option" id="fullpage">
      <div class="section">
        <div id="contentArea">
          <div id="mainLeft"></div>
          <div id="mainCenter">
            <div id="mainCenterCard">
              <div id="content">
                <img id="img" src="사진.jpeg" />
                <h1 style="padding: 20px">Changyoon Yang</h1>
                <p id="blueLine"></p>
                <p
                  style="
                    font-size: 1.2em;
                    font-weight: 100px;
                    font-family: Lucida Console, Courier New, monospace;
                  "
                >
                  web development
                </p>
              </div>
              <div id="snsArea">
                <ul>
                  <li>
                    <a href="http://www.naver.com"
                      ><img id="snsImg" src="kakao.png"
                    /></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/03_18.c/"
                      ><img id="snsImg" src="instagram.png"
                    /></a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/changyun.yang.77"
                      ><img id="snsImg" src="facebook.png"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="mainCenterExplanation">
              <div id="ExplanationTitle" class="text-focus-in">Hello</div>
              <div id="ExplanationSub" class="text-focus-in">
                Here's who I am & what I do
              </div>
              <div id="button">
                <a id="buttonStyle" href="#page2">PROJECT</a>
                <a id="buttonStyle" href="#page3">MY HISTORY</a>
              </div>
              <div id="businessCard">
                <div>
                  <div id="codeLine">
                    <p id="codeNumber">1</p>
                    <p id="var">function</p>

                    <p id="varName">getDetail() {</p>
                  </div>
                  <div id="codeLine">
                    <p id="codeNumber">2</p>
                    <p id="var">var</p>
                    <p id="varName">Name =</p>
                    <p id="varValue">"Nick(Changyoon) Yang"</p>
                  </div>
                  <div id="codeLine">
                    <p id="codeNumber">3</p>
                    <p id="var">var</p>
                    <p id="varName">Titile =</p>
                    <p id="varValue">"Full Stack Developer"</p>
                  </div>
                  <div id="codeLine">
                    <p id="codeNumber">4</p>
                    <p id="var">var</p>
                    <p id="varName">Phone =</p>
                    <p id="varValue">"+61 493 338 383"</p>
                  </div>
                  <div id="codeLine">
                    <p id="codeNumber">5</p>
                    <p id="var">var</p>
                    <p id="varName">Email =</p>
                    <p id="varValue">"hohoboy97@naver.com"</p>
                  </div>
                  <div id="codeLine">
                    <p id="codeNumber">6</p>
                    <p id="var">var</p>
                    <p id="varName">Major =</p>
                    <p id="varValue">"Software Engineering"</p>
                  </div>
                  <div id="codeLine">
                    <p id="codeNumber">7</p>
                    <p id="varName">}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" id="section3">
        <div id="contentArea">
          <div id="introduce">
            <v-row no-gutters>
              <v-col cols="7" md="7" sm="12" class="experience">
                <div class="experienceTitle">
                  <div class="rotatingText-content">
                    <p class="rotatingText-description">Honors and Awards!</p>
                    <h2 class="rotatingText-adjective">
                      {{ this.experienceTitle[this.titleIdx] }}
                    </h2>
                  </div>
                </div>
                <div id="autoSilder">
                  <img id="mac" src="mac.png" />
                  <tiny-slider
                    :autoplayTimeout="3000"
                    id="topSlider"
                    :nav="false"
                    mode="gallery"
                    :animateDelay="2000"
                    :loop="true"
                    :autoplay="true"
                    :items="1"
                    gutter="20"
                    :controls="false"
                  >
                    <div
                      id="sliderItem"
                      v-for="(item, idx) in imgItems"
                      :key="idx"
                    >
                      <img id="sliderImg" :src="item" />
                    </div>
                  </tiny-slider>
                </div>
                <div>
                  <div class="hashTagArea">
                    <div class="hashTag">
                      <vue-typer
                        :text="[
                          '#MBTI : ENFP',
                          '#긍정적 #끈기 #꼼꼼함',
                          '#리더십 #호주청년',
                        ]"
                        :repeat="Infinity"
                        :shuffle="false"
                        initial-action="typing"
                        :pre-type-delay="70"
                        :type-delay="70"
                        :pre-erase-delay="3000"
                        :erase-delay="250"
                        erase-style="select-all"
                        :erase-on-complete="false"
                        caret-animation="smooth"
                      ></vue-typer>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="5" md="5" sm="12">
                <div class="abutMe">
                  <div class="experience0">
                    <div class="title0">
                      <div class="waviy">
                        <span style="--i: 1">E</span>
                        <span style="--i: 2">x</span>
                        <span style="--i: 3">p</span>
                        <span style="--i: 4">e</span>
                        <span style="--i: 5">r</span>
                        <span style="--i: 6">i</span>
                        <span style="--i: 7">e</span>
                        <span style="--i: 8">n</span>
                        <span style="--i: 9">c</span>
                        <span style="--i: 10">e</span>
                      </div>
                    </div>
                    <div class="experienceArea">
                      <h4
                        v-for="(item, idx) in getExperienceData.list"
                        :key="idx"
                        id="experienceDetail"
                      >
                        <span class="when">{{ item.when }}</span>
                        <span class="detail">{{ item.detail }}</span>
                      </h4>
                    </div>
                  </div>

                  <div class="chartZone">
                    <div class="zoneTitle">
                      <div class="waviy">
                        <span style="--i: 1">s</span>
                        <span style="--i: 2">k</span>
                        <span style="--i: 3">i</span>
                        <span style="--i: 4">l</span>
                        <span style="--i: 5">l</span>
                        <span style="--i: 6">s</span>
                      </div>
                    </div>
                    <div class="chartBody">
                      <div
                        class="chartArea"
                        v-for="(item, idx) in getChart.getChartData.list"
                        :key="idx"
                      >
                        <div id="chart">
                          <Doughnut
                            :data="item.chartData"
                            :options="chartOptions"
                            :chart-id="chartId"
                            :style="style"
                          ></Doughnut>
                        </div>
                        <div
                          id="chartTitle"
                          :style="`color : ${item.chartData.datasets[0].backgroundColor[0]}`"
                        >
                          {{ item.chartTitle }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
      <div class="section">
        <div id="contentArea" class="section2">
          <div id="section2">
            <h3 class="sectionTitleArea">
              <h3 class="sectionTitle">Projects</h3>
              <p id="point">.</p>
            </h3>
            <p class="sectionSubTitle">몇 가지 프로젝트 작업물을 소개합니다.</p>
            <div class="projectArea">
              <div
                class="projectItem"
                v-for="(item, idx) in projectImgItem"
                :key="idx"
                @mouseover="mouseover(idx)"
                @mouseout="mouseout(idx)"
              >
                <div v-show="item.flag" class="ImgDetail">
                  <div class="responsive">
                    <div class="res">responsive</div>
                    <div class="resTitle">{{ item.title }}</div>
                    <div class="resline"></div>
                    <div class="resdetail">
                      <span>- 참여율 100%</span>
                    </div>
                  </div>
                </div>
                <img class="itemImg" :src="item.Url" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>


<script>
// import "fullpage.js/dist/fullpage.min.css";
import getChartData from "./data/chartData.json";
import getExperienceData from "./data/experienceData.json";
import VueTinySlider from "vue-tiny-slider";
import { VueTyper } from "vue-typer";
import { Doughnut } from "vue-chartjs";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
export default {
  name: "HelloWorld",
  components: {
    Doughnut,
    "tiny-slider": VueTinySlider,
    VueTyper,
  },

  mounted() {
    setInterval(() => {
      if (this.titleIdx < 3) {
        this.titleIdx++;
      } else this.titleIdx = 0;
    }, 3000);

    let observer = new IntersectionObserver((e) => {
      console.log("dsa", this.getChart);

      // let canvas = document.querySelectorAll("canvas");
      // canvas[0].style.width = "125px";
      // canvas[0].style.height = "125px";
      let hash = window.location.hash.substring(0, 6);
      let hashList = ["#page1", "#page2", "#page3"];
      for (let i = 0; i < 3; i++) {
        let element = document.getElementById(hashList[i]);
        if (hash === hashList[i]) element.style.textDecoration = "underline";
        else element.style.textDecoration = "";
      }

      e.forEach((item) => {
        if (item.isIntersecting) {
          item.target.style.opacity = 1;
        } else item.target.style.opacity = 0;
      });
    });

    let div = document.querySelectorAll("div");
    console.log(document.getElementById("section3"));
    observer.observe(div[7]);
    observer.observe(div[19]);
  },
  watch: {
    pageIndex(Index) {
      console.log(Index);
    },
  },
  methods: {
    mouseover(idx) {
      this.projectImgItem[idx].flag = true;
    },
    mouseout(idx) {
      this.projectImgItem[idx].flag = false;
    },
  },
  props: {
    chartId: {
      type: String,
      default: "doughnut-chart",
    },
  },
  data() {
    return {
      projectImgItem: [
        { flag: true, Url: "/imgs/aquaponics.png", title: "Framework" },
        { flag: false, Url: "/imgs/aquaponics.png", title: "아쿠아포닉스" },
        {
          flag: false,
          Url: "/imgs/aquaponics.png",
          title: "스마트 물자관리 시스템",
        },
        {
          flag: false,
          Url: "/imgs/aquaponics.png",
          title: "울주 방재창고 관리",
        },
      ],
      getExperienceData: getExperienceData,
      imgItems: [
        "골목상권.jpg",
        "노마드.jpg",
        "크라우드.jpeg",
        "SW품질캠프.jpeg",
      ],

      titleIdx: 0,
      experienceTitle: [
        "관광콘텐츠 활용 창업경진대회(우수상)",
        "LINC+ 창업노마드 캠프&아이디어 경진대회(대상) ",
        "Crowd Testing 경진대회(대상)",
        "SW품질캠프경진대회(대상)",
      ],
      getChart: getChartData,
      style: "width: 5em; height: 5em;",
      chartOptions: {
        animation: {
          duration: 3000,
        },
        responsive: false,
      },
      sliderData: [
        {
          title: "스마트 물자 관리 시스템",
          no: "01",
          imgPath1: "img1.png",
          imgPath2: "img2.png",
          imgPath3: "img3.png",
          description: "",
        },
        {
          title: "이재민 관리 시스템 ",
          no: "02",
          imgPath1: "img7.png",
          imgPath2: "img8.png",
          imgPath3: "img9.png",
          description: "",
        },
        {
          no: "03",
          title: "프레임워크 및 라이브러리",
          imgPath1: "img6.png",
          imgPath2: "img5.png",
          imgPath3: "img4.png",
          description: "",
        },
      ],
      pageURL: "",
      timeLineData: [],
      option: {
        anchors: ["page1", "page2", "page3"],
        scrollOverflow: true,
        sectionsColor: ["FFFFFF", "#ffffff", "#FFFFFF"],
        // normalScrollElements: "#scrollPage", // 스크롤
      },
    };
  },
};
</script>

<style lang="scss">
.rotatingText {
  align-items: center;
  display: flex;
  height: 100vh;
  text-align: center;
}

.rotatingText-content {
  position: relative;
  width: 100%;
}

.rotatingText-description {
  font-family: "Georgia", serif;
  font-style: italic;
  font-size: 23px !important;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 18px;
  }
}

.when {
  margin-left: 3%;
}
.detail {
  margin-left: 3%;
}
.experience0 {
  margin: 0 auto;
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.title0 {
  width: 75%;
}
.rotatingText-adjective {
  font-family: "Open Sans", sans-serif;
  font-size: 40px;
  left: 0;
  margin-bottom: 0;
  margin-top: 30px;
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  top: 0;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  &:nth-of-type(1) {
    animation: rotate-text-up 3s 0s reverse infinite;
  }

  &:nth-of-type(2) {
    animation: rotate-text-up 3s 3s reverse infinite;
  }

  &:nth-of-type(3) {
    animation: rotate-text-up 3s 6s reverse infinite;
  }
}
.abutMe {
  margin-top: 18%;
  // border: 1px solid;
  // background-color: rgba(128, 128, 128, 0.488);
}
// Animations
@keyframes rotate-text-up {
  0% {
    transform: translate3d(0, 80px, 0);
    opacity: 0;
  }

  20%,
  80% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  100% {
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }
}

@keyframes fade-text-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 80px, 0);
  }

  50%,
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
<style >
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,200;1,300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap");

@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Poor+Story&display=swap");
#experienceDetail {
  font-size: 1.2em;
}
#chartTitle {
  font-size: 0.8em;
  font-weight: 900;
}

.hashTag {
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  /* width: 64%; */
  /* color: aqua !important; */
  height: 100px;
  font-size: 1.2em;
  /* background-color: #7afbfb40; */
  border-radius: 10px;
  padding: 0 10%;
}

.hashTagArea {
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes text-focus-in {
  0% {
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}
.text-focus-in {
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}
#fullpage {
  position: absolute;
  bottom: 0;
}
#sliderImg {
  width: 100%;
  height: 43vh;
  z-index: 0;
}
#mac {
  top: 1%;
  /* right: -14%; */
  width: 100%;
  height: 50.3vh;
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
.bounce-in-top {
  animation: bounce-in-top 1.1s both;
}

@keyframes bounce-in-top {
  0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}
#topSlider-iw {
  height: 100%;
}
#topSlider {
  height: 100%;
  margin-top: 1%;
  margin-left: 10.3%;
  /*  퍼센트로 바꾸기*/
}

.v-application a {
  color: #172690 !important;
}
.tns-outer {
  height: 100%;
}
.experienceTitle {
  height: 70px;
  text-align: center;
  position: relative;
}
#autoSilder {
  /* background: url("mac1.png");
  background-size: 100%; */
  width: 100%;
  position: relative;
  height: 50.3vh;
}

.resTitle {
  position: relative;
  top: 53%;
  font-weight: 600;
  font-size: 25px;
  color: WHITE;
}
.resline {
  margin-top: 5%;
  background-color: #fff;
  height: 0.5%;
  width: 80%;
  position: relative;
  top: 50%;
}

.resdetail {
  font-size: 20px;
  position: relative;
  top: 58%;
  color: WHITE;
}

.res {
  color: #d0adef;
  font-size: 15px;
  font-weight: 700;
  position: relative;
  /* position: absolute; */
  /* margin-top: 45%; */
  top: 50%;
}
.responsive {
  margin-left: 10%;
  width: 100%;
  height: 100%;
}

.experience button {
  display: none;
}
#topSlider > .tns-item {
  padding-top: 3%;
  padding-right: 11.8% !important;
  padding-left: 0.2%;
  padding-bottom: 7.2%;
  height: 100%;
}
.experienceArea {
  width: 75%;
}
.waviy {
  position: relative;
  text-align: left;
  font-size: 2em;
}
.waviy span {
  font-family: "Alfa Slab One", cursive;
  position: relative;
  display: inline-block;
  color: #162690;
  text-transform: uppercase;
  /* animation: waviy 5s infinite;
  animation-delay: calc(0.1s * var(--i)); */
  opacity: 0.8;
}
/* @keyframes waviy {
  0%,
  40%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
} */
.chartBody {
  margin-left: -5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  height: 100%;
  gap: 5%;
  /* width: 76%; */
}
.zoneTitle {
  margin-top: 2em;
  margin-bottom: 1em;
  /* border: 1px solid; */
  width: 75%;
}
.chartZone {
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#chart {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
}
.chartArea {
  text-align: center;
  display: inline-block;
  /* width: 100%; */
  height: 73%;
}
.experience {
  width: 800px;
  height: 700px;
}

#introduce {
  align-items: center;
  justify-content: center;
  /* pointer-events: none; */
  width: 100%;
  height: 100%;
  display: flex;
  color: black;
}

@font-face {
  font-family: "NanumSquareNeo-Variable";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2")
    format("woff2");
  font-weight: 400;
  font-style: normal;
}

#no {
  font-family: "Roboto Mono", monospace;
  display: inline-block;
  color: #ffa901;
  font-weight: 1000;
}

#sliderArea {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  gap: 1%;
}

#varValue {
  display: inline-block;
  color: #c4a190;
  margin-left: 5px;
}

#varName {
  display: inline-block;
  margin-left: 10px;

  color: white;
}

.fp-controlArrow.fp-next {
  border-color: transparent transparent transparent rgba(255, 170, 1, 0.8);
  right: 70px;
  margin-top: 35px;
}
.fp-controlArrow.fp-prev {
  left: 70px;
  border-color: transparent rgba(255, 170, 1, 0.8) transparent transparent;
  margin-top: 35px;
}

#var {
  display: inline-block;
  margin-left: 15px;

  color: #4985a4;
}
#codeLine {
  display: flex;
  align-items: center;
}
#codeNumber {
  display: inline-block;
  margin-left: 3px;
  color: #fafafa;
}

#businessCard {
  font-size: 12px;
  font-family: "Roboto Mono", monospace;
  padding: 10px;
  margin-top: 25px;
  width: 315px;
  border-radius: 10px;
  height: 235px;
  box-shadow: 5px 5px 5px gray;
  background-color: #1e1e1e;
  /* #fef6f0 */
}

#textBox {
  display: flex;
  flex-direction: column;
}

#description {
  color: black;
  margin-top: 30px;
}

#lineBlack {
  width: 30px;
  height: 3px;
  background-color: black;
  margin-top: 20px;
  margin-left: 10px;
}

#projectExplanation #number {
  line-height: 20px;
  font-family: "Roboto Mono", monospace;
  color: #ffa901;
  font-size: 50px;
  font-weight: 500;
}

#projectExplanation #name {
  display: block;
  font-family: monospace;
  margin-left: 10px;
  color: black;
  font-size: 25px;
  font-weight: 30px;
}

#project img {
  width: 100%;
  height: 304px;
}

#projectExplanation {
  margin-left: 20px;
  display: flex;
  justify-content: left;
  align-items: center;

  width: 50%;
  height: 304px;
}

#projectImg {
  display: inline-block;

  width: 50%;
  height: 304px;
}
#project {
  display: flex;
  height: 304px;
}

#nav {
  padding: 30px;
  position: fixed;
  z-index: 1;
  /* margin: 0 auto; */
  margin: 0 50%;
  transform: translateX(-50%);
  display: inline-flex;
  /* display: flex; */
  width: 80%;
  height: 100px;
  justify-content: space-between;
}

.v-timeline-item {
  color: black;
}

#nav li {
  list-style: none;
  display: inline-block;
  padding: 10px;
  font-size: 20px;
}
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}

a:-webkit-any-link {
  color: black;
}

#buttonStyle:hover {
  background-color: #162690;
  color: white;
}

#nav h1 {
  display: inline-block;
}

#nav h1 p {
  display: inline-block;
  font-size: 0.5em;
  font-weight: 100;
  font-family: "Lucida Console", "Courier New", monospace;
}

#snsArea ul {
  display: flex;
  justify-content: center;
  line-height: 50px;
}

#snsArea li {
  padding: 10px;
  display: inline-block;
}

#button {
  margin-top: 10px;
  display: inline-block;
}

#buttonStyle {
  display: inline-block;
  font-size: 20px;
  border-radius: 30px;

  line-height: 30px;
  text-align: center;
  margin-top: 10px;
  margin-right: 10px;
  width: 150px;
  height: 30px;

  border: 1px solid black;
}
#snsArea {
  box-shadow: -5px 0.1px 5px white;
  position: relative;
  top: 460px;
  width: 375px;
  height: 66.3px;
  background-color: #162690;
}

#mainCenterCard {
  box-shadow: -5px -5px 5px #fffefe;
  display: inline-block;
  width: 375px;
  height: 460px;
  background-color: #172690;
  color: #fff;
}

#ExplanationTitle {
  font-size: 100px;
}

#ExplanationSub {
  font-size: 25px;
}

#img {
  margin: 40px;
  border-radius: 50%;
  border: 2px solid black;
  width: 205px;
  height: 205px;
}

#mainCenterExplanation {
  padding: 30px;
  position: inherit;
  width: 425px;
  height: 526.3px;
  display: inline-block;
  background-color: white;
  color: black;
}

#mainCenterCard #content {
  position: absolute;
  text-align: center;
  width: 375px;
  color: white;
}

#blueLine {
  margin: auto;
  margin-bottom: 20px;
  width: 100px;
  height: 3px;
  background-color: blue;
}
#mainLeft {
  display: inline-block;
  background-color: #172690;
  width: 45%;
  height: 100%;
}
#snsImg {
  width: 20px;
  height: 20px;

  filter: invert();
}

#mainCenter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 526.3px;
}

#contentArea {
  /* opacity: 0; */
  /* transition: all 2s; */

  /* opacity: 0; */
  /* transition: all 2s; */
  margin: 0 auto;
  width: 80%;
  height: calc(100% - 100px);
  position: relative;
  top: 100px;
  /* bottom: 0; */
  display: block;
}
#contentArea.section2 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
}
#section2 {
  color: black;
  width: 80%;
  height: 100%;
}
.ImgDetail {
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 1;
  background-color: rgba(122, 70, 165, 0.95);
}
.sectionTitleArea {
  width: 100%;
  text-align: center;
}

.sectionTitle {
  margin-top: 6%;
  font-family: "IBM Plex Mono", monospace;
  display: inline-block;
  font-size: 4em;
  font-weight: 500;
}
#point {
  display: inline-block;
  color: #162690;
  font-size: 3em;
}

.projectArea {
  width: 100%;
  height: 72%;
  border: 1px solid black;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
}
.sectionSubTitle {
  width: 100%;
  text-align: center;
  font-size: 1.1em;
}
.itemImg {
  width: 100%;
  height: 100%;
}
.projectItem {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: relative;
}

#icon {
  width: 25px;
  height: 25px;
  background-color: #162690;
  display: inline-block;
}
#nav a:hover {
  text-decoration: underline;
}
.section {
  color: aliceblue;
}

.fp-tableCell {
  vertical-align: unset;
}

@keyframes rotate-text-up {
  0% {
    transform: translate3d(0, 80px, 0);
    opacity: 0;
  }

  20%,
  80% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  100% {
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }
}

@keyframes fade-text-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 80px, 0);
  }

  50%,
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@media screen and (max-width: 1680px) and (max-height: 1050) {
  .section {
    background-color: #000;
  }
}

@media screen and (min-width: 1200px) and (min-height: 900) {
  .section {
    background-color: red;
  }
}

@media screen and (max-width: 1920px) and (max-height: 1080) {
  .section {
    background-color: yellow;
  }
}

@font-face {
  font-family: "TheJamsil5Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2")
    format("woff2");
  font-weight: 700;
  font-style: normal;
}
</style>
