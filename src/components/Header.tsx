import React from "react";
import styled from "styled-components";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: sticky;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
`;

const TitleDiv = styled.div`
  width: max-content;
  margin-left: 30px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;

const MenuItem = styled.div`
  width: max-content;
  font-size: 15px;
  font-weight: 500;
  margin-left: 25px;
  color: #535353;
  cursor: pointer;
  :hover {
    color: #131313;
  }
`;

const ButtonDiv = styled.div`
  margin-right: 30px;
  padding: 8px;
  border: none;
  border-radius: 20px;
  color: #535353;
  font-size: 14px;
  cursor: pointer;
  .wrapper {
    display: flex;
    margin: 0 auto;
    align-items: center;
  }
  .icon {
    font-size: 20px;
    margin-right: 8px;
  }
  :hover {
    color: #131313;
  }
`;

function Header() {
  const navi = useNavigate();

  return (
    <Wrapper>
      <Menu>
        <TitleDiv onClick={() => navi("/")}>
          <p>회원정보</p>
        </TitleDiv>
        <MenuItem onClick={() => navi("/user-data")}>
          <p>회원 리스트</p>
        </MenuItem>
      </Menu>
      <ButtonDiv onClick={() => navi("/add")}>
        <div className="wrapper">
          <div className="icon">
            <AiOutlineUserAdd />
          </div>
          <div>
            <span>등록하기</span>
          </div>
        </div>
      </ButtonDiv>
    </Wrapper>
  );
}

export default Header;
