import { Route } from "react-router-dom"
import LandingPage from "../Pages/LandingPage"
import LoginPage from "../Pages/LoginPage"



const AllRoutes = () => {
    return(
        <>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <Route exact path="/business">
                <h1>Business Page</h1>
            </Route>
            <Route exact path="/cameo-calls">
                <h1>Cameo Calls</h1>
            </Route>
            <Route exact path="/cameo-live">
                <h1>Cameo Live</h1>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/signup">
                <h1>Sign up</h1>
            </Route>
            <Route exact path="/events">
                <h1>Events Page</h1>
            </Route>
            <Route exact path="/categories">
                <h1>Categories Page</h1><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Route>
        </>
    )
}

export default AllRoutes