import React, { useState } from "react";
import "./NewRoutine.css";
import NewRoutineComponent from "./NewRoutineComponent";

function NewRoutine() {
  const data = [
    { 이름: "홍길동", 나이: 30, 직업: "개발자" },
    { 이름: "이순신", 나이: 35, 직업: "디자이너" },
    { 이름: "장보고", 나이: 40, 직업: "마케터" },
  ];

  const columns = data.map((item, index) => (
    <table key={index}>
      <tbody>
        {Object.entries(item).map(([key, value], i) => (
          <tr key={i}>
            <th>{key}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ));

  //버튼
  const [button] = useState(true);

  //회원번호 입력
  const [state, setState] = useState({
    author: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleSubmit = () => {
  //     fetch(
  //       `https://port-0-gowo-12fhqa2llodwi7b3.sel5.cloudtype.app/routine?password=${state.author}`,
  //       {
  //         method: "PUT",
  //         // headers: {
  //         //   Authorization: `${token}`,
  //         // },
  //         body: formData,
  //       }
  //     )
  //       .then((response) => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         throw new Error("네트워크 응답이 실패했습니다.");
  //       })
  //       .then((data) => {
  //         alert("성공!");
  //         console.log(data.result);
  //         window.location.reload();
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     //console.log(state);
  //   };

  //라디오 박스
  // const [genderOption, setGenderOption] = useState("");
  // const handleGenderChange = (e) => {
  //     setGenderOption(e.target.value);
  // };

  // const [ageOption, setAgeOption] = useState("");
  // const handleAgeChange = (e) => {
  //     setAgeOption(e.target.value);
  // };

  // const [exerciseOption, setExerciseOption] = useState("");
  // const handleExerciseChange = (e) => {
  //     setExerciseOption(e.target.value);
  // };

  // const [locationOption, setLocationOption] = useState("");
  // const handleLocationChange = (e) => {
  //     setLocationOption(e.target.value);
  // };

  // const [equipmentOption, setEquipmentOption] = useState("");
  // const handleEquipmentChange = (e) => {
  //     setEquipmentOption(e.target.value);
  // };

  return (
    <>
      {/* <nav className="check-user-text"> */}
      {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
            {columns}
        </div> */}

      <NewRoutineComponent></NewRoutineComponent>
      {/* </nav> */}
      {/* <nav className="check-user-text">
        <ul>
          <li className="mypagetext">루틴저장번호 </li>
          <li className="input-userid">
            <input
              name="author"
              value={state.author}
              onChange={handleChangeState}
            />
          </li>
          <li className="usercheck-button">
            {button && (
              <AnotherButton buttonStyle="btn--outline" onClick={handleSubmit}>
                저장
              </AnotherButton>
            )}
          </li>
        </ul>
      </nav> */}
    </>
  );
}

export default NewRoutine;
