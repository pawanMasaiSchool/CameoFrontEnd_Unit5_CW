import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ATagWithLink from "./ATagWithLink";
import styling from "./Footer.module.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';


const Footer = () => {
    return(
        <Box sx={{
            background:"#1E1B1E",
            width:"96.7%",
            height:"auto",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            gap:".6%",
            padding:"60px 0px 60px 50px"
        }}>
            <Box sx={{
                // border:"2px solid red",
                width:"550px",
                padding:"10px"
            }}>
                <h3 style={{
                    fontSize:"18px",
                    color:"#FFFFFF",
                    margin:"0px"
                }}>Join our mailing list</h3>
                <p style={{
                    fontSize:"16px",
                    color:"#FFFFFF",
                }}>Be the first to know about the newest stars and best deals on Cameo</p>
                <input style={{
                    background:"#1E1B1E",
                    width:"80%",
                    borderRadius:"8px",
                    height:"47px",
                    borderWidth:"0px",
                    border:"1px solid #413D40",
                    color:"#413D40",
                    padding:"0px 15px",
                    fontSize:"16px"
                }}
                placeholder="Email address"
                />
                <Button
                    variant="contained"
                    sx={{
                        background:"#FF037C",
                        height:"48px",
                        minWidth:"0px",
                        width:"50px",
                        margin:"0px 0px 4px 10px"
                    }}>
                    <ArrowForwardIcon />
                </Button>
                <p style={{
                    fontSize:"16px",
                    color:"#FFFFFF",
                }}>Emails subject to <ATagWithLink>privacy policy</ATagWithLink></p>
            </Box>
            <Box sx={{
                // border:"1px solid red",
                width:"300px",
                padding:"22px 0px 0px 10px"
            }}>
                <h3 style={{
                    fontSize:"18px",
                    color:"#FFFFFF",
                    // margin:"0px",
                }}>Language</h3>
                <select className={styling.selectBox}>
                    <option>US English</option>
                    <option>ES Espanol</option>
                    <option>FR Francais</option>
                    <option>DE Deutsch</option>
                    <option>IT Italiano</option>
                    <option>BR Portugues</option>
                </select>
            </Box>
            <Box sx={{
                // border:"1px solid red",
                width:"480px",
                fontSize:"16px",
                color:"#FFFFFF",
                padding:"0px 10px 10px 10px",
                textAlign:"right"
            }}>
                <p style={{
                    padding:"0px"
                }}>Ready to become a talent on Cameo?</p>
                <button className={styling.footerBtn}>Enroll as talent</button>
                <p style={{
                    padding:"0px"
                }}>Are you an agent, manager or publicist?</p>
                <button className={styling.footerBtn}>Register as a Partner</button>
            </Box>


            <Box sx={{
                width:"70%",
                // border:"1px solid red",
                height:"auto",
                padding:"10px",
                marginTop:"20px",
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                gap:"20px",
                fontSize:"18px"
            }}>
                <a href="#" className={styling.footerAtag}>Jobs</a>
                <a href="#" className={styling.footerAtag}>FAQ</a>
                <a href="#" className={styling.footerAtag}>Privacy</a>
                <a href="#" className={styling.footerAtag}>Terms</a>
                <a href="#" className={styling.footerAtag}>Guidelines</a>
                <a href="#" className={styling.footerAtag}>About</a>
                <a href="#" className={styling.footerAtag}>Team</a>
                <a href="#" className={styling.footerAtag}>Accessibility</a>
                <a href="#" className={styling.footerAtag}>Blog</a>
                <a href="#" className={styling.footerAtag}>Press</a>
                <a href="#" className={styling.footerAtag}>Help</a>
                <a href="#" className={styling.footerAtag}>For Business</a>
                <a href="#" className={styling.footerAtag}>Gift Cards</a>
                <a href="#" className={styling.footerAtag}>Do Not Sell My Personal Information</a>
            </Box>
            <Box sx={{
                width:"19%",
                // border:"1px solid red",
                padding:"10px",
                marginTop:"20px",
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                gap:"20px",
                color:"#FFFFFF",
                justifyContent:"right"
            }}>
                <div className={styling.matIcon}><FacebookOutlinedIcon /></div>
                <div className={styling.matIcon}><InstagramIcon /></div>
                <div className={styling.matIcon}><TwitterIcon /></div>
                <div className={styling.matIcon}><MailOutlinedIcon /></div>
                <div className={styling.matIcon}><PhoneIphoneIcon /></div>
            </Box>
            <p style={{
                fontSize:"16px",
                color:"#ADAE93",
            }}>© 2017-2022, Baron App, Inc. dba Cameo</p>
        </Box>
    )
}

export default Footer