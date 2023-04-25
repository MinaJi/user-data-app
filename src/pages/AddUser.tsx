import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUserDispatch, useUserState } from "../context/UserContext";

const Layout = styled.div`
  margin: 30px;
`;

const Card = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 0px 7px rgba(170, 170, 170, 0.32);
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  .left-div {
    flex: 30%;
    display: grid;
  }
  .avatar {
    margin: auto;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    width: 180px;
    height: 180px;
    overflow: hidden;
  }
  img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
  .button-div {
    margin: auto;
    padding-top: 20px;
    display: flex;
    button {
      background-color: transparent;
      border: 1px solid #e0e0e0;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0px 3px 4px -3px rgba(170, 170, 170, 0.5);
      margin: 3px;
    }
    label {
      cursor: pointer;
    }
  }
  .right-div {
    flex: 70%;
    .div-form {
      display: grid;
      grid-template-columns: [labels] auto [controls] 1fr;
      grid-auto-flow: row;
      grid-gap: 15px;
      padding: 20px;
    }
    input,
    textarea,
    select {
      grid-column: controls;
      grid-row: auto;
      width: 100%;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0px 3px 4px -3px rgba(170, 170, 170, 0.5);
      box-sizing: border-box;
    }
    label {
      grid-column: labels;
      grid-row: auto;
    }
    textarea {
      height: 100px;
      resize: none;
    }
    .birthday {
      display: flex;
    }
  }
`;

function AddUser() {
  const dispatch = useUserDispatch();
  const state = useUserState();
  const yearOption = Array.from(
    { length: new Date().getFullYear() - 1919 },
    (_, index) => new Date().getFullYear() - index
  );
  const monthOption = Array.from({ length: 12 }, (_, index) => index + 1);
  const dayOption = Array.from({ length: 31 }, (_, index) => index + 1);
  const [form, setForm] = useState({
    userId: state[state.length - 1].userId + 1,
    displayName: "",
    mbti: "ISTJ",
    bio: "",
    birthY: 0,
    birthM: 0,
    birthD: 0,
    profileUrl: "",
  });
  const { userId, displayName, mbti, bio, profileUrl } = form;
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    if (profileUrl === "") {
      setForm({
        ...form,
        profileUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      });
    }
  }, [form, profileUrl]);

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const imgURL = e.target.files[0];
      setForm({ ...form, profileUrl: URL.createObjectURL(imgURL) });
    }
  };

  const deleteProfileImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (profileUrl !== "") {
      setForm({ ...form, profileUrl: "" });
    }
  };

  const addNewUser = (e: React.FormEvent<HTMLFormElement>) => {
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
    setForm({ ...form, userId: userId + 1 });
  };

  return (
    <Layout>
      <Card>
        <StyledForm onSubmit={addNewUser}>
          <div className="left-div">
            <div className="avatar">
              <img src={profileUrl} alt="profile" />
            </div>
            <div className="button-div">
              <div>
                <button type="button">
                  <label htmlFor="file-input">사진 등록</label>
                </button>
                <input
                  type="file"
                  accept="image/*"
                  id="file-input"
                  style={{ display: "none" }}
                  onChange={uploadImage}
                />
              </div>
              <div>
                <button onClick={deleteProfileImage} type="button">
                  사진 삭제
                </button>
              </div>
            </div>
          </div>
          <div className="right-div">
            <div className="div-form">
              <label htmlFor="user-display-name">이름</label>{" "}
              <input
                id="user-display-name"
                name="displayName"
                onChange={onChange}
                value={displayName}
              />
              <label htmlFor="user-mbti">MBTI</label>
              <select
                id="user-mbti"
                name="mbti"
                onChange={onChange}
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
              <label htmlFor="birthday">생년월일</label>
              <div className="birthday">
                <select id="birthday">
                  {yearOption.map((year) => (
                    <option key={year} value={year}>
                      {year}년
                    </option>
                  ))}
                </select>
                <select id="year-select">
                  {monthOption.map((month) => (
                    <option key={month} value={month}>
                      {month}월
                    </option>
                  ))}
                </select>
                <select id="year-select">
                  {dayOption.map((day) => (
                    <option key={day} value={day}>
                      {day}일
                    </option>
                  ))}
                </select>
              </div>
              <label htmlFor="user-bio">자기소개</label>
              <textarea
                id="user-bio"
                name="bio"
                onChange={onChange}
                value={bio}
              />
            </div>
            <div>
              <button type="submit">등록하기</button>
            </div>
          </div>
        </StyledForm>
      </Card>
    </Layout>
  );
}

export default AddUser;
