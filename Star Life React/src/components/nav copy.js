import styled from "styled-components";
import { Link } from "react-router-dom";

import { useState } from "react";
import "@fontsource/cormorant-upright"; // npm install @fontsource/cormorant-upright 필요

// const Header = styled.header`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   justify-content: center;
// `;

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: space-between;
  padding: 1px 40px;
  background-color: white;

  position: relative; /* 추가 */
  max-width: 1200px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0px 0px;
    border-top: 1px solid #ddd;
  }
`;
const Row = styled.div`
  display: flex;
  width: 70%;
`;
const Nav = styled.nav`
  color: #414040;
  width: 80%;
  padding: 5px 20px;
  display: flex;

  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    position: fixed; /* absolute 대신 fixed 사용 */
    bottom: 65px;
    right: 20px;
    background-color: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    gap: 20px;
    z-index: 1000;
  }
`;

const MenuButton = styled.button`
  display: none;
  margin-right: 30px;

  /* Show menu button on mobile */
  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
`;

const MenuSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;
  white-space: nowrap;
  width: 100%; /* 글자 길이에 맞춘 좌우폭 */
  flex: 0 0 auto; /* 컨텐츠에 맞게 크기 고정 */
  /* font-family: "NanumSquareRound", sans-serif; */
  font-family: "S-Core_Dream", sans-serif;
  font-weight: 500;
`;

const TitleSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 200px;
  font-family: "Cormorant Upright", serif;
  font-weight: bold;
`;

const TitleSubSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 200px;
  font-family: "Cormorant Upright", serif;
  font-weight: bold;
`;
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  width: auto;
  cursor: pointer;
  font-size: 16px;
  padding: 12px 10px;
  border-radius: 5px;
  font-weight: 500;

  /* Adjust font size on mobile */
  @media (max-width: 800px) {
    font-size: 16px;
    width: auto;
  }

  /* Mobile: Make clickable area full width */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu when navigation occurs
  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Header>
      {" "}
      <NavItem>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#414040",
            height: "100%",
          }}
          onClick={handleNavLinkClick}>
          <TitleSpan>
            <TitleSubSpan style={{ fontSize: "22px" }}>Star</TitleSubSpan>
            <TitleSubSpan style={{ fontSize: "16px" }}>life long education</TitleSubSpan>
            {/* <TitleSubSpan style={{ fontSize: "22px" }}>Star</TitleSubSpan>
            <TitleSubSpan style={{ fontSize: "18px" }}>life long</TitleSubSpan> */}
          </TitleSpan>
        </Link>
      </NavItem>
      <Row>
        {/* Desktop Navigation */}
        <Nav open={menuOpen}>
          <Link
            to="/paper"
            style={{
              textDecoration: "none",
              color: "#414040",
              display: "block", // 모바일에서 클릭 범위를 넓히기 위해 추가
              width: "100%",
            }}
            onClick={handleNavLinkClick}>
            <NavItem>
              <MenuSpan>한국종이접기 영통지회</MenuSpan>
            </NavItem>
          </Link>
          <Link
            to="/forest"
            style={{
              textDecoration: "none",
              color: "#414040",
              display: "block", // 모바일에서 클릭 범위를 넓히기 위해 추가
              width: "100%",
            }}
            onClick={handleNavLinkClick}>
            <NavItem>
              <MenuSpan>산림치유</MenuSpan>
            </NavItem>
          </Link>
          <Link
            to="/craft"
            style={{
              textDecoration: "none",
              color: "#414040",
              display: "block", // 모바일에서 클릭 범위를 넓히기 위해 추가
              width: "100%",
            }}
            onClick={handleNavLinkClick}>
            <NavItem>
              <MenuSpan>공예</MenuSpan>
            </NavItem>
          </Link>
          <Link
            to="/picture"
            style={{
              textDecoration: "none",
              color: "#414040",
              display: "block", // 모바일에서 클릭 범위를 넓히기 위해 추가
              width: "100%",
            }}
            onClick={handleNavLinkClick}>
            <NavItem>
              <MenuSpan>미술치료</MenuSpan>
            </NavItem>
          </Link>
          <Link
            to="/lecture"
            style={{
              textDecoration: "none",
              color: "#414040",
              display: "block", // 모바일에서 클릭 범위를 넓히기 위해 추가
              width: "100%",
            }}
            onClick={handleNavLinkClick}>
            <NavItem>
              <MenuSpan>강의소개</MenuSpan>
            </NavItem>
          </Link>
          <Link
            to="/board"
            style={{
              textDecoration: "none",
              color: "#414040",
              display: "block", // 모바일에서 클릭 범위를 넓히기 위해 추가
              width: "100%",
            }}
            onClick={handleNavLinkClick}>
            <NavItem>
              <MenuSpan>강사이력, 문의</MenuSpan>
            </NavItem>
          </Link>
        </Nav>

        {/* Mobile Menu Button */}
      </Row>{" "}
      <MenuButton onClick={toggleMenu}>{menuOpen ? "✖" : "☰"}</MenuButton>
    </Header>
  );
}
