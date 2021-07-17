import { useHistory } from "react-router-dom";
import { authService } from "../fbase";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
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
      <Toolbar className={classes.toolbar}>
        <Button size="small" className={classes.toolbarLink}><Link to="/">Home</Link></Button>
        <Button size="small" className={classes.toolbarLink}><Link to="/List">List</Link></Button>
        <Button size="small" className={classes.toolbarLink}><Link to="/" onClick={onLogOut}>Sign Out</Link></Button>
      </Toolbar>
    </>
  );
};

export default Nav;
