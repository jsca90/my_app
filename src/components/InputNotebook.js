const InputNotebook = ({ onToggle, inputs }) => {
    const {
        user,
        department,
        teamName,
        locationOfUse,
        notebookManufacturer,
        yearOfNotebookManufacture,
        NotebookModelName,
        NotebookCode,
    } = inputs;
    return (
        <>
            <select
                onChange={onToggle}
                value={department}
                name="department"
                className="factoryInput__select ">
                <option value="">부서명</option>
                <option value="1">기획안전부</option>
                <option value="2">경영지원부</option>
                <option value="3">문화체육부</option>
                <option value="4">생활체육부</option>
                <option value="5">공원운영부</option>
                <option value="6">교통환경부</option>
                <option value="7">감사팀</option>
            </select>
            <select
                onChange={onToggle}
                value={teamName}
                name="teamName"
                className="factoryInput__select ">
                <option value="">팀명</option>
                <option value="0">전략기획팀</option>
                <option value="1">전략기획팀</option>
                <option value="2">재난안전팀</option>
                <option value="3">인사총무팀</option>
                <option value="4">재무회계팀</option>
                <option value="5">축구센터팀</option>
                <option value="6">북부스포츠센터팀</option>
                <option value="7">자연공원팀</option>
                <option value="8">업무시설팀</option>
                <option value="9">주차관리팀</option>
            </select>
            <input
                type="text"
                placeholder="사용위치"
                name="locationOfUse"
                onChange={onToggle}
                value={locationOfUse}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="노트북 제조사"
                name="notebookManufacturer"
                onChange={onToggle}
                value={notebookManufacturer}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="노트북 모델명"
                name="NotebookModelName"
                onChange={onToggle}
                value={NotebookModelName}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="노트북 제조년월"
                name="yearOfNotebookManufacture"
                onChange={onToggle}
                value={yearOfNotebookManufacture}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="노트북 코드명"
                name="NotebookCode"
                onChange={onToggle}
                value={NotebookCode}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="사용자명"
                name="user"
                onChange={onToggle}
                value={user}
                className="factoryInput__input"
                required
            />
        </>
    );
};

export default InputNotebook;
