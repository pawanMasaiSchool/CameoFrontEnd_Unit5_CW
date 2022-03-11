import axios from "axios"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import FollowingCard from "../Components/FollowingCard"

export default function Following(){
    const token= useSelector((state)=>state.login.token)
    const [celeb_ids,setCeleb_ids]= useState(null)
    const [isLoading,setIsLoading]= useState(true) 
    const getfollowing= ()=>{
        let config = {
            headers: {
                'authorization': `Bearer ${token}`
            }
          }
        return axios.get(`http://localhost:5000/user/following`,config)
    }
    const checkFollowing= async ()=>{
        const {data}= await getfollowing()
        console.log(data)
        const follow_arr=data[0].following
        console.log(follow_arr)
        setCeleb_ids(follow_arr)
        setIsLoading(false)
    }
    useEffect(()=>{
        checkFollowing()
    },[])
    if(isLoading){
        return(
            <div style={{width:'50%',margin:'auto'}}>
            <ReactPlayer url="https://i.imgur.com/257R6Nx.mp4" loop playing/></div>
        )
    }
    else{
        if(celeb_ids.length===0){
            return(
                <div style={{paddingTop:'75px',color:'white',paddingBottom:'75px',width:'330px',margin:'0 auto',justifyContent:'center'}}>
                    <h2>You aren't following anyone</h2>
                    <Link to='/' style={{color:"rgba(33,207,230,1.00)",textDecoration:'none'}}><div style={{width:'130px',margin:'0 auto'}}>Browse Talents</div></Link>
                </div>
            )
        }
        else{
            {
                return(
                    <div style={{color:'white',padding:'75px 50px',paddingBottom:'40px'}}>
                        <div style={{marginLeft:'25px'}}><h1 style={{fontSize:'36px',marginBottom:'14px'}}>Following</h1></div>
                        <div style={{display:'flex',gap:'30px'}}>
                        {celeb_ids.map((id)=>{
                    return <FollowingCard key={id} id={id}/>
                })}
                </div>
                    </div>
                )
            }
        }
    }
}