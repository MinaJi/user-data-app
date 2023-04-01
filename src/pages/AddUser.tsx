import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  margin: 30px;
`;

const Card = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  input {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 10px;
  }
  .avatar {
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;

function AddUser() {
  return (
    <Layout>
      <Card>
        <p>유저를 등록하세요</p>
        <form>
          <div className="avatar">
            <p>아이콘</p>
          </div>
          <label htmlFor="display-name">이름</label>
          <input id="display-name" />
        </form>
      </Card>
    </Layout>
  );
}

export default AddUser;
