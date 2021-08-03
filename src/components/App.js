import AppRouter from "./AppRouter";
import React, { useEffect, useState } from "react";
import { authService } from "../fbase";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

const App = () => {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(null);
    const classes = useStyles();

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
        < >
            {init ? (
                <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />

            ) : (<div className={classes.root}> <CircularProgress /></div>

            )}
        </>
    );
};

export default App;
