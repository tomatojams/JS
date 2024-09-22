import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Wrapper 스타일드 컴포넌트
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background-color: #ddd;
  padding: 0 50px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/back.webp");
  background-size: cover;
  background-position: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;
  text-align: center;
`;

const BigTitle = styled.div`
  color: #ccc;
  font-size: 36px;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
`;

const SmallTitle = styled.div`
  color: #ccc;
  font-size: 18px;
  text-align: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  background-image: url("/logo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
`;

const SNT = styled.div`
  position: absolute;
  top: 30px;
  left: 50px;
  width: 150px;
  height: 80px;
  z-index: 100;
  background-image: url("/whitelogo.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LoginButton = styled.button`
  width: calc(100% - 20px);
  padding: 10px;
  margin-top: 30px;
  background-color: #1e3a8a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1e2f6a;
  }
`;

const RememberMeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-left: 20px;
`;

const RememberMeLabel = styled.label`
  color: #777;
  margin-left: 8px;
  font-size: 14px;
`;

const CheckBox = styled.input`
  color: #777;
  checked: true;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function LogIn() {
  const navigate = useNavigate();

  // 로그인 필드 초기값 설정
  const id = "tomato";
  const password = "aa112!!1a";
  const rememberMe = true; // 자동 로그인 체크

  const handleClick = (e) => {
    e.preventDefault();
    // 항상 로그인 성공 처리
    navigate("/mainInfo");
  };

  return (
    <Wrapper>
      <SNT />
      <Title>
        <BigTitle>All about embedded device security and digital forensics</BigTitle>
        <SmallTitle>기능데모로 보안상 일부기능은 지원하지 않습니다.</SmallTitle>
      </Title>
      <LoginBox>
        <Logo />
        <LoginForm>
          <LoginButton onClick={handleClick}>드론테스트</LoginButton>
        </LoginForm>
      </LoginBox>
    </Wrapper>
  );
}
