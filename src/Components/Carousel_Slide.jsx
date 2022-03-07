

const Carousel_Slide = ({backImageURL,heading_1,heading_2,details,BtnName}) => {
    return (
        <div style={{
            width:"2080px",
            height:"590px",
            backgroundImage: `url(${backImageURL})`
          }}>
              <div style={{
                padding:"150px 1800px 0px 50px",
              }}>
                <p style={{
                  textAlign:"left",
                  color:"#00E1FF",
                  fontWeight:"500",
                }}>{heading_1}</p>
                <p style={{
                  color:"white",
                  fontSize:"48px",
                  width:"532px",
                  margin:"5px 0px 15px 0px",
                  textAlign:"left",
                  fontWeight:"700"
                }}>{heading_2}</p>
  
                <p style={{
                  color:"#BEBBBF",
                  width:"532px",
                  textAlign:"left",
                  fontWeight:"700"
                }}>{details}</p>
                
                <button style={{
                  background:"#FF037C",
                  borderWidth:"0px",
                  width:"130px",
                  height:"40px",
                  color:"white",
                  borderRadius:"5px",
                  fontWeight:"800",
                  margin:"5px 0px 20px -95px",
                  cursor:"pointer"
                }}>
                  {BtnName}
                </button>
                
                </div>
            </div>
    )
}

export default Carousel_Slide