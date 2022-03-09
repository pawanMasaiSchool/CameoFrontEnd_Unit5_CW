import CelebCard from "../Components/CelebCard"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import LandingCarousel from "../Components/LandingCarousel"
import { loginsuccess } from "../Redux/Login/action"
import LandingHighlight from "../Components/LandingHighlight"

const LandingPage = () => {
    const dispatch= useDispatch()
    const handleStatesAfterLogin = (token,user)=>{
        const action= loginsuccess(token,user)
        dispatch(action)
    }
    const location= useLocation()
    console.log(location)
    useEffect(()=>{
        const q = new URLSearchParams(location.search)
        if(q.get("token")!==null){
            handleStatesAfterLogin(q.get("token"),q.get("user"))
        }
    },[])
    return (
        <>
            <LandingCarousel />
            <LandingHighlight title='Featured'/>
            <LandingHighlight title='Bollywood'/>
            <LandingHighlight title='Trending'/>
        </>
    )
}

export default LandingPage