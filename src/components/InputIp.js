import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: "100%",
        marginTop: theme.spacing(3),
    },
    textControl: {
        minWidth: "100%",
        marginTop: theme.spacing(1),
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}));

const InputBasic = ({ onToggle, inputs }) => {
    const classes = useStyles();
    const {
        ipaddr,
        locationOfUse,

        user,
    } = inputs;
    return (
        <>
            <FormControl className={classes.textControl}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="사용위치"
                    name="locationOfUse"
                    value={locationOfUse}
                    onChange={onToggle}
                />
            </FormControl>
            <FormControl className={classes.textControl}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="IP주소"
                    name="ipaddr"
                    value={ipaddr}
                    onChange={onToggle}
                />
            </FormControl>

            <FormControl className={classes.textControl}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="사용자명"
                    name="user"
                    value={user}
                    onChange={onToggle}
                />
            </FormControl>
        </>
    );
};

export default InputBasic;
