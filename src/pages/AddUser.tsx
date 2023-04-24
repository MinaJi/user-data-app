import React, { useState } from "react";
import styled from "styled-components";
import { useUserDispatch, useUserState } from "../context/UserContext";

const Layout = styled.div`
  margin: 30px;
`;

const Card = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 7px rgba(170, 170, 170, 0.32);
  input {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 10px;
  }
  .left-div {
    width: 30%;
    float: left;
    padding: 10px;
  }
  .right-div {
    width: 70%;
    padding: 20px;
    background-color: red;
  }
  .avatar {
    border: 1px solid #e0e0e0;
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;

function AddUser() {
  const dispatch = useUserDispatch();
  const state = useUserState();
  const [userId, setUserId] = useState(state[state.length - 1].userId + 1);
  const [displayName, setDisplayName] = useState("");
  const [mbti, setMbti] = useState("ISTJ");
  const [bio, setBio] = useState("");
  const [profileUrl, setProfileUrl] = useState("");

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const imgURL = e.target.files[0];
      setProfileUrl(URL.createObjectURL(imgURL));
    }
  };

  const addNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "addUser",
      payload: {
        userId: userId,
        displayName: displayName,
        mbti: mbti,
        bio: bio,
        birthY: 0,
        birthM: 0,
        birthD: 0,
        profileUrl: profileUrl,
      },
    });
    setUserId(userId + 1);
  };

  return (
    <Layout>
      <Card>
        <form onSubmit={addNewUser}>
          <div className="left-div">
            <div className="avatar">
              <p>여기에 아이콘</p>
            </div>
            <input type="file" onChange={uploadImage} />
          </div>
          <div className="right-div">
            <div>
              <label htmlFor="user-displayname">이름</label>
              <input
                id="display-name"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
              />
            </div>
            <div>
              <label htmlFor="user-mbti">mbti</label>
              <select
                id="user-mbti"
                onChange={(e) => setMbti(e.target.value)}
                value={mbti}
              >
                <option value="ISTJ">ISTJ</option>
                <option value="ISFJ">ISFJ</option>
                <option value="INFJ">INFJ</option>
                <option value="INTJ">INTJ</option>
                <option value="ISTP">ISTP</option>
                <option value="ISFP">ISFP</option>
                <option value="INFP">INFP</option>
                <option value="INTP">INTP</option>
                <option value="ESTP">ESTP</option>
                <option value="ESFP">ESFP</option>
                <option value="ENFP">ENFP</option>
                <option value="ENTP">ENTP</option>
                <option value="ESTJ">ESTJ</option>
                <option value="ESFJ">ESFJ</option>
                <option value="ENFJ">ENFJ</option>
                <option value="ENTJ">ENTJ</option>
              </select>
            </div>
            <div>
              <label htmlFor="user-bio">자기소개</label>
              <input
                id="user-bio"
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              />
            </div>
            <div>
              <button type="submit">등록하기</button>
            </div>
          </div>
        </form>
      </Card>
    </Layout>
  );
}

export default AddUser;
