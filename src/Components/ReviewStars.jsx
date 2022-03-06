import StarIcon from '@mui/icons-material/Star';
export default function ReviewStars({number}){
    if(number===1){
        return(
            <div style={{color:'yellow'}}>
                <StarIcon/>
            </div>
        )
    }
    else if(number===2){
        return(
            <div style={{color:'yellow'}}>
                <StarIcon/>
                <StarIcon/>
            </div>
        )
    }
    else if(number===3){
        return(
            <div style={{color:'yellow'}}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
        )
    }
    else if(number===4){
        return(
            <div style={{color:'yellow'}}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
        )
    }
    else if(number===5){
        return(
            <div style={{color:'yellow'}}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
        )
    }
}