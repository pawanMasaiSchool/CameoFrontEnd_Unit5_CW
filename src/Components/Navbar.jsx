import Box from "@mui/material/Box"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const Navbar = () => {
    return (
        <Box name='navbar' sx={{
            border:"1px solid black",
            fontFamily:"sans-serif",
            fontWeight:"700",
            fontSize:"16px",
            height:"60px",
            width:"100%",
            margin:"auto",
            background:"black",
            display:"flex",
            flexDirection:"row",
            color:"white",
            justifyContent:"space-evenly",
            gap:"2%",
            opacity:"1"
        }}>
            <Box name='navlinks' sx={{
                // border:"1px solid white",
                color:"white",
                display:"flex",
                flexDirection:"row",
                gap:"7.7%",
                width:"55%",
                margin:"3px",
            }}>
                <img style={{width:"80px",height:"20px",margin:"17px 0px 15px 15px",cursor:"pointer"}} src='https://cdn.cameo.com/staticDir/logo_white.svg' alt="logo" />
                <Box sx={{
                    padding:"19px 0px",
                    cursor:"pointer",
                }}>Categories</Box>
                <Box sx={{
                    padding:"19px 0px",
                    cursor:"pointer"
                }}>Events</Box>
                <Box sx={{
                    padding:"19px 0px",
                    cursor:"pointer"
                }}>Business</Box>
                <Box sx={{
                    padding:"19px 0px",
                    cursor:"pointer"
                }}>About</Box>
            </Box>
            <Box name='searchAndLog' sx={{
                // border:"1px solid white",
                color:"white",
                display:"flex",
                flexDirection:"row",
                width:"42%",
                gap:"1%"
            }}>
                <Box sx={{
                    // border:"1px solid red",
                    width:"78%",
                    padding:"5px",
                    display:"flex",
                }}>
                    <button style={{
                        width:"30px",
                        margin:"1% 0% 1% 0%",
                        marginTop:"1%",
                        paddingTop:"6px",
                        height:"40px",
                        borderWidth:"0px",
                        cursor:"pointer",
                        background:"white",
                        borderRadius:"20px 0px 0px 20px",
                    }}>
                        <SearchSharpIcon />
                    </button>
                    <input style={{
                        width:"87%",
                        margin:"1% 0% 1% 0%",
                        height:"30px",
                        padding:"5px 5px 5px 10px",
                        fontSize:"16px",
                        fontWeight:"500",
                        color:"#AEAFB6",
                        borderRadius:"0px 20px 20px 0px",
                        borderWidth:"0px"
                    }} placeholder="Search..." />

                </Box>
                <button style={{
                    background:"black",
                    cursor:"pointer",
                    width:"80px",
                    height:"40px",
                    fontSize:"14px",
                    margin:"1.5% 1% 1.5% 0%",
                    borderRadius:"10px",
                    borderWidth:"0px",
                    opacity:"1.1",
                    color:"white",
                    border:"2px solid gray",
                    hover:{
                        border:"2px solid black",
                    }
                }}>
                    Log In
                </button>
            </Box>
        </Box>
    )
}

export default Navbar