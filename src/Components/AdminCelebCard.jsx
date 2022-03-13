import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"


const AdminCelebCard = ({name,price,imgSrc,handleDelete,celeb_id}) => {
    return (
        <Box sx={{
            borderBottom:"2px solid white",
            width:"18%",
            height:"auto",
            color:"white",
            textAlign:"center",
            padding:"5px 10px",
            margin:"0px 0px 20px 0px",
        }}
        
        >   <Link to={`/celeb/${celeb_id}`} style={{textDecoration:"none", color:"white"}}>
            <p>{name}</p>
            <img 
                style={{width:"55%", height:"200px" }}
                alt="image" 
                src={`${imgSrc}`} />
            <p>Personal:- ₹ {price.personal}</p>
            <p>Business:- ₹ {price.buisness}</p>
            <Button variant="contained" 
            sx={{
                color:"red", 
                background:"white"
            }}
            name={`${celeb_id}`}
            onClick={handleDelete}
            >Delete</Button>
            </Link>
        </Box>
    )
}

export default AdminCelebCard