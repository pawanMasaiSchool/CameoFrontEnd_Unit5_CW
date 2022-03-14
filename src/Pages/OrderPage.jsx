import axios from "axios"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import OrderCard from "../Components/OrderCard"

export default function OrderPage(){
    const token= useSelector((state)=>state.login.token)
    const [isLoading,setIsLoading]= useState(true)
    const [orders,setOrders]= useState([])
    const getOrders= ()=>{
        let config = {
            headers: {
                'authorization': `Bearer ${token}`
            }
          }
        return axios.get(`http://localhost:5000/orders`,config)
    }
    const checkOrders= async ()=>{
        const {data}= await getOrders()
        console.log(data)
        setOrders(data)
        setIsLoading(false)
    }
    useEffect(()=>{
        checkOrders()
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
                    <h2>No purchased Cameos</h2>
                    <Link to='/' style={{color:"rgba(33,207,230,1.00)",textDecoration:'none'}}><div style={{width:'130px',margin:'0 auto'}}>Browse Talents</div></Link>
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
                        return<OrderCard key={order._id} id={order._id} celeb_img={order.celeb_img} celeb_name ={order.celeb_name} fore={order.fore} from={order.from} instructions={order.instructions} additionalDetail={order.optional} occasion={order.occassion} price={order.price} recieved={order.recieved} video_url={order.video_url}/>
                    }
                    else{
                        return<OrderCard key={order._id} id={order._id} celeb_img={order.celeb_img} celeb_name ={order.celeb_name} fore={order.fore} from={order.from} instructions={order.instructions} additionalDetail={order.optional} occasion={order.occassion} price={order.price} recieved={order.recieved}/>
                    }
                })}
                </div>
                </div>
            )
        }
    }
}