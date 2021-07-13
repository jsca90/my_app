import { useState, useEffect } from "react";
import { dbService } from "../fbase";
import Input from "../components/Input";

const Home = () => {
  const [inputs, setInputs] = useState({
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

    const monitorObj = {
      user,
      department,
      teamName,
      locationOfUse,
      monitorManufacturer,
      yearOfMonitorManufacture,
      monitorModelName, 
      monitorSize,
      monitorCode,
    };
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
