import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
// import Lists from "../routes/Lists";
import IpData from "../routes/IpData";

import AllData from "../routes/AllData";

import Nav from "./Nav";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Nav userObj={userObj} />}
            <Switch>
                <>
                    {isLoggedIn ? (
                        <>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/List">
                                <IpData />
                            </Route>
                            <Route path="/newList">
                                <AllData />
                            </Route>
                        </>
                    ) : (
                        <>
                            <Route exact path="/">
                                <Auth />
                            </Route>
                        </>
                    )}
                </>
            </Switch>
        </Router>
    );
};

export default AppRouter;
