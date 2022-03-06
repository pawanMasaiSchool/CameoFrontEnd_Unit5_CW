import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ATagWithLink from "../Components/ATagWithLink";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import CommonInput from "../Components/CommonInput";
import CommonInputLabel from "../Components/CommonInputLabel";

const SignupPage = () => {
    const [checked, setChecked] = useState(true);
    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
      };

    return (
        <Box sx={{
            background:"#101010",
            width:"100%",
            height:"auto",
            fontFamily:"sans-serif",
            padding:"80px 0px 70px 0px"
        }}>
            <Box sx={{
                width:"335px",
                height:"1000px",
                background:"#1E1B1E",
                margin:"auto",
                borderRadius:"8px",
                textAlign:"center",
                padding:"40px 15px 1px 15px"
            }}>
                <h2 style={{
                    fontSize:"30px",
                    color:"#FFFFFF",
                    padding:"1px 2px",
                    margin:"0px"
                }}>Welcome to Cameo</h2>
                <p style={{
                    color:"#FFFFFF",
                    textAlign:"left",
                    padding:"1px 20px",
                }}>Book personalized video shoutouts from your favorite people</p>
                <Button variant="contained" sx={{
                    width:"312px",
                    height:"47px",
                    padding:"10px 21px",
                    color:"#FFFFFF",
                    fontSize:"15px"
                }}>Continue with Facebook</Button>
                

                <p style={{
                    color:"white",
                    fontSize:"16px"
                }}
                >--------------- Or continue with email ---------------</p>
                
                <CommonInputLabel label={"Full Name"} />
                <CommonInput placeholder={"Pawan Sukhwani"} />
                
                <CommonInputLabel label={"Birthday"} />
                <CommonInput placeholder={"02/28/1994"} />
                
                <CommonInputLabel label={"Email"} />
                <CommonInput placeholder={"pawan@masai.com"} />
                

                <CommonInputLabel label={"Password"} />
                <CommonInput placeholder={"**********"} />
                
                <CommonInputLabel label={"Invite code(Optional)"} />
                <CommonInput placeholder={"Invite code"} />
            
                <Button variant="contained" sx={{
                    textTransform:"none",
                    margin:"15px 0px 10px 0px",
                    width:"312px",
                    height:"47px",
                    padding:"10px 21px",
                    color:"#101010",
                    background:"#37AFB0",
                    fontSize:"15px",
                    fontWeight:"600"
                }}>Create your account</Button>

                <p style={{
                    color:"#37AFB0",
                    cursor:"pointer",
                    
                }}>Already have an account? Sign in</p>

                <Box sx={{
                    display:"flex"
                }}>
                    <Checkbox 
                        checked={checked}
                        onChange={handleCheckChange}
                        sx={{

                        }}
                    />
                    <p style={{
                        color:"#F3F4FE",
                        fontSize:"18px",
                        fontWeight:"500",
                        textAlign:"left"
                    }}>Keep me up-to-date on exclusive Cameo offers, updates, and more! You can opt-out at any time</p>
                </Box>
                
                <p style={{
                    color:"#F3F4FE",
                    fontSize:"15px",
                    fontWeight:"400",
                    padding:"10px 2px",
                    textAlign:"left"
                }}>By creating an account you agree to Cameo's <ATagWithLink>Terms of service,</ATagWithLink> including <ATagWithLink>Additional terms,</ATagWithLink> and <ATagWithLink>Privacy policy.</ATagWithLink></p>
            </Box>
        </Box>
    )
}

export default SignupPage