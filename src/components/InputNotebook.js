const InputNotebook = ({ onToggle, inputs }) => {
    const { 
            user,
            department,
            teamName,
            locationOfUse,
            notebookManufacturer,
            yearOfNotebookManufacture,
            NotebookModelName,
            NotebookCode
    } = inputs;
    return(<>
        <input
          type="text"
          placeholder="부서명"
          name="department"
          onChange={onToggle}
          value={department}
          className="factoryInput__input"
        />
        <input
          type="text"
          placeholder="팀명"
          name="teamName"
          onChange={onToggle}
          value={teamName}
          className="factoryInput__input"
        />
        <input
          type="text"
          placeholder="사용위치"
          name="locationOfUse"
          onChange={onToggle}
          value={locationOfUse}
          className="factoryInput__input"
        />
        <input
          type="text"
          placeholder="노트북 제조사"
          name="notebookManufacturer"
          onChange={onToggle}
          value={notebookManufacturer}
          className="factoryInput__input"
        />
        <input
          type="text"
          placeholder="노트북 모델명"
          name="NotebookModelName"
          onChange={onToggle}
          value={NotebookModelName}
          className="factoryInput__input"
        />
        <input
          type="text"
          placeholder="노트북 제조년월"
          name="yearOfNotebookManufacture"
          onChange={onToggle}
          value={yearOfNotebookManufacture}
          className="factoryInput__input"
        />
        <input
          type="text"
          placeholder="노트북 코드명"
          name="NotebookCode"
          onChange={onToggle}
          value={NotebookCode}
          className="factoryInput__input"
        />
        <input
          type="text"
          placeholder="사용자명"
          name="user"
          onChange={onToggle}
          value={user}
          className="factoryInput__input"
        />
      </>)
}

export default InputNotebook;