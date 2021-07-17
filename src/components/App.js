import AppRouter from "./AppRouter";
import React, { useEffect, useState } from "react";
import { authService } from "../fbase";

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged(function (user) {
      if (user) {
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}</>
  );
};

export default App;
