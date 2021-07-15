import { useState, useEffect } from "react";
import { dbService } from "../fbase";
import Input from "../components/Input";
import InputNotebook from "../components/InputNotebook";

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
        desktopCode: "", // 데스크탑 코드명
        kind: "", // 종류
        notebookManufacturer : "", //노트북 제조사
        yearOfNotebookManufacture : "", //노트북 제조년월
        NotebookModelName : "", // 노트북 모델명
        NotebookCode: "" , // 노트묵 코드명
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
        desktopCode,
        kind,
        notebookManufacturer,
        yearOfNotebookManufacture,
        NotebookModelName,
        NotebookCode
    } = inputs;

    const onToggle = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value 로 설정
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
            desktopCode,
        };
        const monitorObj = {
            user,
            department,
            teamName,
            locationOfUse,
            monitorManufacturer,
            yearOfMonitorManufacture,
            monitorModelName,
            monitorCode,
            monitorSize,
        };
        const notebookObj = {
            user,
            department,
            teamName,
            locationOfUse,
            notebookManufacturer,
            yearOfNotebookManufacture,
            NotebookModelName,
            NotebookCode
        };

        if (kind==="NoteBook"){
            await dbService.collection("Lists").add(notebookObj);
        } else {
            await dbService.collection("Lists").add(monitorObj);
            await dbService.collection("Lists").add(desktopObj);
        }
       

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
            desktopCode: "",
            kind: "",
            notebookManufacturer: "",
            yearOfNotebookManufacture: "",
            NotebookModelName: "",
            NotebookCode: ""
        });
    };

    return (
        
            <form onSubmit={onSubmit} className="factoryForm">
               
               
                <select onChange={onToggle} value={kind} name="kind" className="factoryInput__select ">
                    <option value="">분류</option>
                    <option value="NoteBook">노트북</option>
                </select>
                
                {kind ==="" ? (<Input onToggle={onToggle} inputs={inputs} />) : (<InputNotebook onToggle={onToggle} inputs={inputs}/>)}


                <input type="submit" value="보내기"   className="factoryInput__arrow"/>
                
            </form>
        
    );
};

export default Home;
