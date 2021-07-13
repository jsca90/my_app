import { useState } from "react";

const Home = () => {
    const [inputs, setInputs] = useState({
        codeNum : "",
        dept : "",
        deptTeam : "",
        selected : "",
        useName : "",
        mSize : "",
    });
    const { codeNum, dept, deptTeam, selected, useName, mSize } = inputs;
    const onClick = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value 로 설정
        });
        
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <select name="selected" onChange={onClick}>
                    <option value="">분류</option>
                    <option value="모니터" name="moniter">
                        모니터
                    </option>
                    <option value="데스크탑" name="desktop">
                        데스크탑
                    </option>
                    <option value="노트북" name="notebook">
                        노트북
                    </option>
                </select>
                {selected === "모니터" ? <input
                    type="text"
                    placeholder="사이즈"
                    name="mSize"
                    onChange={onClick}
                />: ""}
                <input
                    type="text"
                    placeholder="코드번호"
                    name="codeNum"
                    onChange={onClick}
                />
                <input
                    type="text"
                    placeholder="부서명"
                    name="dept"
                    onChange={onClick}
                />
                <input
                    type="text"
                    placeholder="팀명"
                    name="deptTeam"
                    onChange={onClick}
                />
                <input
                    type="text"
                    placeholder="사용자명"
                    name="useName"
                    onChange={onClick}
                />

                <input type="submit" value="보내기" />
            </form>
            
        </div>
    );
};

export default Home;
