import Box from "@mui/material/Box"
import axios from "axios"
import { useState } from "react"
import ReactPlayer from "react-player"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function CelebOrderCard({id,fore,from,instructions,additionalDetail,price,recieved,video_url,occasion,celeb_id}){
    const [receieved,setReceived]= useState(recieved)
    const [isLoading,setIsLoading]= useState(false)
    const [video,setVideo]= useState('')
    const history= useHistory()
    const addVideoToOrder=async ()=>{
          let data = {
            id,video
          }
        return axios.patch('http://localhost:5000/orders/video/edit',data)
    }
    const handleChange=(e)=>{
        setVideo(e.target.value)
    }
    const handleUpload=()=>{
        setIsLoading(true)
        addVideoToOrder()
        .then(function (response) {
            console.log(response)
            setReceived(true)
            recieved= true
            console.log(response.data.video_url)
            video_url=response.data.video_url
            setIsLoading(false)
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    if(isLoading){
        return(
            <div style={{width:'50%',margin:'auto'}}>
            <ReactPlayer url="https://i.imgur.com/257R6Nx.mp4" loop playing/></div>
        )
    }
    else{
        return(
            <Box name="forBox" sx={{
                background:"#1E1B1E",
                borderRadius:"10px",
                width:"80%",
                margin:"auto",
                marginBottom:"25px",
                padding:"10px 0px 30px 40px",
            }}>
                <p style={{color:"rgba(33,207,230,1.00)"}}>Order id: {id}</p>
                <div>
                    <h4>For: {fore}</h4>
                </div>
                <div>
                    <h4>From: {from}</h4>
                </div>
                <div>
                    <h4>Occasion: {occasion}</h4>
                </div>
                <div>
                    <h4>Instructions: {instructions}</h4>
                </div>
                <div>
                    <h4>Additional detail: {additionalDetail}</h4>
                </div>
                {receieved?<div><div>
                    <h4>Status: Delivered</h4>
                </div>
                <div><h4>Video url: {video_url}</h4></div></div>:<div><div>
                    <h4>Status: Video not uploaded yet</h4></div>
                    <div><p style={{
                        color:"white",
                        textAlign:"left",
                        fontWeight:"700",
                        fontSize:"13px",
                        padding:"0px 0px 0px 0px",
                        margin:"20px 0px 10px 0px",
                    }}>Please upload video here:</p>
                    <input style={{
                        background:"#1E1B1E",
                        width:"70%",
                        borderRadius:"8px",
                        height:"47px",
                        borderWidth:"0px",
                        border:"1px solid #413D40",
                        color:"white",
                        padding:"0px 15px",
                        fontSize:"16px"
                    }} onChange={handleChange}/>
                    <button style={{marginLeft:'20px',height:'40px',width:'100px',color:'white',backgroundColor:'#FF037C',border:'0',cursor:'pointer'}} onClick={handleUpload}>Upload</button>
                    </div></div>}
            </Box>
        )
    }
}