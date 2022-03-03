import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../Components/Navbar';
import styles from './CelebrityDetail.module.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
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
            <div style={{marginTop:'150px'}}>Loading...</div>:
        <div style={{backgroundColor:'rgb(16,16,16)',height:'2000px',width:'100%'}}>
            <div style={{position:'fixed',top:0,width:'100%'}}>
            <Navbar/>
            </div>
            <div style={{maxWidth:'1080px',margin: '62px auto'}}>
                <div className={styles.topbar}>
                    <div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',fontWeight:'500',margin:'0'}}>Home</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',color:'rgba(65,61,64)',fontWeight:'500',margin:'0 8px'}}>/</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',fontWeight:'500',margin:'0'}}>{celeb.category}</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',color:'rgba(65,61,64)',fontWeight:'500',margin:'0 8px'}}>/</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',fontWeight:'500',margin:'0',color:'rgba(190,187,191)'}}>{celeb.sub_category1}</p></div>
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
            </div>
        </div>
        }
    </>
    )
}