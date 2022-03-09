

const CommonInputLabel = ({label, fontSize = "13px", padding="0px 0px 0px 15px"}) => {
    return (
        <p style={{
            color:"white",
            textAlign:"left",
            fontWeight:"700",
            fontSize:fontSize,
            padding:padding,
            margin:"20px 0px 10px 0px",
        }}>{label}</p>
    )
}

export default CommonInputLabel