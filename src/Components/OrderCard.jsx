import Box from "@mui/material/Box"

export default function OrderCard({id,celeb_img,celeb_name,fore,from,instructions,additionalDetail,price,recieved,video_url,occasion}){
    return(
        <Box name="forBox" sx={{
            background:"#1E1B1E",
            borderRadius:"10px",
            width:"60%",
            margin:"auto",
            marginBottom:"25px",
            padding:"10px 0px 30px 40px",
        }}>
            <p style={{color:"rgba(33,207,230,1.00)"}}>Order id: {id}</p>
            <div style={{display:'flex',padding:'20px',justifyContent:'space-evenly'}}>
                <div>
                    <div>
                        <img style={{width:'150px'}} src={celeb_img}/>
                    </div>
                    <div><h4 style={{marginBottom:'0'}}>{celeb_name}</h4></div>
                </div>
                <div>
                    <div>
                        <h3>Status: {recieved?'Delivered':'Request received'}</h3>
                    </div>
                    <div>
                        <h3>Price: ₹{price}</h3>
                    </div>
                    <div>
                        <h3>For: {fore}</h3>
                    </div>
                    <div>
                        <h3>From: {from}</h3>
                    </div>
                    <div>
                        <h3>Occasion: {occasion}</h3>
                    </div>
                </div>
            </div>
            <div>
                <h4>Instructions: {instructions}</h4>
            </div>
            <div>
                <h4>Additional detail: {additionalDetail}</h4>
            </div>
            <div>
                    <div>
                    {recieved?
                        <h4>Video url: {video_url}</h4>:
                        <h4>Video_url: Not yet available</h4>
                    }
                    </div>
                </div>
        </Box>
    )
}