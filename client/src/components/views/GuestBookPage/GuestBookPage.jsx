import React, { useEffect, useState } from "react";
import Axios from "axios";

function GuestBookPage() {
  // 1. header 영역에는 로그인 한 유저의 정보를 출력한다.
  //    아바타, 이미지, 이름 등등
  // 2. comment 영역에는 form에 입력된 정보를 출력한다.
  // 3. form 영역에는 textarea와 button으로 구성된 인터페이스를 출력한다.

  const [Comment, setComment] = useState("");

  const onChangeComment = (event) => {
    setComment(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("form data submit :: ", Comment);
    setComment("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* GuestBook Header */}
      {/* GuestBook Comment */}
      {/* GuestBook Form */}
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          width: "50%",
        }}
        onSubmit={onSubmit}
      >
        <textarea
          style={{ width: "100%", borderRadius: "5px" }}
          onChange={onChangeComment}
          value={Comment}
          placeholder="Enter Your Comment"
        />
        <button style={{ width: "20%", height: "3rem" }} onSubmit={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default GuestBookPage;
