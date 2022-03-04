import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export default function RelatedTags({tag}){
    return(
        <div style={{display:'flex',color:'white',alignItems:'flex-start',border:'1px solid rgb(133, 133, 133)',borderRadius:'30px',display:'inline-flex',padding:'5px 10px',marginRight:'10px',cursor:'pointer'}}>
            <div style={{marginRight:'5px'}}><SearchOutlinedIcon fontSize='small'/></div>
            <div>{tag}</div>
        </div>
    )
}