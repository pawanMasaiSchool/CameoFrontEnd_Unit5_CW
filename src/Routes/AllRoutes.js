import { Route } from "react-router-dom"
import BookingPage from "../Pages/BookingPage"
import CelebrityDetail from "../Pages/CelebrityDetail"
import LandingPage from "../Pages/LandingPage"
import LoginPage from "../Pages/LoginPage"
import SignupPage from "../Pages/SignupPage"



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
                <SignupPage />
            </Route>
            <Route exact path="/events">
                <h1>Events Page</h1>
            </Route>
            <Route exact path="/categories">
                <h1>Categories Page</h1><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/:celeb_id">
                <CelebrityDetail/>
            </Route>
            <Route exact path="/book">
                <BookingPage/>
            </Route>
        </>
    )
}

export default AllRoutes