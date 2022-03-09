import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import AppleIcon from '@mui/icons-material/Apple';
import ATagWithLink from "../Components/ATagWithLink";
import { Link } from "react-router-dom";
import { useState } from "react";
import CommonInputLabel from "../Components/CommonInputLabel";
import CommonInput from "../Components/CommonInput";


const initialDetails = {
    username: "",
    password: ""
}
const LoginPage = () => {
    const [details,setDetails]= useState(initialDetails);

    const {username, password} = details;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setDetails({...details, [name]:value })
    };
    
    const handleClick = () => {
        if(details.password.length <= 4){
            alert("Password Must be of Minimum 5 Characters");
            return
        }
        console.log("username",details.username, "Password",details.password);
    }

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
                <CommonInputLabel label="Email or username" />
                <CommonInput value={username} placeholder="you@example.com" name="username" onChange={handleInputChange} />


                <CommonInputLabel label="Password" />
                <CommonInput placeholder="Password" name="password" value={password} type="password" onChange={handleInputChange}  />
                
                
                
                <Button variant="contained" 
                style={{
                    cursor:"pointer",
                    textTransform:"none",
                    margin:"15px 0px 10px 0px",
                    width:"312px",
                    height:"47px",
                    padding:"10px 21px",
                    color:"#101010",
                    background:"#45FFFF",
                    fontSize:"15px",
                    borderWidth:"0px",
                    fontWeight:"600"
                }}

                onClick={handleClick}
                
                >Log in with email</Button>


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