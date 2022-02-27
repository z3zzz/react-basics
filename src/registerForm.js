import React, { useState, useEffect } from "react";
import "./registerForm.css";

function RegisterForm() {
  // 에러 메시지 상태를 정의하고, 상태 관리를 하는 코드를 작성하세요.
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nameErrorText, setNameErrorText] = useState("");
  const [ageErrorText, setAgeErrorText] = useState("");
  const [nameColor, setNameColor] = useState(null);
  const [ageColor, setAgeColor] = useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value.length > 10 || e.target.value.length < 1) {
      setNameErrorText("이름은 1글자 이상 10글자 이하여야 합니다.");
      setNameColor("error-input");
    } else {
      setNameErrorText("");
      setNameColor("normal-input");
    }
  };

  const handleChangeAge = (e) => {
    setAge(parseInt(e.target.value));
    //console.log(age);
    const inputNum = parseInt(e.target.value);
    if (inputNum <= 100 || inputNum >= 1) {
      setAgeErrorText("");
      setAgeColor("normal-input");
    } else {
      setAgeErrorText("나이는 1 이상 100 이하여야 합니다.");
      setAgeColor("error-input");
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
  };
  // name과 age에 따라 에러 메시지를 출력하는 코드를 작성하세요.
  // 그리고 name과 age의 값을 비우는 초기화 버튼도 구현해보세요.
  const initializeForm = () => {
    setName("");
    setAge("");
  };

  return (
    <form className="form-card">
      <div className="form-inner">
        <label htmlFor="name" className={nameColor}>
          이름
        </label>
        <br />
        <input
          className={"form-input " + nameColor}
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          id="name"
          placeholder="이름을 입력해 주세요."
        />
        <div className="error-text error-input">{nameErrorText}</div>
        <hr />

        <label htmlFor="age" className={ageColor}>
          나이
        </label>
        <br />
        <input
          className={"form-input " + ageColor}
          value={age}
          onChange={handleChangeAge}
          type="number"
          name="age"
          id="age"
          placeholder="나이를 입력해 주세요."
        />
        <div className="error-text error-input">{ageErrorText}</div>
        <hr />

        <div className="button-place">
          <button
            onClick={initializeForm}
            className="button button-init"
            type="button"
          >
            초기화
          </button>
          <button
            onClick={submitForm}
            className="button button-submit"
            type="button"
          >
            제출
          </button>
        </div>
        <pre className="debug">
          <code>{JSON.stringify({ name, age }, null, 2)}</code>
        </pre>
      </div>
    </form>
  );
}

export default RegisterForm;
