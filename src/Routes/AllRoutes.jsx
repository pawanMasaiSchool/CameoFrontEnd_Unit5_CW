import { Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import AccountPage from "../Pages/AccountPage"
import AdminDashborad from "../Pages/AdminDashboard"
import AdminLoginPage from "../Pages/AdminLoginPage"
import BookingDetailsPage from "../Pages/BookingDetailsPage"
import CategoryPage from "../Pages/CategoryPage"
import CelebrityDetail from "../Pages/CelebrityDetail"
import Following from "../Pages/Following"
import LandingPage from "../Pages/LandingPage"
import LoginPage from "../Pages/LoginPage"
import OrderPage from "../Pages/OrderPage"
import PaymentPage from "../Pages/PaymentPage"
import SignupPage from "../Pages/SignupPage"
import CelebrityLoginPage from "../Pages/CelebrityLoginPage"
import PrivateRoute from "./PrivateRoutes"
import CelebrityDashboard from "../Pages/CelebrityDashboard"



const AllRoutes = () => {
    return(
        <>
        <Switch>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <Route exact path="/about">
            <br/><br/><br/><br/><br/><br/><h1 style={{color:"white"}}>About Page</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/business">
            <br/><br/><br/><br/><br/><br/><h1 style={{color:"white"}}>Business Page</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/cameo-calls">
            <br/><br/><br/><br/><br/><br/><h1 style={{color:"white"}}>Cameo Calls</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/cameo-live">
            <br/><br/><br/><br/><br/><br/><h1 style={{color:"white"}}>Cameo Live</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/login">
                <LoginPage/>
            </Route>
            <Route exact path="/signup">
                <SignupPage />
            </Route>
            <Route exact path="/events">
            <br/><br/><br/><br/><br/><br/><h1 style={{color:"white"}}>Events</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/categories">
            <br/><br/><br/><br/><br/><br/><h1 style={{color:"white"}}>Category</h1><br/><br/><br/><br/><br/><br/>
            </Route>
            <Route exact path="/categories/:cat_name">
                <CategoryPage />
            </Route>
            <Route exact path="/celeb/:celeb_id">
                <CelebrityDetail/>
            </Route>
            <PrivateRoute exact={true} path="/:username/account">
            <AccountPage/>
            </PrivateRoute>
            <PrivateRoute exact={true} path="/:username/orders">
            <OrderPage/>
            </PrivateRoute>
            <PrivateRoute exact={true} path="/:username/following">
            <Following/>
            </PrivateRoute>
            <PrivateRoute exact={true} path="/book/:celeb_id">
                <BookingDetailsPage />
            </PrivateRoute>
            <PrivateRoute exact={true} path="/payment">
                <PaymentPage/>
            </PrivateRoute>
            <Route exact path="/admin/loginPage">
                <AdminLoginPage />
            </Route>
            <Route exact path="/admin/dashboard">
                <AdminDashborad />
            </Route>
            <Route exact path="/celebrity/login">
                <CelebrityLoginPage/>
            </Route>
            <Route exact path="/celebrity/:celeb_id/dashboard">
                <CelebrityDashboard/>
            </Route>
            </Switch>
        </>
    )
}

export default AllRoutes