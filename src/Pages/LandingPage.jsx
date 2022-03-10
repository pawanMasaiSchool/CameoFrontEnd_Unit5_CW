import CelebCard from "../Components/CelebCard"
import LandingCarousel from "../Components/LandingCarousel"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { loginsuccess } from "../Redux/Login/action"

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
            <CelebCard 
                name="Shonali Nagrani"
                profession="Bollywood Model/Actress"
                price="150"
                img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
            />
        </>
    )
}

export default LandingPage