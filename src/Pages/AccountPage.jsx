import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AccountPage(){
    const token= useSelector((state)=>state.login.token)
    const [data,setData]= useState(null)
    const [profile,setProfile]=useState(null)
    const [isLoading,setIsLoading]= useState(true)
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
        if(isAuth){
            getUser()
        }
    },[])
    if(isLoading){
        return(
            <div style={{width:'50%',margin:'auto'}}>
            <ReactPlayer url="https://i.imgur.com/257R6Nx.mp4" loop playing/></div>
        )
    }
}