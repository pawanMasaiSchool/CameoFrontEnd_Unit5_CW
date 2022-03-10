import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Checkbox } from '@mui/material';
import { Box } from "@mui/system";

const SubSortBox = ({name, checked, onChange, pTag}) => {
    return (
        <Box sx={{
                display:"flex",
                // border:"1px solid red",
                padding:"0px",
                height:"30px",
                cursor:"pointer",
                margin:"0px"}}>
            <Checkbox
                name= {`${name}`}
                checked={checked}
                onChange={onChange}
                sx={{color:"#45FFFF"}}
                icon={<CircleOutlinedIcon />} 
                checkedIcon={<CheckCircleIcon />} 
                />
            <p style={{margin:"0px",padding:"6px", fontWeight:"600"}}>{pTag}</p>
        </Box>
    )
}

export default SubSortBox