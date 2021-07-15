import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Nav from "./Nav";
import Lists from "../routes/Lists";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Nav />}
            <Switch><>
                {isLoggedIn ? (
                    <div
                        style={{
                            maxWidth: 890,
                            width: "100%",
                            margin: "0 auto",
                            marginTop: 80,
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/Lists">
                            <Lists />
                        </Route>
                    </div>
                ) : (
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                    </>
                )}</>
            </Switch>
        </Router>
    );
};

export default AppRouter;
