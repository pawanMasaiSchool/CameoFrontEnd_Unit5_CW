import Box from "@mui/material/Box"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link } from "react-router-dom";
import styling from "./Navbar.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { logoutsuccess } from "../Redux/Login/action";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Navbar = () => {
    const isAuth = useSelector((state)=>state.login.isAuth)
    const token = useSelector((state)=>state.login.token)
    const dispatch = useDispatch()
    const history = useHistory()

    const [profile,setProfile] = useState(null)
    const [username,setUsername] = useState(null)
    const fetchData = () => {
        // return axios.get(`http://localhost:5000/user/profile`,{
        // when heroku link does not work we can run this on local host

        return axios.get(`https://cameo-backend.herokuapp.com/user/profile`,{
            headers: {
              'authorization': `Bearer ${token}`
            }
          })
    }
    const getUser=async ()=>{
        try {
            const {data} = await fetchData();
            setProfile(data.profile_picture)
            setUsername(data.username)
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleLogout=()=>{
        const action= logoutsuccess()
        dispatch(action)
        // window.open("http://localhost:5000/auth/logout", "_self");
        // when heroku link does not work we can run this on local host

        window.open("https://cameo-backend.herokuapp.com/auth/logout", "_self");
    }

    const [searchState, setSearchState] = useState("");
    const [searchId, setSearchId] = useState('');

    const fetchCeleb = () => {
        // return axios.get(`http://localhost:5000/celebs/search/${searchState}`);
        // when heroku link does not work we can run this on local host

        return axios.get(`https://cameo-backend.herokuapp.com/celebs/search/${searchState}`);
    }

    const handleSearch = async () => {
        let data;
        data = await fetchCeleb();
        if(data.length === 0){
            alert("No such Celebrity Found");
            return
        }
        const celebrity_id = data.data[0].celeb_id;
        setSearchId(celebrity_id)
        history.push(`celeb/${celebrity_id}`)
    }


    useEffect(()=>{
        if(isAuth){
            getUser()
        }
    },[isAuth])
    return (
        <Box sx={{
            position:"fixed",
            fontFamily:"sans-serif",
            fontWeight:"700",
            fontSize:"16px",
            height:"60px",
            width:"100%",
            backgroundColor:"black",
            display:"flex",
            flexDirection:"row",
            color:"white",
            justifyContent:"space-evenly",
            gap:"2%",
            zIndex:888,
        }}>
            <Box name='navlinks' sx={{
                // border:"1px solid white",
                color:"white",
                display:"flex",
                flexDirection:"row",
                gap:"7.7%",
                width:"55%",
                margin:"3px",
                
            }}>
                <Link to="/">
                    <img style={{width:"80px",height:"20px",margin:"17px 0px 15px 15px",cursor:"pointer"}} src='https://cdn.cameo.com/staticDir/logo_white.svg' alt="logo" />
                </Link>
                <Box className={styling.mainCategoryBox}>
                    <Link to="/categories" style={{textDecoration:"none", color:"white" }} >
                        Categories
                    </Link>
                    <Box className={styling.allCategoryBox}>
                            <Box className={styling.fieldOfCategory}>
                                <Link to="/categories/Actors" style={{textDecoration:"none", color:"white"}}>Actors</Link>
                                <Box className={styling.smallerCategoriesBox}>
                                    <p className={styling.detailedCate}>Bollywood</p>
                                    <p className={styling.detailedCate}>Hallmark</p>
                                    <p className={styling.detailedCate}>Broadway</p>
                                    <p className={styling.detailedCate}>Netflix</p>
                                    <p className={styling.detailedCate}>Comedy</p>
                                    <p className={styling.detailedCate}>Telenovela</p>
                                    <p className={styling.detailedCate}>Comic-con</p>
                                    <p className={styling.detailedCate}>Video Game Actors</p>
                                    <p className={styling.detailedCate}>Disney</p>
                                    <p className={styling.detailedCate}>Voice Actors</p>
                                    <p className={styling.detailedCate}>HBO</p>
                                    <p className={styling.detailedCate}>View all</p>
                                </Box>
                            </Box>
                            <Box className={styling.fieldOfCategory}>
                                <Link to="/categories/Athletes" style={{textDecoration:"none", color:"white"}}>Athletes</Link>
                                <Box className={styling.smallerCategoriesBox}>
                                    <p className={styling.detailedCate}>Baseball</p>
                                    <p className={styling.detailedCate}>Lacrosse</p>
                                    <p className={styling.detailedCate}>Basketball</p>
                                    <p className={styling.detailedCate}>Snowboarding</p>
                                    <p className={styling.detailedCate}>Field Hockey</p>
                                    <p className={styling.detailedCate}>Sports Reporters</p>
                                    <p className={styling.detailedCate}>Football</p>
                                    <p className={styling.detailedCate}>Surfers</p>
                                    <p className={styling.detailedCate}>Golf</p>
                                    <p className={styling.detailedCate}>Wrestlers</p>
                                    <p className={styling.detailedCate}>Gymnastics</p>
                                    <p className={styling.detailedCate}>View all</p>
                                </Box>
                            </Box>
                            <Box className={styling.fieldOfCategory}>
                                <Link to="/cameo-calls" style={{textDecoration:"none", color:"white"}}>Musicians</Link>
                                <Box className={styling.smallerCategoriesBox}>
                                    <p className={styling.detailedCate}>Boy Bands</p>
                                    <p className={styling.detailedCate}>Latin Music</p>
                                    <p className={styling.detailedCate}>Country Music</p>
                                    <p className={styling.detailedCate}>Metal</p>
                                    <p className={styling.detailedCate}>EDM</p>
                                    <p className={styling.detailedCate}>Pop</p>
                                    <p className={styling.detailedCate}>Gospel</p>
                                    <p className={styling.detailedCate}>R&B</p>
                                    <p className={styling.detailedCate}>Hip Hop</p>
                                    <p className={styling.detailedCate}>Rappers</p>
                                    <p className={styling.detailedCate}>Jazz</p>
                                    <p className={styling.detailedCate}>View all</p>
                                </Box>
                            </Box>
                            <Box className={styling.fieldOfCategory}>
                                <Link to="/cameo-calls" style={{textDecoration:"none", color:"white"}}>Reality TV</Link>
                                <Box className={styling.smallerCategoriesBox}>
                                    <p className={styling.detailedCate}>90 Days Fiance</p>
                                    <p className={styling.detailedCate}>MTV</p>
                                    <p className={styling.detailedCate}>America's Got Talent</p>
                                    <p className={styling.detailedCate}>MasterChef</p>
                                    <p className={styling.detailedCate}>American Idol</p>
                                    <p className={styling.detailedCate}>Real Housewives of Orange Country</p>
                                    <p className={styling.detailedCate}>Big Brother</p>
                                    <p className={styling.detailedCate}>RuPaul's Drag Race</p>
                                    <p className={styling.detailedCate}>Dancing with the Stars</p>
                                    <p className={styling.detailedCate}>The Great British Bake Off</p>
                                    <p className={styling.detailedCate}>Love is Blind</p>
                                    <p className={styling.detailedCate}>View all</p>
                                </Box>
                            </Box>
                            <Box className={styling.fieldOfCategory}>
                                <Link to="/cameo-calls" style={{textDecoration:"none", color:"white"}}>Comedians</Link>
                                <Box className={styling.smallerCategoriesBox}>
                                    <p className={styling.detailedCate}>Improv and Sketch</p>
                                    <p className={styling.detailedCate}>Twitter Comedians</p>
                                    <p className={styling.detailedCate}>Late Nigh</p>
                                    <p className={styling.detailedCate}>Musical Comedy</p>
                                    <p className={styling.detailedCate}>Roasts</p>
                                    <p className={styling.detailedCate}>Saturday Night Live</p>
                                    <p className={styling.detailedCate}>Stand Up</p>
                                    <p className={styling.detailedCate}>Dancing with the Stars</p>
                                    <p className={styling.detailedCate}>View all</p>
                                </Box>
                            </Box>
                            <Box className={styling.fieldOfCategory}>
                                <Link to="/cameo-calls" style={{textDecoration:"none", color:"white"}}>Creators</Link>
                                <Box className={styling.smallerCategoriesBox}>
                                    <p className={styling.detailedCate}>Bloggers</p>
                                    <p className={styling.detailedCate}>Viners</p>
                                    <p className={styling.detailedCate}>Flimmakers</p>
                                    <p className={styling.detailedCate}>Youtube</p>
                                    <p className={styling.detailedCate}>Gamers</p>
                                    <p className={styling.detailedCate}>Influencers</p>
                                    <p className={styling.detailedCate}>Podcast</p>
                                    <p className={styling.detailedCate}>TikTok</p>
                                    <p className={styling.detailedCate}>View all</p>
                                </Box>
                            </Box>
                            
                            
                    </Box>
                </Box>



                <Box className={styling.complexNavElement}>
                    <Link to="/events" style={{textDecoration:"none", color:"white" }} >
                        Events
                    </Link>
                    <Box className={styling.subElements_1}>
                            <Link to="/cameo-calls" style={{textDecoration:"none"}}> <p className={styling.subElements_2}>Cameo Calls</p></Link>
                            <Link to="/cameo-live" style={{textDecoration:"none"}}> <p className={styling.subElements_2}>Cameo Live</p></Link>
                    </Box>
                </Box>
                
                <Link to="/business" className={styling.simpleNavElement}>Business</Link>
                <Link to="about" className={styling.simpleNavElement}>About</Link>
                
            </Box>



            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            {/* ------------------------------------------------------------------------------------------------------------------------ */}
            
            
            
            <Box name='searchAndLog' sx={{
                    // border:"1px solid white",
                    color:"white",
                    display:"flex",
                    flexDirection:"row",
                    width:"42%",
                    gap:"1%"
                }}>
                    <Box sx={{
                        // border:"1px solid red",
                        width:"78%",
                        padding:"5px",
                        display:"flex",
                    }}>
                        <button style={{
                            width:"30px",
                            margin:"1% 0% 1% 0%",
                            marginTop:"1%",
                            paddingTop:"6px",
                            height:"40px",
                            borderWidth:"0px",
                            cursor:"pointer",
                            background:"white",
                            borderRadius:"20px 0px 0px 20px",
                        }}
                        onClick={handleSearch}
                        >
                            <SearchSharpIcon />
                        </button>
                        <input style={{
                            width:"87%",
                            margin:"1% 0% 1% 0%",
                            height:"30px",
                            padding:"5px 5px 5px 10px",
                            fontSize:"16px",
                            fontWeight:"500",
                            color:"#000000",
                            borderRadius:"0px 20px 20px 0px",
                            borderWidth:"0px"
                        }} 
                        value={searchState}
                        onChange={(e)=>{setSearchState(e.target.value)}}
                        placeholder="Search..." 
                        />

                    </Box>
                    { isAuth?
                    <div style={{paddingTop:'7px',cursor:'pointer'}} className={styling.dropdown}>
                        <img style={{width:'45px',height:'45px',borderRadius:'25px'}} src={profile}/> <ExpandMoreOutlinedIcon style={{paddingBottom:'10px'}}/>
                        <div className={styling.dropdownContent}>
                            <Link to={`/${username}/account`} style={{color:'white',textDecoration:'none'}}><div className={styling.loginMenu}>Account</div></Link>
                            <Link to={`/${username}/orders`} style={{color:'white',textDecoration:'none'}}><div className={styling.loginMenu}>Orders</div></Link>
                            <Link to={`/${username}/following`} style={{color:'white',textDecoration:'none'}}><div className={styling.loginMenu}>Following</div></Link>
                            <div className={styling.loginMenu} onClick={handleLogout}>Logout</div>
                        </div>
                    </div>
                    :<Link to="/login" style={{textDecoration:"none", color:"white", margin:"1.5% 1% 1.5% 0%",}}>
                        <button style={{
                            background:"black",
                            cursor:"pointer",
                            width:"80px",
                            height:"40px",
                            fontSize:"14px",
                            // margin:"1.5% 1% 1.5% 0%",
                            borderRadius:"10px",
                            borderWidth:"0px",
                            opacity:"1.1",
                            color:"white",
                            border:"2px solid gray",
                            hover:{
                                border:"2px solid black",
                            }
                        }}>
                            Log In
                        </button>
                    </Link>}
                </Box>
        </Box>
    )
}

export default Navbar