import { useHistory } from "react-router-dom";
import { authService } from "../fbase";

const Nav = () => {
  const history = useHistory();
  const onLogOut = () => {
    authService.signOut();
    history.push("/");
  };
  return <button onClick={onLogOut}>로그아웃</button>;
};

export default Nav;
