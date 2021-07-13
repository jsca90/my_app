const Input = ({ onClick, inputs }) => {
  const {
    codeNum,
    dept,
    deptTeam,
    selected,
    useName,
    mSize,
    makeYear
  } = inputs;
  return (
    <>
      <input
        type="text"
        placeholder="코드번호"
        name="codeNum"
        onChange={onClick}
        value={codeNum}
      />
      <input
        type="text"
        placeholder="부서명"
        name="dept"
        onChange={onClick}
        value={dept}
      />
      <input
        type="text"
        placeholder="팀명"
        name="deptTeam"
        onChange={onClick}
        value={deptTeam}
      />
      <input
        type="text"
        placeholder="제조년월"
        name="makeYear"
        onChange={onClick}
        value={makeYear}
      />
      <input
        type="text"
        placeholder="사용자명"
        name="useName"
        onChange={onClick}
        value={useName}
      />
    </>
  );
};

export default Input;
