import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import CommonInput from "../Components/CommonInput"
import CommonInputLabel from "../Components/CommonInputLabel"
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import styling from "../Components/Footer.module.css";
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createorder } from "../Redux/Order/action"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory } from "react-router-dom"


const initDetails = {
    fore:"",
    from:"",
    occassion:"",
    instructions:"",
    optional:""
}

const BookingDetailsPage = ({Celebrity}) => {
    const dispatch= useDispatch()
    const params= useParams()
    const [orderInfo, setOrderInfo] = useState(initDetails)
    const {fore,from,occassion,instructions,optional}= orderInfo
    const history= useHistory()
    const handleInfoChange = (e) => {
        let {name, value} = e.target;
        setOrderInfo({...orderInfo, [name]:value });
    }
    const handleContinue= ()=>{
        const payload= {fore,from,occassion,instructions,optional,celeb_id:params.celeb_id}
        const action= createorder(payload)
        dispatch(action)
        history.push('/payment')
    }
    const isAuth= useSelector((state)=>state.login.isAuth)
    const token= useSelector((state)=>state.login.token)
    const [forOther,setForOther]= useState(true)
    const [data,setData]= useState(null)
    const [profile,setProfile]=useState("https://d3el26csp1xekx.cloudfront.net/static/icon.png?w=108&h=108")
    const fetchData = () => {
        return axios.get(`http://localhost:5000/user/detail`,{
            headers: {
              'authorization': `Bearer ${token}`
            }
          })
    }
    const getUser=async ()=>{
        try {
            const {data} = await fetchData();
            setProfile(data.profile_picture)
            setData(data)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        if(isAuth){
            getUser()
        }
    },[])
    return (
        <Box sx={{
            width:"100%",
            height:"auto",
            margin:"auto",
            paddingTop:"100px",
        }}>
            <Box name="forBox" sx={{
                background:"#1E1B1E",
                borderRadius:"10px",
                width:"785px",
                margin:"auto",
                marginBottom:"25px",
                padding:"10px 0px 30px 40px",
            }}>
                <h3 style={{textAlign:"center", color:"white"}}>1. Who is this Cameo for?</h3>
                    {forOther?
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center",
                        width:"35%",
                        margin:"auto"
                    }}>
                    <Box sx={{
                        textAlign:"center", 
                        width:"77px", 
                        padding:"25px", 
                        color:"white",
                        margin:"auto"
                    }}>
                        <Box sx={{
                            borderRadius:"45px",
                            background:"black",
                            width:"25px",
                            height:"25px",
                            padding:"25px",
                            border:"1px solid #FF037C",
                            marginBottom:"8px",
                        cursor:"pointer"
                        }}> <CardGiftcardIcon sx={{color:"white"}} /></Box>
                        Someone else
                    </Box>
                    <Box sx={{
                        textAlign:"center", 
                        width:"77px", 
                        padding:"25px", 
                        color:"white",
                        margin:"auto",
                        marginTop:"0px"
                    }}>
                        <Box sx={{
                            borderRadius:"45px",
                            background:"black",
                            width:"77px",
                            marginBottom:"8px",
                            cursor:"pointer"
                        }} onClick={()=>setForOther(false)}> <img style={{width:"77px", borderRadius:"45px",objectFit:'cover'}} src={profile}  /></Box>
                        Myself
                    </Box>
                    </Box>
                    :
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center",
                        width:"35%",
                        margin:"auto"
                    }}>
                    <Box sx={{
                        textAlign:"center", 
                        width:"77px", 
                        padding:"25px", 
                        color:"white",
                        margin:"auto"
                    }}>
                        <Box sx={{
                            borderRadius:"45px",
                            background:"black",
                            width:"25px",
                            height:"25px",
                            padding:"25px",
                            marginBottom:"8px",
                        cursor:"pointer"
                        }} onClick={()=>setForOther(true)}> <CardGiftcardIcon sx={{color:"white"}} /></Box>
                        Someone else
                    </Box>
                    <Box sx={{
                        textAlign:"center", 
                        width:"77px", 
                        padding:"25px", 
                        color:"white",
                        margin:"auto",
                        marginTop:"0px"
                    }}>
                        <Box sx={{
                            borderRadius:"45px",
                            background:"black",
                            width:"77px",
                            marginBottom:"8px",
                            border:"1px solid #FF037C",
                            cursor:"pointer"
                        }}> <img style={{width:"77px", borderRadius:"45px",objectFit:'cover'}} src={profile}  /></Box>
                        Myself
                    </Box>
                    </Box>}

                <CommonInputLabel padding="0px 0px 0px 2px" fontSize="15px" label={"To (first name)"} />
                <CommonInput placeholder="Leah" width="80%" value={fore} name={"fore"} onChange={handleInfoChange}/>
                
                <Box sx={{
                    padding:"0px 10px 10px 0px",
                    width:"100px",
                    margin:"15px 0px 10px 0px"
                }}>
                    <select className={styling.selectBox}>
                        <option>He / Him</option>
                        <option>She / Her</option>
                        <option>They / them</option>
                    </select>
                </Box>

            </Box>

            <Box name="fromBox" sx={{
                background:"#1E1B1E",
                borderRadius:"10px",
                width:"785px",
                margin:"auto",
                marginBottom:"25px",
                padding:"10px 0px 30px 40px",
            }}>
                
                <h3 style={{textAlign:"center", color:"white"}}>2. Who is this Cameo from?</h3>
                <CommonInputLabel padding="0px 0px 0px 2px" fontSize="15px" label="From (first name)" />
                <CommonInput placeholder="Abhinav" width="80%" value={from} name={"from"} onChange={handleInfoChange}/>
                
                <Box sx={{
                    padding:"0px 10px 10px 0px",
                    width:"100px",
                    margin:"15px 0px 10px 0px"
                }}>
                    <select className={styling.selectBox}>
                        <option>He / Him</option>
                        <option>She / Her</option>
                        <option>They / them</option>
                    </select>
                </Box>
            </Box>


            <Box name="memorable_Request" sx={{
                background:"#1E1B1E",
                borderRadius:"10px",
                width:"785px",
                margin:"auto",
                marginBottom:"15px",
                padding:"10px 0px 100px 40px",
            }} >
                <h3 style={{textAlign:"center", color:"white"}}>3. Make your request memorable</h3>
                
                <CommonInputLabel padding="0px 0px 0px 5px" fontSize="15px" label={"What's the occasion?"}  />
                <CommonInput width="93%" placeholder="Like a birthday, congratulations, thank you, or just for fun"  value={occassion} name={"occassion"} onChange={handleInfoChange}/>
                
                <CommonInputLabel padding="0px 0px 0px 5px" fontSize="15px" label={"Instructions for video"} />
                <CommonInput height="100px" width="93%" placeholder="What should they say or do on this special day? Include name pronounciation if necessary, such as Yvonne (ee-Von)." value={instructions} name={"instructions"} onChange={handleInfoChange} />
            
                <h3 style={{textAlign:"left", color:"white", padding:"0px 5px"}}>Optional details</h3>
                <CommonInputLabel padding="0px 0px 0px 5px" fontSize="15px" label={"What's something about the recipient you want them to know? (optional)"} />
                <CommonInput height="100px" width="93%" value={optional} name={"optional"} onChange={handleInfoChange}/>

                <Box sx={{display:"flex"}}>
                    <Checkbox sx={{color:"white"}} />
                    <h3 style={{color:"white", fontWeight:"400"}}>{`Hide this video from profile`}</h3>
                </Box>

                <Box sx={{margin:"auto", width:"70%"}}>
                    <Button variant="contained" sx={{
                        background:"#FF037C", 
                        width:"100%", 
                        height:"45px",
                        textTransform:"none",
                        fontSize:"20px",
                    }} 
                    onClick={handleContinue}>Continue</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default BookingDetailsPage