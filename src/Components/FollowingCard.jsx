import axios from "axios"
import { useEffect, useState } from "react"
import CelebCard from "./CelebCard"

export default function FollowingCard({id}){
    const [celeb,setCeleb]= useState(null)
    const [isLoading,setIsLoading]= useState(true)
    
    const fetchData = () => {
        // return axios.get(`http://localhost:5000/celebs/celeb/`+id);
        // when heroku link does not work we can run this on local host

        return axios.get(`https://cameo-backend.herokuapp.com/celebs/celeb/`+id);
    }
    
    const handleFetch = async () => {
        try {
            setIsLoading(true);
            const {data} = await fetchData();
            setCeleb(data)
            console.log(data)
            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        handleFetch()
    },[])
    if(isLoading){
        return <></>
    }
    else{
        return(
            <div>
            <CelebCard key={celeb.celeb_id} id={celeb.celeb_id} name={celeb.name} profession={celeb.heading} price={celeb.price.personal} img_url={celeb.image_urls[0]}/>
            </div>
        )
    }
}