import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { AdminLoginSuccess } from "../Redux/Admin/action"


const initCredidentials = {
    adminId:"",
    adminPassword:""
}



const AdminLoginPage = () => {
    const dispatch = useDispatch()
    const history = useHistory();


    const [loginDetails, setLoginDetails] = useState(initCredidentials);

    const {adminId,adminPassword} = loginDetails;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginDetails({...loginDetails, [name]:value});
    }

    const handleAdminLogin = () => {
        if(adminId === "pawanMasai" && adminPassword === "Masai12345"){
            const action = AdminLoginSuccess();
            dispatch(action)
            history.push("/admin/dashboard")
        }
        else{
            alert("Wrong adminId Or adminPassword")
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
                }}>Log in to Cameo ADMIN</h2>
                
                <p style={{
                    color:"white",
                    textAlign:"left",
                    fontWeight:"700",
                    fontSize:"13px",
                    padding:"0px 0px 0px 15px",
                    margin:"20px 0px 10px 0px",
                }}>Admin ID</p>
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
                value={adminId}
                onChange={handleChange}
                placeholder="Admin Name"
                name="adminId"
                />
                <p style={{
                    color:"white",
                    textAlign:"left",
                    fontWeight:"700",
                    fontSize:"13px",
                    padding:"0px 0px 0px 15px",
                    margin:"20px 0px 10px 0px",
                }}>Admin Password</p>
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
                placeholder="Admin Password"
                type='password'
                value={adminPassword}
                onChange={handleChange}
                name="adminPassword"
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
                onClick={handleAdminLogin}
                >Log in as ADMIN</Button>
            </Box>
        </Box>
        
    )
}

export default AdminLoginPage