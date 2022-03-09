import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Checkbox from "@mui/material/Checkbox"
import CommonInput from "../Components/CommonInput"
import CommonInputLabel from "../Components/CommonInputLabel"
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import styling from "../Components/Footer.module.css";

const BookingDetailsPage = ({Celebrity}) => {
    return (
        <Box sx={{
            width:"100%",
            height:"auto",
            margin:"auto",
            paddingTop:"100px",
        }}>
            <Box name="forBox" sx={{
                background:"#1E1B1E",
                borderRadius:"10px",
                width:"785px",
                margin:"auto",
                marginBottom:"25px",
                padding:"10px 0px 30px 40px",
            }}>
                <h3 style={{textAlign:"center", color:"white"}}>1. Who is this Cameo for?</h3>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                    width:"35%",
                    margin:"auto"
                }}>
                    <Box sx={{
                        textAlign:"center", 
                        width:"77px", 
                        padding:"25px", 
                        color:"white",
                        margin:"auto",
                        cursor:"pointer"
                    }}>
                        <Box sx={{
                            borderRadius:"45px",
                            background:"black",
                            width:"25px",
                            height:"25px",
                            padding:"25px",
                            border:"1px solid #FF037C",
                            marginBottom:"8px"
                        }}> <CardGiftcardIcon sx={{color:"white"}} /></Box>
                        Someone else
                    </Box>
                    <Box sx={{
                        textAlign:"center", 
                        width:"77px", 
                        padding:"25px", 
                        color:"white",
                        margin:"auto",
                        marginTop:"0px",
                        cursor:"pointer"
                    }}>
                        <Box sx={{
                            borderRadius:"45px",
                            background:"black",
                            width:"25px",
                            height:"25px",
                            padding:"25px",
                            marginBottom:"8px"
                        }}> <img style={{width:"25px", height:"25px"}} src="https://d3el26csp1xekx.cloudfront.net/static/icon.png?w=108&h=108"  /></Box>
                        Myself
                    </Box>
                </Box>

                <CommonInputLabel padding="0px 0px 0px 2px" fontSize="15px" label={"To (first name)"} />
                <CommonInput placeholder="Pawan" width="80%"/>
                
                <Box sx={{
                    padding:"0px 10px 10px 0px",
                    width:"100px",
                    margin:"15px 0px 10px 0px"
                }}>
                    <select className={styling.selectBox}>
                        <option>He / Him</option>
                        <option>She / Her</option>
                        <option>They / them</option>
                    </select>
                </Box>

            </Box>

            <Box name="fromBox" sx={{
                background:"#1E1B1E",
                borderRadius:"10px",
                width:"785px",
                margin:"auto",
                marginBottom:"25px",
                padding:"10px 0px 30px 40px",
            }}>
                
                <h3 style={{textAlign:"center", color:"white"}}>2. Who is this Cameo from?</h3>
                <CommonInputLabel padding="0px 0px 0px 2px" fontSize="15px" label="From (first name)" />
                <CommonInput placeholder="Sukhwani" width="80%" />
                
                <Box sx={{
                    padding:"0px 10px 10px 0px",
                    width:"100px",
                    margin:"15px 0px 10px 0px"
                }}>
                    <select className={styling.selectBox}>
                        <option>He / Him</option>
                        <option>She / Her</option>
                        <option>They / them</option>
                    </select>
                </Box>
            </Box>


            <Box name="memorable_Request" sx={{
                background:"#1E1B1E",
                borderRadius:"10px",
                width:"785px",
                margin:"auto",
                marginBottom:"15px",
                padding:"10px 0px 100px 40px",
            }} >
                <h3 style={{textAlign:"center", color:"white"}}>4. Make your request memorable</h3>
                
                <CommonInputLabel padding="0px 0px 0px 5px" fontSize="15px" label={"When is their birthday?"}  />
                <CommonInput width="93%" placeholder="MM / DD"  />
                
                <CommonInputLabel padding="0px 0px 0px 5px" fontSize="15px" label={"How old are they turning? (optional)"}  />
                <CommonInput width="93%" placeholder="Age"  />
                
                <CommonInputLabel padding="0px 0px 0px 5px" fontSize="15px" label={"Instructions for Shonali Nagrani"}  />
                <CommonInput height="100px" width="93%" placeholder="What should they say or do on this special day? Include name pronounciation if necessary, such as Yvonne (ee-Von)."  />
            
                <h3 style={{textAlign:"left", color:"white", padding:"0px 5px"}}>Optional details</h3>
                <CommonInputLabel padding="0px 0px 0px 5px" fontSize="15px" label={"What's something about the recipient you want Shonali Nagrani to know? (optional)"} />
                <CommonInput height="100px" width="93%" />

                <Box sx={{display:"flex"}}>
                    <Checkbox sx={{color:"white"}} />
                    <h3 style={{color:"white", fontWeight:"400"}}>{`Hide this video from ${Celebrity}'s profile`}</h3>
                </Box>

                <Box sx={{margin:"auto", width:"70%"}}>
                    <Button variant="contained" sx={{
                        background:"#FF037C", 
                        width:"100%", 
                        height:"45px",
                        textTransform:"none",
                        fontSize:"20px",
                    }} 
                    >Continue</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default BookingDetailsPage