import { useHistory } from "react-router-dom";
import { authService } from "../fbase";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },

    toolbarSecondary: {
        justifyContent: "space-between",
        overflowX: "auto",
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    textLink: {
        textDecoration: "none",
        color: "black",
    },
}));

const Nav = () => {
    const classes = useStyles();
    const history = useHistory();

    const onLogOut = () => {
        authService.signOut();
        history.push("/");
    };
    return (
        <>
            <Toolbar className={classes.toolbarSecondary}>
                <Button size="medium" className={classes.toolbarLink}>
                    <Link to="/" className={classes.textLink}>
                        Home
                    </Link>
                </Button>
                {/* <Button size="medium" className={classes.toolbarLink}>
                    <Link to="/List" className={classes.textLink}>
                        List
                    </Link>
                </Button> */}
                <Button size="medium" className={classes.toolbarLink}>
                    <Link to="/newList" className={classes.textLink}>
                        NewList
                    </Link>
                </Button>
                <Button size="medium" className={classes.toolbarLink}>
                    <Link
                        to="/"
                        className={classes.textLink}
                        onClick={onLogOut}>
                        Sign Out
                    </Link>
                </Button>
            </Toolbar>
        </>
    );
};

export default Nav;
