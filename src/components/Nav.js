import { useHistory } from "react-router-dom";
import { authService } from "../fbase";
import { Link } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  const onLogOut = () => {
    authService.signOut();
    history.push("/");
  };
  return (<><button onClick={onLogOut}>로그아웃</button>
    <Link to="/Lists"><button>리스트</button></Link></>);
};

export default Nav;
