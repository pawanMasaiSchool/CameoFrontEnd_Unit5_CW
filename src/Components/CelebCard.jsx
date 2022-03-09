import styling from "./CelebCard.module.css";
import BoltIcon from "@mui/icons-material/Bolt";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CelebCard = ({ name, profession, price, img_url,id }) => {
  const history= useHistory()
  const handleClick=()=>{
    history.push(`/celeb/${id}`)
  }
  return (
    <div className={styling.outerDiv} onClick={handleClick}>
      <div className={styling.imgDiv}>
        <img className={styling.innerImage} alt="imag" src={img_url} />
      </div>
      <div className={styling.celebName}>{name}</div>
      <div className={styling.profession}>{profession}</div>
      <div className={styling.priceAndDeliveryDiv}>
        <div style={{ paddingTop: "16px" }}>${price}+</div>
        <div className={styling.priceAndDeliveryDiv}>
          <BoltIcon
            sx={{
              color: "#FFF400",
              width: "30px",
              height: "30px"
            }}
          />
          <p style={{ margin: "6px 0px" }}>24hr</p>
        </div>
      </div>
    </div>
  );
};

export default CelebCard;
