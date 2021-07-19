import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

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
        department,
        teamName,
        locationOfUse,
        monitorManufacturer,
        desktopManufacturer,
        yearOfMonitorManufacture,
        yearOfDesktopManufacture,
        monitorModelName,
        desktopModelName,
        monitorSize,
        monitorCode,
        desktopCode,
        user,
        ipaddr,
    } = inputs;
    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel>부서명</InputLabel>
                <Select
                    value={department}
                    onChange={onToggle}
                    name="department"
                    fullWidth>
                    <MenuItem value={"기획안전부"}>기획안전부</MenuItem>
                    <MenuItem value={"경영지원부"}>경영지원부</MenuItem>
                    <MenuItem value={"문화체육부"}>문화체육부</MenuItem>
                    <MenuItem value={"생활체육부"}>생활체육부</MenuItem>
                    <MenuItem value={"공원운영부"}>공원운영부</MenuItem>
                    <MenuItem value={"교통환경부"}>교통환경부</MenuItem>
                    <MenuItem value={"감사팀"}>감사팀</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>팀명</InputLabel>
                <Select
                    value={teamName}
                    onChange={onToggle}
                    name="teamName"
                    fullWidth>
                    <MenuItem value={"직속"}>직속</MenuItem>
                    <MenuItem value={"전략기획팀"}>전략기획팀</MenuItem>
                    <MenuItem value={"재난안전팀"}>재난안전팀</MenuItem>
                    <MenuItem value={"인사총무팀"}>인사총무팀</MenuItem>
                    <MenuItem value={"재무회계팀"}>재무회계팀</MenuItem>
                    <MenuItem value={"축구센터팀"}>축구센터팀</MenuItem>
                    <MenuItem value={"북부스포츠센터팀"}>
                        북부스포츠센터팀
                    </MenuItem>
                    <MenuItem value={"자연공원팀"}>자연공원팀</MenuItem>
                    <MenuItem value={"업무시설팀"}>업무시설팀</MenuItem>
                    <MenuItem value={"주차관리팀"}>주차관리팀</MenuItem>
                    <MenuItem value={"-"}>기타</MenuItem>
                </Select>
            </FormControl>
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
            <FormControl className={classes.formControl}>
                <InputLabel>데스크탑 제조사</InputLabel>
                <Select
                    value={desktopManufacturer}
                    onChange={onToggle}
                    name="desktopManufacturer"
                    fullWidth>
                    <MenuItem value={"COMTREE"}>COMTREE</MenuItem>
                    <MenuItem value={"티원엘에스"}>티원엘에스</MenuItem>
                    <MenuItem value={"TG"}>TG</MenuItem>
                    <MenuItem value={"DANAWA"}>DANAWA</MenuItem>
                    <MenuItem value={"SAMSUNG"}>SAMSUNG</MenuItem>
                    <MenuItem value={"꿈뜨래"}>꿈뜨래</MenuItem>
                    <MenuItem value={"Redstone"}>Redstone</MenuItem>
                    <MenuItem value={"Alpha"}>Alpha</MenuItem>
                    <MenuItem value={"LG"}>LG</MenuItem>
                    <MenuItem value={"기타"}>기타</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="데스크탑 모델명"
                    name="desktopModelName"
                    value={desktopModelName}
                    onChange={onToggle}
                />
            </FormControl>
            <FormControl className={classes.textControl}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="데스크탑 제조년월"
                    name="yearOfDesktopManufacture"
                    value={yearOfDesktopManufacture}
                    onChange={onToggle}
                />
            </FormControl>
            <FormControl className={classes.textControl}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="데스크탑 코드명"
                    name="desktopCode"
                    value={desktopCode}
                    onChange={onToggle}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>모니터 제조사</InputLabel>
                <Select
                    value={monitorManufacturer}
                    onChange={onToggle}
                    name="monitorManufacturer"
                    fullWidth>
                    <MenuItem value={"COMTREE"}>COMTREE</MenuItem>
                    <MenuItem value={"티원엘에스"}>티원엘에스</MenuItem>
                    <MenuItem value={"TG"}>TG</MenuItem>
                    <MenuItem value={"DANAWA"}>DANAWA</MenuItem>
                    <MenuItem value={"SAMSUNG"}>SAMSUNG</MenuItem>
                    <MenuItem value={"꿈뜨래"}>꿈뜨래</MenuItem>
                    <MenuItem value={"Redstone"}>Redstone</MenuItem>
                    <MenuItem value={"Alpha"}>Alpha</MenuItem>
                    <MenuItem value={"LG"}>LG</MenuItem>
                    <MenuItem value={"기타"}>기타</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.textControl}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="모니터 모델명"
                    name="monitorModelName"
                    value={monitorModelName}
                    onChange={onToggle}
                />
            </FormControl>
            <FormControl className={classes.textControl}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="모니터 제조년월"
                    name="yearOfMonitorManufacture"
                    value={yearOfMonitorManufacture}
                    onChange={onToggle}
                />
            </FormControl>
            <FormControl className={classes.textControl}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="모니터 코드명"
                    name="monitorCode"
                    value={monitorCode}
                    onChange={onToggle}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>모니터 사이즈</InputLabel>
                <Select
                    value={monitorSize}
                    onChange={onToggle}
                    name="monitorSize"
                    fullWidth>
                    <MenuItem value={"20"}>20</MenuItem>
                    <MenuItem value={"24"}>24</MenuItem>
                    <MenuItem value={"27"}>27</MenuItem>
                    <MenuItem value={"32"}>32</MenuItem>
                </Select>
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
