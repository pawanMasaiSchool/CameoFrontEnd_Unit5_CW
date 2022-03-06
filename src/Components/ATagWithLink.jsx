

const ATagWithLink = ({children}) => {
    return (
            <a href="#" style={{
                color:"white",
                fontWeight:"700",
                fontSize:"14px",
                textDecoration:"none"
            }}>{children}</a>
    )
}

export default ATagWithLink