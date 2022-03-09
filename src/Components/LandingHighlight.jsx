import CelebCard from "./CelebCard";
import Carousel from 'react-elastic-carousel'
import './LandingHighlight.css'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function LandingHighlight({title}){
    const carousel= useRef(null)
    const [celebs,setCelebs]=useState([])
    const fetchData = () => {
        return axios.get(`http://localhost:5000/celebs/highlight?highlight=`+title)
    }
    const handleFetch = async () => {
        try {
            const {data} = await fetchData();
            console.log(data)
            setCelebs(data)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleFetch();
    },[]);
    return(
        <div style={{color:'white',padding:'20px 50px',paddingBottom:'10px'}}>
            <div style={{float:'left',marginLeft:'25px'}}><h1 style={{fontSize:'36px',marginBottom:'14px'}}>{title}</h1></div>
            <div style={{float:'right',marginTop:'30px'}}>
                <button onClick={() => carousel.current.slidePrev()} style={{backgroundColor:'rgb(28, 28, 28)',border:'1px solid rgb(62, 62, 62)',height:'35px',borderRadius:'50%',cursor:'pointer'}}><KeyboardArrowLeftOutlinedIcon fontSize={'small'} style={{color:'white'}}/></button>
                <button onClick={() => carousel.current.slideNext()} style={{backgroundColor:'rgb(28, 28, 28)',border:'1px solid rgb(62, 62, 62)',height:'35px',borderRadius:'50%',cursor:'pointer',marginLeft:'10px',marginRight:'20px'}}><KeyboardArrowRightOutlinedIcon fontSize={'small'} style={{color:'white'}}/></button>
            </div>
            <Carousel itemsToShow={5} itemsToScroll={3} ref={carousel} showEmptySlots>
                {celebs.map((celeb)=>{
                    return <CelebCard key={celeb.celeb_id} id={celeb.celeb_id} name={celeb.name} profession={celeb.heading} price={celeb.price.personal} img_url={celeb.image_urls[0]}/>
                })}
            </Carousel>
        </div>
    )
}