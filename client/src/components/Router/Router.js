import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../-----pages/Home";
import Profile from "../-----pages/Profile";
import Jobs from "../-----pages/Jobs";
import BlogPost from "../-----pages/BlogPost";
import { useAuth0 } from "../../contexts/auth-context";

const AppRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/jobs" component={Jobs}></Route>
        <PrivateRoute path="/blogpost" component={BlogPost} />
    </Switch>
)



const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth0();

    return (
        <Route
            {...rest}
            render={props =>
                user.email = "jlbroughton@gmail.com" ?
                    (<Component {...props} />)
                    :
                    (<Redirect to={{ pathname: "/" }} />)
            }
        />
    )
}

export default AppRouter;