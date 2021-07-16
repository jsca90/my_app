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
      user
  } = inputs;
  return (
    <>
      <select onChange={onToggle} value={department} name="department" className="factoryInput__select ">
        <option value="">부서명</option>
        <option value="NoteBook">기획안전부</option>
        <option value="NoteBook">경영지원부</option>
        <option value="NoteBook">문화체육부</option>
        <option value="NoteBook">생활체육부</option>
        <option value="NoteBook">공원운영부</option>
        <option value="NoteBook">교통환경부</option>
        <option value="NoteBook">감사팀</option>
      </select>
     
      <select onChange={onToggle} value={teamName} name="teamName" className="factoryInput__select ">
        <option value="">팀명</option>
        <option value="NoteBook">기획안전부</option>
        <option value="NoteBook">경영지원부</option>
        <option value="NoteBook">문화체육부</option>
        <option value="NoteBook">생활체육부</option>
        <option value="NoteBook">공원운영부</option>
        <option value="NoteBook">교통환경부</option>
        <option value="NoteBook">감사팀</option>
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
      <input
        type="text"
        placeholder="모니터사이즈"
        name="monitorSize"
        onChange={onToggle}
        value={monitorSize}
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

export default Input;
