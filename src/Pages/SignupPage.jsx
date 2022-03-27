import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ATagWithLink from "../Components/ATagWithLink";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import CommonInput from "../Components/CommonInput";
import CommonInputLabel from "../Components/CommonInputLabel";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginsuccess } from "../Redux/Login/action";

const initDetails = {
    name:"",
    birthday:"",
    email:"",
    password:"",
    invite_code:"",
}

const SignupPage = () => {

    const [registerInfo, setRegisterInfo] = useState(initDetails);

    const {name, birthday, email, password, invite_code} = registerInfo;

    const handleInfoChange = (e) => {
        let {name, value} = e.target;
        setRegisterInfo({...registerInfo, [name]:value });
    }

    const [checked, setChecked] = useState(true);
    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
    };


    const history= useHistory()
    const dispatch= useDispatch()

    
    const handleClickOnSignIn=()=>{
        history.push('/login')
    }
    


    const handleFacebookLogin = ()=>{
        // window.open("http://localhost:5000/auth/facebook", "_self");
        // when heroku link does not work we can run this on local host
        
        window.open("https://cameo-backend.herokuapp.com/auth/facebook", "_self");
    }
    const signUpUser= async ()=>{
        console.log(email,password,name,'inside async')
        // return axios.post('http://localhost:5000/auth/signup', {
        // when heroku link does not work we can run this on local host

        return axios.post('https://cameo-backend.herokuapp.com/auth/signup', {
             email,password,name
           })
     }
    const handleSubmission =()=>{
        if(name===''){
            alert('Name cannot be empty')
        }
        else if(email===''){
            alert('Email cannot be empty')
        }
        else if(password.length<8){
            alert('Password cannot be less than 8 characters')
        }
        else{
            signUpUser()
          .then(function (response) {
            const {data}= response.data
            const action= loginsuccess(data.token,data.user)
        dispatch(action)
            history.push('/')
          })
          .catch(function (error) {
            console.log(error)
          })
        }
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
                }} onClick={handleFacebookLogin}>Continue with Facebook</Button>
                

                <p style={{
                    color:"white",
                    fontSize:"16px"
                }}
                >--------------- Or continue with email ---------------</p>

                <CommonInputLabel label={"Full Name"}  />
                <CommonInput placeholder={"Pawan Sukhwani"} value={name} name={"name"} onChange={handleInfoChange} />
                
                <CommonInputLabel label={"Birthday"} />
                <CommonInput placeholder={"02/28/1994"} value={birthday} name={"birthday"} onChange={handleInfoChange} />
                
                <CommonInputLabel label={"Email"} />
                <CommonInput placeholder={"pawan@masai.com"} value={email} name={"email"} onChange={handleInfoChange} />
                

                <CommonInputLabel label={"Password"} />
                <CommonInput placeholder={"**********"} value={password} name={"password"} onChange={handleInfoChange} type="password" />
                
                <CommonInputLabel label={"Invite code(Optional)"}  />
                <CommonInput placeholder={"Invite code"} value={invite_code} name={"invite_code"} onChange={handleInfoChange} />

            
                <Button variant="contained" 

                onClick={handleSubmission}

                sx={{
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
                    
                }} onClick={handleClickOnSignIn}>Already have an account? Sign in</p>

                <Box sx={{
                    display:"flex"
                }}>
                    <Checkbox 
                        checked={checked}
                        onChange={handleCheckChange}
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