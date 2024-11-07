import styled from "styled-components";

// import "leaflet/dist/leaflet.css";

import AppHeader from "../components/nav";
// from api

const SubFullWidthImage = styled.div`
  padding: 30px 30px;
  display: flex;
  justify-content: end;
  align-items: end;
  width: 100%;
  height: 90vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 80%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const SubFullContent = styled.div`
  padding: 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;

  position: relative;
  overflow: hidden;
`;
//  플로팅 버튼 스타일
const FloatingButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 110px;
  height: 55px;
  background-color: #ffe812;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  text-decoration: none;
  font-size: 20px;
  gap: 10px;

  &:hover {
    background-color: #ffd700;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100vh;

  background-color: #f9fbfd;
  overflow-y: auto; // 세로 스크롤 가능하게 설정
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; // 세로 방향 정렬
  overflow-y: visible;
`;

const EdgeText = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 0px;
  padding: 20px 40px;

  text-align: center;
`;

const EdgeTitle = styled.div`
  color: white;

  border-radius: 40px;
  font-size: 20px;
  // font-weight: bold;
  text-align: center;
`;
const EdgeSub = styled.div`
  color: white;

  border-radius: 40px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const EdgeTitleBlack = styled.div`
  color: #555;

  border-radius: 40px;
  font-size: 20px;
  // font-weight: bold;
  text-align: center;
`;
const EdgeSubBlack = styled.div`
  color: #555;

  border-radius: 40px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
const EdgeTextBlack = styled.div`
  color: #555;
  // background-color: rgba(0, 0, 0, 0.5); // 반투명 배경
  padding: 20px 40px;
  border-radius: 40px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const StickyHeader = styled(AppHeader)`
  position: sticky; // 스크롤 시 고정
  top: 0;
  z-index: 1000; // 헤더가 다른 요소 위에 나타나도록 설정
  background-color: white; // 스크롤 시 배경색 유지
`;
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  // background-color: #333;
  color: #333;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
`;

const FooterText = styled.div`
  margin: 5px 0;
`;

const Copyright = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #aaa;
`;
// 컴포넌트

// 좌우 배치를 담당하는 메인 컨테이너
const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;

  /* 해상도가 일정 이하로 내려가면 세로 배치로 변경 */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// 이미지 스타일
const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

// 텍스트 컨테이너
const TextContainer = styled.div`
  max-width: 600px;
  line-height: 1.6;
  color: #333;

  /* 반응형 폰트 크기 조절 */
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    color: #666;
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
`;

// 버튼 스타일
const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: #333;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
export default function MainInfo() {
  return (
    <MainContainer>
      <StickyHeader />
      <ContentWrapper>
        <SubFullWidthImage image="/Picture/Picture01.webp">
          <EdgeText>
            <EdgeTitle> Teacher ★'s classes</EdgeTitle>
            <EdgeSub>산림치유</EdgeSub>
          </EdgeText>
        </SubFullWidthImage>
        <SubFullContent>
          <EdgeTextBlack>
            <EdgeTitleBlack> Teacher ★'s classes</EdgeTitleBlack>
            <EdgeSubBlack>종이접기 교실</EdgeSubBlack>
            <br />
            유아, 어린이, 청소년부터 성인까지 누구나 할 수 있는 종이활동입니다. [강의 효과] 소근육을
            자극, 두뇌개발을 도와주고 평면 종이가 입체로 완성되어가는 과정에서 수학, 과학에 대한
            이해와 기하학적 공간 개념을 알게 하여 논리력과 창의력, 집중력 향상에 도움을 줍니다.
          </EdgeTextBlack>
        </SubFullContent>
        <SubFullWidthImage image="/Paper/Paper1.webp">
          <EdgeText>
            <EdgeTitle> Teacher ★'s classes</EdgeTitle>
            <EdgeSub>산림치유</EdgeSub>
          </EdgeText>
        </SubFullWidthImage>
        <SubFullContent>
          <EdgeTextBlack>
            <EdgeTitleBlack> Teacher ★'s classes</EdgeTitleBlack>
            <EdgeSubBlack>종이접기 교실</EdgeSubBlack>
            <br />
            유아, 어린이, 청소년부터 성인까지 누구나 할 수 있는 종이활동입니다. [강의 효과] 소근육을
            자극, 두뇌개발을 도와주고 평면 종이가 입체로 완성되어가는 과정에서 수학, 과학에 대한
            이해와 기하학적 공간 개념을 알게 하여 논리력과 창의력, 집중력 향상에 도움을 줍니다.
          </EdgeTextBlack>
        </SubFullContent>{" "}
        <SubFullWidthImage image="/Paper/Paper1.webp">
          <EdgeText>
            <EdgeTitle> Teacher ★'s classes</EdgeTitle>
            <EdgeSub>종이접기</EdgeSub>
          </EdgeText>
        </SubFullWidthImage>
        <SubFullContent>
          <EdgeTextBlack>
            <EdgeTitleBlack> Teacher ★'s classes</EdgeTitleBlack>
            <EdgeSubBlack>종이접기 교실</EdgeSubBlack>
            <br />
            유아, 어린이, 청소년부터 성인까지 누구나 할 수 있는 종이활동입니다. [강의 효과] 소근육을
            자극, 두뇌개발을 도와주고 평면 종이가 입체로 완성되어가는 과정에서 수학, 과학에 대한
            이해와 기하학적 공간 개념을 알게 하여 논리력과 창의력, 집중력 향상에 도움을 줍니다.
          </EdgeTextBlack>
        </SubFullContent>{" "}
        <SubFullWidthImage image="/Paper/Paper1.webp">
          <EdgeText>
            <EdgeTitle> Teacher ★'s classes</EdgeTitle>
            <EdgeSub>종이접기</EdgeSub>
          </EdgeText>
        </SubFullWidthImage>
        <SubFullContent>
          <EdgeTextBlack>
            <EdgeTitleBlack> Teacher ★'s classes</EdgeTitleBlack>
            <EdgeSubBlack>종이접기 교실</EdgeSubBlack>
            <br />
            유아, 어린이, 청소년부터 성인까지 누구나 할 수 있는 종이활동입니다. [강의 효과] 소근육을
            자극, 두뇌개발을 도와주고 평면 종이가 입체로 완성되어가는 과정에서 수학, 과학에 대한
            이해와 기하학적 공간 개념을 알게 하여 논리력과 창의력, 집중력 향상에 도움을 줍니다.
          </EdgeTextBlack>
        </SubFullContent>
        <SubFullWidthImage image="/Paper/Paper1.webp">
          <EdgeText>
            <EdgeTitle> Teacher ★'s classes</EdgeTitle>
            <EdgeSub>종이접기</EdgeSub>
          </EdgeText>
        </SubFullWidthImage>
        <SubFullContent>
          <EdgeTextBlack>
            <EdgeTitleBlack> Teacher ★'s classes</EdgeTitleBlack>
            <EdgeSubBlack>종이접기 교실</EdgeSubBlack>
            <br />
            유아, 어린이, 청소년부터 성인까지 누구나 할 수 있는 종이활동입니다. [강의 효과] 소근육을
            자극, 두뇌개발을 도와주고 평면 종이가 입체로 완성되어가는 과정에서 수학, 과학에 대한
            이해와 기하학적 공간 개념을 알게 하여 논리력과 창의력, 집중력 향상에 도움을 줍니다.
          </EdgeTextBlack>
        </SubFullContent>
        <RowContainer>
          <Image src="/Paper/Paper1.webp" alt="자격증 과정" />
          <TextContainer>
            <h2>자격증 과정</h2>
            <p>
              노인종이조형 심리 미술 지도사 자격증: 색종이, 한지, 골판지, 습자지 등을 미술 매체로
              미술 수업할 수 있는 노인종이조형 심리 미술지도사 자격증. 미술치료 이론을 배우고 실습을
              통해 심리미술치료를 알아가는 과정. 노인종이조형미술 수업은 어르신들의 인지 및 감각
              운동 기능을 항상 시키고, 무엇보다 자존감을 높여 주어서 삶의 의미나 목적까지도 제공해줄
              수 있는 수업.
            </p>
            <StyledButton>강의 신청</StyledButton>
          </TextContainer>
        </RowContainer>

        <Footer>
          <FooterText>주소: 수원시 영통구 태장로 81, 501호 스타평생교육원 </FooterText>
          <FooterText>연락처: 031-202-0074 대표: 원장:김경환</FooterText>
          <Copyright>© 2024 스타 평생 교육원. All rights reserved.</Copyright>
        </Footer>
      </ContentWrapper>
      <FloatingButton
        href="https://open.kakao.com/o/gF91oLYg"
        target="_blank"
        rel="noopener noreferrer">
        <img src="/icon/kakao1.png" alt="카카오톡 오픈채팅" />
        상담
      </FloatingButton>
    </MainContainer>
  );
}
