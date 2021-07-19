import { useState } from "react";
import { authService } from "../fbase";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Auth = () => {
    const [email, setEamil] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();

    const onChange = (e) => {
        const {
            target: { name, value },
        } = e;
        if (name === "email") {
            setEamil(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await authService.signInWithEmailAndPassword(
                email + "@cfmc.or.kr",
                password
            );
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form
                    onSubmit={onSubmit}
                    method="post"
                    className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="ID"
                        name="email"
                        autoFocus
                        value={email}
                        onChange={onChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={onChange}
                        value={password}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
};

export default Auth;
