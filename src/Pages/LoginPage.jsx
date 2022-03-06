import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import AppleIcon from '@mui/icons-material/Apple';
import ATagWithLink from "../Components/ATagWithLink";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
                height:"620px",
                background:"#1E1B1E",
                margin:"auto",
                borderRadius:"8px",
                textAlign:"center",
                padding:"20px 15px 15px 15px"
            }}>
                <h2 style={{
                    fontSize:"30px",
                    color:"#FFFFFF"
                }}>Log in to Cameo</h2>
                <Button variant="contained" sx={{
                    width:"312px",
                    height:"47px",
                    padding:"10px 21px",
                    color:"#FFFFFF",
                    fontSize:"15px"
                }}>Continue with Facebook</Button>
                <Button variant="contained" sx={{
                    textTransform:"none",
                    width:"312px",
                    height:"47px",
                    background:"#000000",
                    padding:"10px 21px",
                    color:"#FFFFFF",
                    marginTop:"20px",
                    fontSize:"18px",
                    ":hover":{
                        background:"#000000",
                    }
                }}>
                    <AppleIcon sx={{fontSize:"19px", marginBottom:"4px", marginRight:"5px"}} />
                    Continue with Apple</Button>
                <p style={{
                    color:"white"
                }}
                >-------------------------- OR --------------------------</p>
                <p style={{
                    color:"white",
                    textAlign:"left",
                    fontWeight:"700",
                    fontSize:"13px",
                    padding:"0px 0px 0px 15px",
                    margin:"20px 0px 10px 0px",
                }}>Email or username</p>
                <input style={{
                    background:"#1E1B1E",
                    width:"280px",
                    borderRadius:"8px",
                    height:"47px",
                    borderWidth:"0px",
                    border:"1px solid #413D40",
                    color:"#413D40",
                    padding:"0px 15px",
                    fontSize:"16px"
                }}
                placeholder="you@example.com"
                />
                <p style={{
                    color:"white",
                    textAlign:"left",
                    fontWeight:"700",
                    fontSize:"13px",
                    padding:"0px 0px 0px 15px",
                    margin:"20px 0px 10px 0px",
                }}>Password</p>
                <input style={{
                    background:"#1E1B1E",
                    width:"280px",
                    borderRadius:"8px",
                    height:"47px",
                    borderWidth:"0px",
                    border:"1px solid #413D40",
                    color:"#413D40",
                    padding:"0px 15px",
                    fontSize:"16px"
                }}
                placeholder="Password"
                />
                <Button variant="contained" sx={{
                    textTransform:"none",
                    margin:"15px 0px 10px 0px",
                    width:"312px",
                    height:"47px",
                    padding:"10px 21px",
                    color:"#101010",
                    background:"#45FFFF",
                    fontSize:"15px",
                    fontWeight:"600"
                }}>Log in with email</Button>
                <p style={{
                    color:"#ADAEB5",
                    fontSize:"13.5px",
                    fontWeight:"500"
                }}>By signing in, you agree to Cameo's 
                <ATagWithLink> Terms of service</ATagWithLink>, 
                including 
                <ATagWithLink> Additional terms,</ATagWithLink> and 
                <ATagWithLink> Privacy policy</ATagWithLink></p>
                <ATagWithLink>Forgot your password?</ATagWithLink>
                <p style={{
                    color:"#ADAEB5",
                    fontSize:"13.5px",
                    fontWeight:"500"
                }}>Don't have an account? <Link to="/signup" style={{
                    color:"white",
                    fontWeight:"700",
                    fontSize:"14px",
                    textDecoration:"none"
                }}>Sign up</Link></p>
            </Box>
        </Box>
    )
}

export default LoginPage