import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { useState } from "react"
import { useHistory } from "react-router-dom"



const initCredidentials = {
    celebId:"",
    celebPassword:""
}



const CelebrityLoginPage = () => {
    const history= useHistory()

    const [loginDetails, setLoginDetails] = useState(initCredidentials);

    const {celebId,celebPassword} = loginDetails;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginDetails({...loginDetails, [name]:value});
    }

    const handleCelebLogin = () => {
        if(celebPassword === "secret123"){
            history.push(`/celebrity/${celebId}/dashboard`)
        }
        else{
            alert("Wrong Username Or Password")
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
                height:"420px",
                background:"#1E1B1E",
                margin:"auto",
                borderRadius:"8px",
                textAlign:"center",
                padding:"20px 15px 15px 15px"
            }}>
                <h2 style={{
                    fontSize:"30px",
                    color:"#FFFFFF"
                }}>Log in to Cameo Celebrity</h2>
                
                <p style={{
                    color:"white",
                    textAlign:"left",
                    fontWeight:"700",
                    fontSize:"13px",
                    padding:"0px 0px 0px 15px",
                    margin:"20px 0px 10px 0px",
                }}>Celeb ID</p>
                <input style={{
                    background:"#1E1B1E",
                    width:"280px",
                    borderRadius:"8px",
                    height:"47px",
                    borderWidth:"0px",
                    border:"1px solid #413D40",
                    color:"white",
                    padding:"0px 15px",
                    fontSize:"16px",
                }}
                value={celebId}
                onChange={handleChange}
                placeholder="Celebrity username"
                name="celebId"
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
                    color:"white",
                    padding:"0px 15px",
                    fontSize:"16px"
                }}
                placeholder="Password"
                type='password'
                value={celebPassword}
                onChange={handleChange}
                name="celebPassword"
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
                }} 
                onClick={handleCelebLogin}
                >Log in</Button>
            </Box>
        </Box>
        
    )
}

export default CelebrityLoginPage