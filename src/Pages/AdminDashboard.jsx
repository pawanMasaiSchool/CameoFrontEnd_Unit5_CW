import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminCelebCard from "../Components/AdminCelebCard";
import { AdminLogoutSuccess } from "../Redux/Admin/action";

const AdminDashboard = () => {
    const dispatch = useDispatch()
    const {isAdmin} = useSelector(state=>state.admin);
    const handleAdminLogout = () => {
        const action = AdminLogoutSuccess();
        dispatch(action)
    }
    
    const fetchCelebs = () => {
        return axios.get(`http://localhost:5000/admin/celebs`)
    }

    const [celebs,setCelebs] = useState([])

    const getAllCelebs = async () => {
        const {data} = await fetchCelebs();
        setCelebs(data);
    }

    const sendDeleteRequest = (celeb_id) => {
        return axios.delete(`http://localhost:5000/admin/celebs/${celeb_id}`)
    }

    const handleDelete = async (e) => {
        const deleted = await sendDeleteRequest(e.target.name);
        if(deleted.data.celeb_id === e.target.name){
            // alert("Celebrity Deleted");
        }
        if(deleted.data === "Celebrity does not exist"){
            alert("Celebrity does not exist");
        }
        getAllCelebs();
    }

    
    useEffect(()=>{
        getAllCelebs()
    },[]);


    if(!isAdmin){
        return (
            <Box sx={{color:"white",padding:"80px 20px 10px 20px"}}>
                <h1 >Your are not admin</h1>
                <Link to="/admin/loginpage"><Button sx={{textTransform:"none", color:"red"}} variant="contained">Login as Admin</Button></Link>
            </Box>
        )
    }

    if(isAdmin){
        return (
            <>
                <Button sx={{
                    margin:"60px 20px 10px 20px",
                    color:"red",
                    textTransform:"none"
                }}
                variant="contained"
                onClick={handleAdminLogout}
                >LogOut Admin</Button>
                <Box sx={{
                    border:"1px solid red",
                    width:"98%",
                    margin:"auto",
                    padding:"10px 10px",
                    display:"flex",
                    flexWrap:"wrap",
                }}>   
                    {
                        celebs.map(item=>{
                        return <AdminCelebCard 
                                name={item.name} 
                                celeb_id={item.celeb_id} 
                                price={item.price}
                                imgSrc={item.image_urls[0]}
                                handleDelete={handleDelete}
                                />
                    })
                    }
                    
                </Box>
            </>
        )
    }
}

export default AdminDashboard

