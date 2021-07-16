const Input = ({ onToggle, inputs }) => {
    const {
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
        user,
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
                placeholder="데스크탑제조사"
                name="desktopManufacturer"
                onChange={onToggle}
                value={desktopManufacturer}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="데스크탑모델명"
                name="desktopModelName"
                onChange={onToggle}
                value={desktopModelName}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="데스크탑제조년월"
                name="yearOfDesktopManufacture"
                onChange={onToggle}
                value={yearOfDesktopManufacture}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="데스크탑코드명"
                name="desktopCode"
                onChange={onToggle}
                value={desktopCode}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="모니터제조사"
                name="monitorManufacturer"
                onChange={onToggle}
                value={monitorManufacturer}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="모니터모델명"
                name="monitorModelName"
                onChange={onToggle}
                value={monitorModelName}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="모니터제조년월"
                name="yearOfMonitorManufacture"
                onChange={onToggle}
                value={yearOfMonitorManufacture}
                className="factoryInput__input"
                required
            />
            <input
                type="text"
                placeholder="모니터코드명"
                name="monitorCode"
                onChange={onToggle}
                value={monitorCode}
                className="factoryInput__input"
                required
            />
             <select
                onChange={onToggle}
                value={monitorSize}
                name="monitorSize"
                className="factoryInput__select ">
                <option value="20">20</option>
                <option value="24">24</option>
                <option value="27">27</option>
                
            </select>
            
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

export default Input;
