import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import BookingDetailsPage from "../Pages/BookingDetailsPage"
import CelebrityDetail from "../Pages/CelebrityDetail"
import LandingPage from "../Pages/LandingPage"
import LoginPage from "../Pages/LoginPage"
import SignupPage from "../Pages/SignupPage"
import PrivateRoute from "./PrivateRoutes"



const AllRoutes = () => {
    return(
        <>
        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <Route exact path="/about">
            <br/><br/><br/><br/><br/><br/><h1>About Page</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/business">
            <br/><br/><br/><br/><br/><br/><h1>Business Page</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/cameo-calls">
            <br/><br/><br/><br/><br/><br/><h1>Cameo Calls</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/cameo-live">
            <br/><br/><br/><br/><br/><br/><h1>Cameo Live</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/signup">
                <SignupPage />
            </Route>
            <Route exact path="/events">
            <br/><br/><br/><br/><h1>Events Page</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/categories">
            <br/><br/><br/><br/><br/><br/><h1>Categories Page</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/celeb/:celeb_id">
                <CelebrityDetail/>
            </Route>
            <PrivateRoute exact={true} path="/:username/account">
            <br/><br/><br/><br/><br/><br/><h1>Account</h1><br/><br/><br/><br/><br/><br/>
            </PrivateRoute>
            <PrivateRoute exact={true} path="/:username/orders">
            <br/><br/><br/><br/><br/><br/><h1>Orders</h1><br/><br/><br/><br/><br/><br/>
            </PrivateRoute>
            <PrivateRoute exact={true} path="/:username/following">
            <br/><br/><br/><br/><br/><br/><h1>Following</h1><br/><br/><br/><br/><br/><br/>
            </PrivateRoute>
            <Route exact path="/book/:celeb_id">
                <BookingDetailsPage />
            </Route>
            </Switch>
        </>
    )
}

export default AllRoutes