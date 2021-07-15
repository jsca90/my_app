import { useState } from "react";
import { authService, firebaseInstance } from "../fbase";

const Auth = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value }
    } = e;
    if (name === "id") {
      setId(value);
    } else if (name === "pw") {
      setPw(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService
        .setPersistence(firebaseInstance.auth.Auth.Persistence.SESSION)
        .then(() => {
          setId("");
          setPw("");
          return authService.signInWithEmailAndPassword(id + "@cfmc.or.kr", pw);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode, errorMessage);
        });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div >
      <form onSubmit={onSubmit} method="post" className="authForm">
        <input placeholder="id" type="text" name="id" onChange={onChange} value={id}  className="authInput"/>
        <input placeholder="password" type="password" name="pw" onChange={onChange} value={pw}  className="authInput"/>
        <input type="submit" value="Sign in" className="authInput authSubmit"/>
      </form>
    </div>
  );
};

export default Auth;
