import axios from "axios";
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CommonInput from "../Components/CommonInput";
import CommonInputLabel from "../Components/CommonInputLabel";
import { clearorder } from "../Redux/Order/action";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#FF037C',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function PaymentPage(){
    const [open,setOpen]= useState(false)
    const history= useHistory()
    const order= useSelector((state)=>state.order)
    const token= useSelector((state)=>state.login.token)
    const dispatch= useDispatch()
    const addOrder=async (payload)=>{
        let config = {
            headers: {
                'authorization': `Bearer ${token}`
            }
          }
          let data = payload
        return axios.post('http://localhost:5000/orders/create',data,config)
    }
    const handleOpen = () => {
        setOpen(true)
        const payload= {...order,recieved:false}
        addOrder(payload)
        .then(function (response) {
            console.log(response)
           })
           .catch(function (error) {
             console.log(error)
           })
    }
  const handleClose = () => {
      setOpen(false)
      dispatch(clearorder())
      history.push('/')
    }
    return(
        <div style={{paddingTop:'75px'}}>
            <Box name="forBox" sx={{
                background:"#1E1B1E",
                borderRadius:"10px",
                width:"480px",
                margin:"auto",
                marginBottom:"25px",
                padding:"10px 0px 30px 40px",
            }}>
                <CommonInputLabel label="Payment info" fontSize="24px"/>
                <div style={{marginTop:'22px'}}>
                    <CommonInputLabel label="Credit/Debit Card" fontSize="15px"/>
                    <div style={{marginLeft:'25px',marginTop:'15px'}}><CommonInput width="350px" placeholder='Card number'/></div>
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:'15px'}}>
                    <div style={{marginLeft:'25px'}}><CommonInput width="56px" placeholder='MM/YY'/></div>
                    <div style={{marginRight:'73px'}}><CommonInput width="40px" placeholder='CVV'/></div>
                    </div>
                </div>
                <div style={{marginTop:'22px'}}>
                <CommonInputLabel label="Summary" fontSize="20px"/>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>
                        <div><CommonInputLabel label="Cameo video" fontSize="18px"/></div>
                        <div><CommonInputLabel label="Service fee" fontSize="18px"/></div>
                        <div><CommonInputLabel label="Total" fontSize="20px"/></div>
                    </div>
                    <div style={{marginRight:'50px'}}>
                        <div><CommonInputLabel label={`₹${order.price}`} fontSize="18px"/></div>
                        <div><CommonInputLabel label={`₹${order.price*0.03}`} fontSize="18px"/></div>
                        <div><CommonInputLabel label={`₹${(order.price*0.03)+order.price}`} fontSize="20px"/></div>
                    </div>
                </div>
                </div>
                <Box sx={{marginTop:'22px', width:"80%",marginLeft:'26px'}}>
                    <Button variant="contained" sx={{
                        background:"#FF037C", 
                        width:"100%", 
                        height:"45px",
                        textTransform:"none",
                        fontSize:"20px"
                    }} 
                    onClick={handleOpen}>Book Now</Button>
                </Box>
            </Box>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title" aria-describedby="modal-description"
      >
        <Box sx={style}>
        <h2 id="modal-title" style={{color:'white'}}>Congratulations!!!</h2>
        <p id="modal-description" style={{color:'white'}}>Booking successful</p>
        </Box>
      </Modal>
        </div>
    )
}