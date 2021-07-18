import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Lists from "../routes/Lists";
import NewListTable from "../routes/Newtable";

import Nav from "./Nav";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Nav />}
            <Switch>
                <>
                    {isLoggedIn ? (
                        <>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/List">
                                <Lists />
                            </Route>
                            <Route path="/newList">
                                <NewListTable />
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
