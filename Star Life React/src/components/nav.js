import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Link, useNavigate, useMatch } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { userNameState } from "../atom";
import { useState } from "react";
import "@fontsource/cormorant-upright"; // npm install @fontsource/cormorant-upright 필요

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 80px;
  background-color: white;
  border-bottom: 1px solid #ddd;

  /* Media query for mobile */
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
`;

const Nav = styled.nav`
  color: #414040;
  padding: 5px 20px;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;

  /* Hide menu on mobile */
  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    top: 60px;
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
  width: 80px;
  cursor: pointer;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 500;

  /* Adjust font size on mobile */
  @media (max-width: 800px) {
    font-size: 18px;
    width: auto;
  }
`;

export default function AppHeader() {
  // const userName = useRecoilValue(userNameState);

  // const navigate = useNavigate();
  // const matchMonitor = useMatch("/mainInfo");
  // const matchSetting = useMatch("/setting");
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
            <TitleSubSpan style={{ fontSize: "18px" }}>life education</TitleSubSpan>
          </TitleSpan>
        </Link>
      </NavItem>

      {/* Desktop Navigation */}
      <Nav open={menuOpen}>
        <Link
          to="/paper"
          style={{ textDecoration: "none", color: "#414040" }}
          onClick={handleNavLinkClick}>
          <NavItem>
            <MenuSpan>한국종이접기 영통지회</MenuSpan>
          </NavItem>
        </Link>
        <Link
          to="/forest"
          style={{ textDecoration: "none", color: "#414040" }}
          onClick={handleNavLinkClick}>
          <NavItem>
            <MenuSpan>산림치유</MenuSpan>
          </NavItem>
        </Link>
        <Link
          to="/craft"
          style={{ textDecoration: "none", color: "#414040" }}
          onClick={handleNavLinkClick}>
          <NavItem>
            <MenuSpan>공예</MenuSpan>
          </NavItem>
        </Link>
        <Link
          to="/picture"
          style={{ textDecoration: "none", color: "#414040" }}
          onClick={handleNavLinkClick}>
          <NavItem>
            <MenuSpan>미술치료</MenuSpan>
          </NavItem>
        </Link>
        <Link
          to="/lecture"
          style={{ textDecoration: "none", color: "#414040" }}
          onClick={handleNavLinkClick}>
          <NavItem>
            <MenuSpan>강의소개</MenuSpan>
          </NavItem>
        </Link>
        <Link
          to="/board"
          style={{ textDecoration: "none", color: "#414040" }}
          onClick={handleNavLinkClick}>
          <NavItem>
            <MenuSpan>강사이력, 문의</MenuSpan>
          </NavItem>
        </Link>
      </Nav>

      {/* Mobile Menu Button */}
      <MenuButton onClick={toggleMenu}>{menuOpen ? "✖" : "☰"}</MenuButton>
    </Header>
  );
}