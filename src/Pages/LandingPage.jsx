import CelebCard from "../Components/CelebCard"
import LandingCarousel from "../Components/LandingCarousel"


const LandingPage = () => {
    return (
        <>
            <LandingCarousel />
            <CelebCard 
                name="Shonali Nagrani"
                profession="Bollywood Model/Actress"
                price="150"
                img_url="https://d31wcbk3iidrjq.cloudfront.net/VVIiX_Ijm_avatar-OrlzCZbOf.jpg?h=360&w=300&q=100" 
            />
        </>
    )
}

export default LandingPage