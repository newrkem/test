import React, { useState } from "react";
import "./App.css";

function User(props) {
  return <div className="square-style">{props.user.name}</div>;
}

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "react를 배워봅시다." },
    // { id: 2, name: "송강" },
    // { id: 3, name: "김유정" },
    // { id: 4, name: "구교환" },
  ]);
  const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  const addUseHandler = () => {
    const newUser = {
      id: users.length + 1,
      // age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };
  return (
    <div>
      <header className="hd">
        <input
          value={name}
          placeholder="이름을 입력해주세요"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addUseHandler}>추가하기</button>
      </header>
      <div className="todo">
        <span>my todo list</span>
      </div>
      <div className="app-style">
        {users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </div>
      {/* <input
        value={name}
        placeholder="이름을 입력해주세요"
        onChange={(e) => setName(e.target.value)}
      />
      {/* <input
        value={age}
        placeholder="나이를 입력해주세요"
        onChange={(e) => setAge(e.target.value)}
      /> */}
      {/* <button onClick={addUseHandler}>추가하기</button> */}
    </div>
  );
};

export default App;
