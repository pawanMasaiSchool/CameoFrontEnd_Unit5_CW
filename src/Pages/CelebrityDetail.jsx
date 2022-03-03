import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../Components/Navbar';
import styles from './CelebrityDetail.module.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarIcon from '@mui/icons-material/Star';
export default function CelebrityDetail(){
    const id= "621f265b58678b08aa0e0c4e"
    const [celeb,setCeleb]= useState(null)
    const [isLoading, setIsLoading]= useState(true)
    const fetchData = () => {
        return axios.get(`https://cameo-backend.herokuapp.com/`)
    }
    const handleFetch = async () => {
        try {
            setIsLoading(true);
            const {data} = await fetchData();
            console.log(data[0])
            setCeleb(data[0])
            setIsLoading(false);  
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleFetch();
    },[]);
    return(
        <>
        {isLoading ?
            <div>Loading...</div>:
        <div style={{backgroundColor:'rgb(16,16,16)',height:'2000px',width:'100%'}}>
            <div style={{position:'fixed',top:0,width:'100%'}}>
            <Navbar/>
            </div>
            <div style={{maxWidth:'1080px',margin: '62px auto'}}>
                <div className={styles.topbar}>
                    <div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',fontWeight:'500',margin:'0',cursor:'pointer'}}>Home</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',color:'rgba(65,61,64)',fontWeight:'500',margin:'0 8px'}}>/</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',fontWeight:'500',margin:'0',cursor:'pointer'}}>{celeb.category}</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',color:'rgba(65,61,64)',fontWeight:'500',margin:'0 8px'}}>/</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',fontWeight:'500',margin:'0',color:'rgba(190,187,191)',cursor:'pointer'}}>{celeb.sub_category1}</p></div>
                    </div>
                    <div className={styles.buttonSection}>
                        <div style={{marginRight:'12px'}}>
                            <div style={{display:'flex',paddingLeft:'16px',paddingRight:'16px',backgroundColor:'rgba(43,38,43,1.00)',height:'40px',borderRadius:'8px',cursor:'pointer'}}>
                                <div style={{paddingTop:'10px',paddingBottom:'10px',marginRight:'4px'}}><StarBorderOutlinedIcon fontSize="small"/></div>
                                <div style={{fontWeight:'700',fontSize:'16px',paddingTop:'7px',paddingBottom:'7px'}}>Join Fan Club</div>
                            </div>
                        </div>
                        <div style={{marginRight:'12px'}}>
                            <div style={{padding:'10px 16px',backgroundColor:'rgba(43,38,43,1.00)',borderRadius:'8px',cursor:'pointer'}}>
                                <IosShareIcon fontSize="small"/>
                            </div>
                        </div>
                        <div>
                        <div style={{padding:'10px 16px',backgroundColor:'rgba(43,38,43,1.00)',borderRadius:'8px',cursor:'pointer'}}>
                                <BookmarkBorderIcon fontSize="small"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.celebSection}>
                    <div>
                        Add videos here
                    </div>
                    <div>
                        <div className={styles.reviewsBar}>
                            <div style={{marginRight:'6px',display:'flex',fontSize:'14px',fontWeight:'500'}}>
                                <div style={{color:'yellow',marginTop:'1px',marginRight:'1px'}}><StarIcon style={{fontSize:'16px'}}/></div>
                                <div style={{fontSize:'14px'}}>{Number(celeb.rating).toFixed(1)}</div>
                            </div>
                            {/* add modal here onclick*/}
                            <div style={{marginRight:'6px',color:'rgb(131, 240, 255)',fontWeight:'400',fontSize:'14px',textDecoration:'underline',cursor:'pointer'}}>{`${celeb.reviews.length} reviews`}</div>
                            <div style={{fontSize:'14px'}}>{`• ${celeb.fans} fans`}</div>
                        </div>
                        <div className={styles.nameSection}>
                            <div>
                                <h1 style={{margin:'0',fontSize:'32px'}}>{celeb.name}</h1>
                                <h4 style={{fontSize:'14px',color:'rgba(190,187,191,1.00)',fontWeight:'500',margin:'0',marginTop:'4px'}}>{celeb.heading}</h4>
                            </div>
                            <div style={{width:'50px',height:'50px',border:'4px solid rgb(255, 3, 124)',borderRadius:'30px'}}>
                                <img style={{objectFit:'cover',borderRadius:'32px'}} src={celeb.image_urls[0]} alt='image.jpg' width='50px' height='50px'/>
                            </div>
                        </div>
                        {celeb.delivery_24hr?<div style={{backgroundColor: 'rgb(28, 28, 28)',padding:'6px',width:'175px',marginTop:'5px',borderRadius:'5px'}}>
                            <p style={{color:'rgb(255, 221, 90)',margin:'0'}}>
                            <img style={{height:'14px',marginRight:'4px'}} src="https://cdn.cameo.com/static/24hr-icon.svg" alt="Expedited-Cameo"/>
                            24hr delivery available
                            </p>
                        </div>:
                        <></>}
                        <div style={{marginTop:'24px'}}>
                            <p style={{fontSize:'16px',margin:'0',letterSpacing: '0.8px',fontWeight:'400',color:'rgba(190,187,191,1.00)'}}>{celeb.about}</p>
                        </div>
                        <div style={{marginTop:'22px'}}>
                            <div style={{marginBottom:'16px',color:'white',fontWeight:'700',fontSize:'18px'}}>Choose an option</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
    </>
    )
}