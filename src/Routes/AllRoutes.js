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
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/events">
                <h1>Events Page</h1>
            </Route>
            <Route exact path="/categories">
                <h1>Categories Page</h1>
            </Route>
        </>
    )
}

export default AllRoutes