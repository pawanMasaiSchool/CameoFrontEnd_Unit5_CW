import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box"
import CommonInputLabel from "../Components/CommonInputLabel";
import CommonInput from "../Components/CommonInput";
import { Button, Checkbox } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const initState={
    name:'',
    bio:'',
    twitter:''
}

export default function AccountPage(){
    const [accountDetail, setAccountDetail]= useState(initState)
    const handleInfoChange = (e) => {
        let {name, value} = e.target;
        setAccountDetail({...accountDetail, [name]:value });
    }
    console.log(accountDetail)
    const {name,bio,twitter}= accountDetail
    const token= useSelector((state)=>state.login.token)
    const [data,setData]= useState(null)
    const [profile,setProfile]=useState(null)
    const [isLoading,setIsLoading]= useState(true)
    const history= useHistory()
    const fetchData = () => {
        // return axios.get(`http://localhost:5000/user/detail`,{   // when heroku link does not work we can run this on local host
            return axios.get(`https://cameo-backend.herokuapp.com/user/detail`,{
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
        }
        const addCelebToFollow=async ()=>{
            let config = {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            }
            let data = {
                name,twitter,bio
            }
            // return axios.patch('http://localhost:5000/user/detail',data,config)    // when heroku link does not work we can run this on local host
            return axios.patch('https://cameo-backend.herokuapp.com/user/detail',data,config)
    }
    const handleSave=()=>{
        addCelebToFollow()
        .then(function (response) {
            console.log(response)
           })
           .catch(function (error) {
             console.log(error)
           })
        history.push('/')
    }
    const getUser=async ()=>{
        try {
            const {data} = await fetchData();
            console.log(data)
            setProfile(data.profile_picture)
            setData(data)
            setIsLoading(false)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
            getUser()
    },[])
    if(isLoading){
        return(
            <div style={{width:'50%',margin:'auto'}}>
            <ReactPlayer url="https://i.imgur.com/257R6Nx.mp4" loop playing/></div>
        )
    }
    else{
        return(
            <div style={{paddingTop:'75px'}}>
            <Box name="forBox" sx={{
                background:"#1E1B1E",
                borderRadius:"10px",
                width:"785px",
                margin:"auto",
                marginBottom:"25px",
                padding:"10px 0px 30px 40px",
            }}>
                <div style={{width:'200px',margin:'20px auto'}}>
                    <img style={{borderRadius:'50%',width:'200px',height:'200px'}} src={profile}/>
                </div>
                <CommonInputLabel padding="0px 0px 0px 2px" fontSize="15px" label={"Your name"} />
                <CommonInput width="90%" value={name} name={"name"} onChange={handleInfoChange} placeholder={data.name==''?'Bio':data.name}/>
                <CommonInputLabel padding="0px 0px 0px 2px" fontSize="15px" label={"Email"} />
                <CommonInput width="90%" value={data.email} name={"email"} onChange={handleInfoChange}/>
                <CommonInputLabel padding="0px 0px 0px 2px" fontSize="15px" label={"Your bio"} />
                <CommonInput width="90%" height='150px' value={bio} name={"bio"} onChange={handleInfoChange} placeholder={data.bio==''?'Bio':data.bio}/>
                <CommonInputLabel padding="0px 0px 0px 2px" fontSize="15px" label={"Your username"} />
                <CommonInput width="90%" value={data.username} name={"username"} onChange={handleInfoChange}/>
                <CommonInputLabel padding="0px 0px 0px 2px" fontSize="15px" label={"Your Twitter handle"} />
                <CommonInput width="90%" value={twitter} name={"twitter"} onChange={handleInfoChange} placeholder={data.twitter_handle==''?"Twitter handle":data.twitter_handle}/>
                <Box sx={{display:"flex",marginTop:'20px'}}>
                    <Checkbox sx={{color:"white"}} />
                    <h3 style={{color:"white", fontWeight:"400"}}>{`Keep me up-to-date on exclusive Cameo offers, updates, and more!`}</h3>
                </Box>
                <Box sx={{margin:"auto",marginTop:'20px', width:"60%"}}>
                    <Button variant="contained" sx={{
                        background:"#FF037C", 
                        width:"100%", 
                        height:"45px",
                        textTransform:"none",
                        fontSize:"20px",
                    }} 
                    onClick={handleSave}>Save changes</Button>
                </Box>
            </Box>
            </div>
        )
    }
}