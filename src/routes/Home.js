import { useState, useEffect } from "react";
import { dbService } from "../fbase";
import Input from "../components/Input";

const Home = () => {
  const [inputs, setInputs] = useState({
    user: "", // 사용자
    department: "", // 부서명
    teamName: "", // 팀명
    locationOfUse: "", // 사용위치
    monitorManufacturer: "", // 모니터 제조사
    desktopManufacturer: "", // 데스크탑 제조사
    yearOfMonitorManufacture: "", // 모니터 제조년월
    yearOfDesktopManufacture: "", // 데스크탑 제조년월
    monitorModelName: "", // 모니터 모델명
    desktopModelName: "", // 데스크탑 모델명
    monitorSize: "", // 모니터 사이즈
    monitorCode: "", // 모니터 코드명
    desktopCode: "" // 데스크탑 코드명
  });
  const {
    user,
    department,
    teamName,
    locationOfUse,
    monitorManufacturer,
    desktopManufacturer,
    yearOfMonitorManufacture,
    yearOfDesktopManufacture,
    monitorModelName,
    desktopModelName,
    monitorSize,
    monitorCode,
    desktopCode
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

    
    const desktopObj = {
      user,
      department,
      teamName,
      locationOfUse,      
      desktopManufacturer,     
      yearOfDesktopManufacture,     
      desktopModelName,     
      desktopCode
    };
    const monitorObj = {
      user,
      department,
      teamName,
      locationOfUse,      
      desktopManufacturer,     
      yearOfDesktopManufacture,     
      desktopModelName,     
      desktopCode
    };

    await dbService.collection("Lists").add(monitorObj);
    await dbService.collection("Lists").add(desktopObj);


    
    setInputs({
      user: "",
      department: "",
      teamName: "",
      locationOfUse: "",
      monitorManufacturer: "",
      desktopManufacturer: "",
      yearOfMonitorManufacture: "",
      yearOfDesktopManufacture: "",
      monitorModelName: "",
      desktopModelName: "",
      monitorSize: "",
      monitorCode: "",
      desktopCode: ""
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input onClick={onClick} inputs={inputs} />
        <input type="submit" value="보내기" />
      </form>
    </div>
  );
};

export default Home;
