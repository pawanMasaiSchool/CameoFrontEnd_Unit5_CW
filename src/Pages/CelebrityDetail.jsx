import { useEffect, useState } from "react";
import axios from "axios";
import styles from './CelebrityDetail.module.css'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import ReviewStars from "../Components/ReviewStars";
import RelatedTags from "../Components/RelatedTags";
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CelebCarousel from "../Components/CelebCarousel";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { addprice } from "../Redux/Order/action";
import ReactPlayer from "react-player";
import { Box, Modal } from "@mui/material";

const style = {
    position: 'absolute',
    top: '90%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '200px',
    height:'30px',
    bgcolor: '#FF037C',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function CelebrityDetail(){
    const isAuth= useSelector((state)=>state.login.isAuth)
    const token= useSelector((state)=>state.login.token)
    const history= useHistory()
    const {celeb_id}= useParams()
    const [copied,setCopied]= useState(false)
    const [following,setFollowing]= useState(false)
    const [celeb,setCeleb]= useState(null)
    const [isLoading, setIsLoading]= useState(true)
    const [price,setPrice]= useState(null)
    const dispatch= useDispatch()
    const handleCopy= () => setCopied(true);
    const handleClose = () => setCopied(false);
    const handleBookNow=()=>{
        if(isAuth){
            if(price!==null){
                const payload={
                    price:price,
                    celeb_name: celeb.name,
                    celeb_img:celeb.image_urls[0]
                }
                const action= addprice(payload)
                dispatch(action)
                history.push(`/book/${celeb_id}`)
            }
            else{
                setPrice(celeb.price.personal)
            } 
        }
        else{
            history.push('/login')
        }       
    }
    const addCelebToFollow=async ()=>{
        let config = {
            headers: {
                'authorization': `Bearer ${token}`
            }
          }
          let data = {
            celeb_id
          }
        return axios.patch('http://localhost:5000/user/following',data,config)
    }
    const removeCelebFromFollowing=async ()=>{
        let config = {
            headers: {
                'authorization': `Bearer ${token}`
            }
          }
          let data = {
            celeb_id
          }
          return axios.patch('http://localhost:5000/user/following/remove',data,config)
    }
    const handleFollowingClick=()=>{
        removeCelebFromFollowing()
        .then(function (response) {
           console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
        setFollowing(false)
    }
    const handleFollowClick= ()=>{
        if(!isAuth){
            history.push('/login')
        }
        addCelebToFollow()
        .then(function (response) {
           console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
          setFollowing(true)
    }
    const fetchData = () => {
        return axios.get(`http://localhost:5000/celebs/celeb/`+celeb_id)
    }
    
    const handleFetch = async () => {
        try {
            setIsLoading(true);
            const {data} = await fetchData();
            setCeleb(data)
            // console.log(data)
            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }
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
        const follow_arr=data[0].following
        for(let i=0; i<follow_arr.length;i++){
            if(follow_arr[i]==celeb_id){
                setFollowing(true)
            }
        }
    }
    useEffect(() => {
        if(isAuth){
            checkFollowing()
        }
        handleFetch();
    },[]);
    if(isLoading){
        return(
            <div style={{width:'50%',margin:'auto'}}>
            <ReactPlayer url="https://i.imgur.com/257R6Nx.mp4" loop playing/></div>
        )
    }
    else{
    return(
        <div style={{backgroundColor:'rgb(16,16,16)',width:'100%'}}>
            <div style={{maxWidth:'1080px',margin: '0 auto'}}>
                <div className={styles.topbar} style={{paddingTop:'75px'}}>
                <Modal
        open={copied}
        onClose={handleClose}
        aria-labelledby="modal-title"
      >
        <Box sx={style}>
        <h3 id="modal-title" style={{color:'white',margin:'5px 20px'}}>Link Copied!</h3>
        </Box>
      </Modal>
                    <div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',fontWeight:'500',margin:'0',cursor:'pointer'}}>Home</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',color:'rgba(65,61,64)',fontWeight:'500',margin:'0 8px'}}>/</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',fontWeight:'500',margin:'0',cursor:'pointer'}}>{celeb.category}</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',color:'rgba(65,61,64)',fontWeight:'500',margin:'0 8px'}}>/</p></div>
                        <div style={{float:'left'}}><p style={{fontSize:'14px',fontWeight:'500',margin:'0',color:'rgba(190,187,191)',cursor:'pointer'}}>{celeb.sub_category1}</p></div>
                    </div>
                    <div className={styles.buttonSection}>
                        {following?<div style={{marginRight:'12px'}}>
                            <div className={styles.fanClubButton} onClick={handleFollowingClick}>
                                <div style={{fontWeight:'700',fontSize:'16px',paddingTop:'10px',paddingBottom:'7px'}}>Following</div>
                            </div>
                        </div>:<div style={{marginRight:'12px'}}>
                            <div className={styles.fanClubButton} onClick={handleFollowClick}>
                                <div style={{fontWeight:'700',fontSize:'16px',paddingTop:'10px',paddingBottom:'7px'}}>Follow</div>
                            </div>
                        </div>}
                        <div style={{marginRight:'12px'}} onClick={handleCopy}>
                        <CopyToClipboard text={`http://localhost:3000/celeb/${celeb_id}`}>
                            <div className={styles.iconBtn}>
                                <IosShareIcon fontSize="small"/>
                            </div>
                        </CopyToClipboard>
                        </div>
                    </div>
                </div>
                <div className={styles.celebSection}>
                    <div>
                        <CelebCarousel videos={celeb.video_urls}/>
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
                            <p style={{color:'rgb(255, 221, 90)',margin:'0',fontSize:'14px'}}>
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
                        <div className={styles.priceDiv} onClick={()=>{setPrice(celeb.price.personal)}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div style={{display:'flex'}}>
                                    <div style={{marginTop:'4px',marginRight:'8px'}}><PeopleAltOutlinedIcon style={{fontSize:'14px'}}/></div>
                                    <div>
                                        <div style={{marginBottom:'8px',color:'white',fontWeight:'700',fontSize:'17px'}}>Personal use</div>
                                        <div style={{fontSize:'14px',color:'rgba(190,187,191,1.00)'}}>Personalized video for you or someone else</div>
                                    </div>
                                </div>
                                <div style={{color:'white',fontWeight:'700',fontSize:'17px'}}>{`₹${celeb.price.personal}`}</div>
                            </div>
                        </div>
                        <div className={styles.priceDiv} onClick={()=>{setPrice(celeb.price.buisness)}}>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <div style={{display:'flex'}}>
                                    <div style={{marginTop:'4px',marginRight:'8px'}}><FolderOpenOutlinedIcon style={{fontSize:'14px'}}/></div>
                                    <div>
                                        <div style={{marginBottom:'8px',color:'white',fontWeight:'700',fontSize:'17px'}}>For business</div>
                                        <div style={{fontSize:'14px',color:'rgba(190,187,191,1.00)'}}>Engaging video content for your company, customers, or employees</div>
                                    </div>
                                </div>
                                <div style={{color:'white',fontWeight:'700',fontSize:'17px'}}>{`₹${celeb.price.buisness}`}</div>
                            </div>
                        </div>
                        <div style={{backgroundColor:'rgb(255, 3, 124)',borderRadius:'10px',textAlign:'center',paddingTop:'16px',paddingBottom:'16px',cursor:'pointer'}}>
                            {price?
                            <div style={{fontSize:'17px',fontWeight:'700'}} onClick={handleBookNow}>Book now ₹{price}</div>:
                            <div style={{fontSize:'17px',fontWeight:'700'}} onClick={handleBookNow}>Book now</div>}
                        </div>
                    </div>
                </div>
                <div className={styles.reviewSection}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'16px'}}>
                        <div style={{color:'white',fontSize:'20px',fontWeight:'700'}}>Reviews</div>
                        <div style={{color:'rgb(131, 240, 255)',fontWeight:'400',fontSize:'16px',cursor:'pointer'}}>See all {celeb.reviews.length} reviews</div>
                    </div>
                    <div className={styles.reviewDiv}>
                        <div style={{display:'grid',gridTemplateColumns: '140px auto',marginBottom:'12px'}}>
                            <div className={styles.reviewImg}>
                                <div style={{fontWeight:'700',fontSize:'14px',color:'white'}}>{celeb.reviews[0].reviewer_name[0]}</div>
                            </div>
                            <ReviewStars number={celeb.reviews[0].stars}/>
                        </div>
                        <div style={{display:'grid',gridTemplateColumns: '140px auto'}}>
                            <div>
                                <div style={{fontWeight:'500',fontSize:'14px',color:'white'}}>{celeb.reviews[0].reviewer_name}</div>
                                <div style={{fontWeight:'500',fontSize:'13px',color:'rgba(190,187,191,1.00)'}}>{String(celeb.reviews[0].date).slice(0,10)}</div>
                            </div>
                            <div style={{fontWeight:'500',fontSize:'14px',color:'rgba(190,187,191,1.00)'}}>{celeb.reviews[0].comments}</div>
                        </div>
                    </div>
                    <div className={styles.reviewDiv}>
                    <div style={{display:'grid',gridTemplateColumns: '140px auto',marginBottom:'12px'}}>
                            <div className={styles.reviewImg}>
                                <div style={{fontWeight:'700',fontSize:'14px',color:'white'}}>{celeb.reviews[1].reviewer_name[0]}</div>
                            </div>
                            <ReviewStars number={celeb.reviews[1].stars}/>
                        </div>
                        <div style={{display:'grid',gridTemplateColumns: '140px auto'}}>
                            <div>
                                <div style={{fontWeight:'500',fontSize:'14px',color:'white'}}>{celeb.reviews[1].reviewer_name}</div>
                                <div style={{fontWeight:'500',fontSize:'13px',color:'rgba(190,187,191,1.00)'}}>{String(celeb.reviews[1].date).slice(0,10)}</div>
                            </div>
                            <div style={{fontWeight:'500',fontSize:'14px',color:'rgba(190,187,191,1.00)'}}>{celeb.reviews[1].comments}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.relatedSection}>
                    <div style={{color:'white',fontSize:'20px',fontWeight:'700'}}>Related categories</div>
                    <div style={{marginTop:'14px'}}>
                        {celeb.tags.map((item)=>{
                           return <RelatedTags tag={item}/>
                        })}
                    </div>
                </div>
                <div className={styles.aboutSection}>
                    <div style={{color:'white',fontSize:'20px',fontWeight:'700'}}>About Cameo</div>
                        <div className={styles.aboutGrid}>
                            <div className={styles.aboutDiv}>
                                <div style={{fontSize:'16px',fontWeight:'700',marginBottom: '17px',color:'rgba(255,3,124,1.00)'}}>What is Cameo?</div>
                                <div className={styles.aboutItems}>
                                    <div className={styles.aboutItem}>
                                        <div style={{color:'rgba(190,187,191,1.00)'}}><PhoneIphoneOutlinedIcon fontSize="large"/></div>
                                        <div style={{fontSize:'16px',fontWeight:'400',color:'white'}}>Send your request</div>
                                    </div>
                                    <div className={styles.aboutItem}>
                                        <div style={{color:'rgba(190,187,191,1.00)'}}><VideoCameraFrontOutlinedIcon fontSize="large"/></div>
                                        <div style={{fontSize:'16px',fontWeight:'400',color:'white'}}>Get your video</div>
                                    </div>
                                    <div className={styles.aboutItem}>
                                        <div style={{color:'rgba(190,187,191,1.00)'}}><ThumbUpOutlinedIcon fontSize="large"/></div>
                                        <div style={{fontSize:'16px',fontWeight:'400',color:'white'}}>Make their year</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.aboutDiv}>
                                <div style={{fontSize:'16px',fontWeight:'700',marginBottom: '17px',color:'rgba(33,207,230,1.00)'}}>What does a good request look like?</div>
                                    <div className={styles.aboutItem2}>
                                        <div style={{fontSize:'16px',fontWeight:'400',color:'white'}}>Tip #1</div>
                                        <div style={{fontSize:'14px',fontWeight:'400',color:'rgba(190,187,191,1.00)',letterSpacing:'0.6px',marginTop:'8px'}}>Try to be as specific as possible with your request such as your relationship to the Cameo recipient, numbers & details. Ex. "tell my BFF Cam congrats on graduating from UCLA."</div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
    }
}