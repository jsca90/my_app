import { useState, useEffect } from "react";
import { dbService } from "../fbase";
import Input from "../components/Input";

const Home = () => {
  const [inputs, setInputs] = useState({
    comCodeNum: "",
    MoCodeNum: "",
    CodeNum: "",
    dept: "",
    deptTeam: "",
    selected: "",
    useName: "",
    mSize: "",
    makeYear: ""
  });
  const {
    codeNum,
    dept,
    deptTeam,
    selected,
    useName,
    mSize,
    makeYear
  } = inputs;
  const onClick = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const nweetObj = {
      codeNum: codeNum,
      dept: dept,
      deptTeam: deptTeam,
      selected: selected,
      useName: useName,
      mSize: mSize,
      makeYear: makeYear,
      createdAt: Date.now()
    };

    await dbService.collection("Notebook").add(nweetObj);

    console.log(nweetObj);
    setInputs({
      codeNum: "",
      dept: "",
      deptTeam: "",
      selected: "",
      useName: "",
      mSize: "",
      makeYear: ""
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <select name="selected" onChange={onClick} value={selected}>
          <option value="">분류</option>
          <option value="노트북" name="notebook">
            노트북
          </option>
        </select>
        {selected === "" ? (
          <Input onClick={onClick} inputs={inputs} />
        ) : (
          <h1>asdasd</h1>
        )}

        <input type="submit" value="보내기" />
      </form>
    </div>
  );
};

export default Home;
