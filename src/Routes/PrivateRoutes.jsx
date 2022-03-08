import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function PrivateRoute({path,children,exact}){
    const isAuth= useSelector((state)=>state.login.isAuth)
    return isAuth?(
        <Route exact={exact} path={path}>
            {children}
        </Route>
    ):<Redirect to='/login'/>
}