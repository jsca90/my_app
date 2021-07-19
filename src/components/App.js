import AppRouter from "./AppRouter";
import React, { useEffect, useState } from "react";
import { authService } from "../fbase";

const App = () => {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        authService.onAuthStateChanged(function (user) {
            if (user) {
                setisLoggedIn(true);
                setUserObj(user);
            } else {
                setisLoggedIn(false);
                setUserObj(null);
            }
            setInit(true);
        });
    }, []);

    return (
        <>
            {init ? (
                <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
            ) : (
                "Initializing..."
            )}
        </>
    );
};

export default App;
