import axios from "axios"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import CelebOrderCard from "../Components/CelebOrderCard"

export default function CelebrityDashboard(){
    const params= useParams()
    const [isLoading,setIsLoading]= useState(true)
    const [orders,setOrders]= useState([])
    
    const fetchData = () => {
        return axios.get(`http://localhost:5000/orders/celebrity/`+params.celeb_id)
    }
    
    const handleFetch = async () => {
        try {
            setIsLoading(true);
            const {data} = await fetchData();
            setOrders(data)
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
        return(
            <div style={{width:'50%',margin:'auto'}}>
            <ReactPlayer url="https://i.imgur.com/257R6Nx.mp4" loop playing/></div>
        )
    }
    else{
        if(orders.length===0){
            return(
                <div style={{paddingTop:'75px',color:'white',paddingBottom:'75px',width:'330px',margin:'0 auto',justifyContent:'center'}}>
                    <h2>You have no orders yet</h2>
                </div>
            )
        }
        else{
            return(
                <div style={{color:'white',padding:'75px 50px',paddingBottom:'40px'}}>
                <div style={{marginLeft:'25px'}}><h1 style={{fontSize:'36px',marginBottom:'14px'}}>Orders</h1></div>
                <div>
                {orders.map((order)=>{
                    if(order.recieved){
                        return<CelebOrderCard key={order._id} id={order._id} fore={order.fore} from={order.from} instructions={order.instructions} additionalDetail={order.optional} occasion={order.occassion} price={order.price} recieved={order.recieved} video_url={order.video_url} celeb_id={params.celeb_id}/>
                    }
                    else{
                        return<CelebOrderCard key={order._id} id={order._id} fore={order.fore} from={order.from} instructions={order.instructions} additionalDetail={order.optional} occasion={order.occassion} price={order.price} recieved={order.recieved} celeb_id={params.celeb_id}/>
                    }
                })}
                </div>
                </div>
            )
        }
    }
}