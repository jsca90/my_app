import { useState } from "react";
import { dbService } from "../fbase";
import InputBasic from "../components/InputBasic";
import InputNotebook from "../components/InputNotebook";
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    formControl: {
        // margin: theme.spacing(1),
        minWidth: '100%',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Home = () => {
    const classes = useStyles();
    const [inputs, setInputs] = useState({
        user: "", // 사용자
        department: "", // 부서명
        teamName: "", // 팀명
        locationOfUse: "", // 사용위치
        monitorManufacturer: "", // 모니터 제조사
        desktopManufacturer: "", // 데스크탑 제조사
        yearOfMonitorManufacture: "", // 모니터 제조년월
        yearOfDesktopManufacture: "", // 데스크탑 제조년월
        monitorModelName: "", // 모니터 모델명
        desktopModelName: "", // 데스크탑 모델명
        monitorSize: "", // 모니터 사이즈
        monitorCode: "", // 모니터 코드명
        desktopCode: "", // 데스크탑 코드명
        kind: "", // 종류
        notebookManufacturer: "", //노트북 제조사
        yearOfNotebookManufacture: "", //노트북 제조년월
        NotebookModelName: "", // 노트북 모델명
        NotebookCode: "", // 노트묵 코드명
    });
    const {
        user,
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
        kind,
        notebookManufacturer,
        yearOfNotebookManufacture,
        NotebookModelName,
        NotebookCode
    } = inputs;

    const onToggle = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value 로 설정
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();


        const desktopObj = {
            kind: "데스크탑",
            user,
            department,
            teamName,
            locationOfUse,
            Manufacturer: desktopManufacturer.toUpperCase(),
            yearOfManufacture: yearOfDesktopManufacture,
            ModelName: desktopModelName,
            Code: desktopCode.toUpperCase(),
        };
        const monitorObj = {
            kind: "모니터",
            user,
            department,
            teamName,
            locationOfUse,
            Manufacturer: monitorManufacturer,
            yearOfManufacture: yearOfMonitorManufacture,
            ModelName: monitorModelName.toUpperCase(),
            Code: monitorCode.toUpperCase(),
            monitorSize,
        };
        const notebookObj = {
            kind,
            user,
            department,
            teamName,
            locationOfUse,
            Manufacturer: notebookManufacturer,
            yearOfManufacture: yearOfNotebookManufacture,
            ModelName: NotebookModelName.toUpperCase(),
            Code: NotebookCode.toUpperCase(),
        };

        if (kind === "노트북") {
            await dbService.collection("Lists").add(notebookObj);
        } else {
            await dbService.collection("Lists").add(monitorObj);
            await dbService.collection("Lists").add(desktopObj);
        }


        setInputs({
            user: "",
            department: "",
            teamName: "",
            locationOfUse: "",
            monitorManufacturer: "",
            desktopManufacturer: "",
            yearOfMonitorManufacture: "",
            yearOfDesktopManufacture: "",
            monitorModelName: "",
            desktopModelName: "",
            monitorSize: "",
            monitorCode: "",
            desktopCode: "",
            kind: "",
            notebookManufacturer: "",
            yearOfNotebookManufacture: "",
            NotebookModelName: "",
            NotebookCode: ""
        });
    };

    return (


        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form onSubmit={onSubmit} method="post" className={classes.form}>
                    <FormControl className={classes.formControl}>
                        <InputLabel>구분</InputLabel>
                        <Select
                            value={kind}
                            autoFocus
                            onChange={onToggle}
                            name="kind"
                            fullWidth
                        >
                            <MenuItem value={""}>기본</MenuItem>
                            <MenuItem value={"노트북"}>노트북</MenuItem>
                        </Select>
                    </FormControl>
                    {kind === "" ? (<InputBasic onToggle={onToggle} inputs={inputs} />) : (<InputNotebook onToggle={onToggle} inputs={inputs} />)}


                    <Button type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>Send Data</Button>

                </form>
            </div>
        </Container>





    );
};

export default Home;
