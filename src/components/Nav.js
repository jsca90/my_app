import { useHistory } from "react-router-dom";
import { authService } from "../fbase";
import { Link } from "react-router-dom";

const Nav = () => {
  const history = useHistory();
  const onLogOut = () => {
    authService.signOut();
    history.push("/");
  };
  return (
  <nav>
    <ul style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          메인으로
        </Link>
      </li>
      <li>
        <Link
          to="/Lists"
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
         리스트
        </Link>
      </li>
    </ul>
  </nav>
  
  
  
  

    );
};

export default Nav;
