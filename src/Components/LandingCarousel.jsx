import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Box from "@mui/material/Box";
import Carousel_Slide from "./Carousel_Slide";

const LandingCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={2500}
      infiniteLoop={true}
      showArrows={true}
      showStatus={false}
      width="100%"
      showThumbs={false}
    >
      
        <Carousel_Slide backImageURL={"https://d31wcbk3iidrjq.cloudfront.net/eab99bea-6bdc-4bf0-ad54-20b9a40efd56.png?w=2080&h=590"}
          heading_1={"WELCOME TO CAMEO"}
          heading_2={"Personalized videos from your favorite stars"}
          details="Access thousands of celebrities and request a personalized video message for any occasion."
          BtnName={"Request now"}
        />
        <Carousel_Slide backImageURL={"https://d31wcbk3iidrjq.cloudfront.net/f7986462-2766-4ace-9a32-17abbb5c8d47.png?w=2080&amp;h=590"}
          heading_1={"ATHLETES"}
          heading_2={"It’s game time on Cameo"}
          details="Get a pep talk, advice or any personalized video message from your favorite athlete."
          BtnName={"Request now"}
        />
        <Carousel_Slide backImageURL={"https://d31wcbk3iidrjq.cloudfront.net/ef5c5326-dc46-4c33-8d8c-a3cb0254f533.png?w=2080&amp;h=590"}
          heading_1={"CAMEO FOR BUSINESS"}
          heading_2={"Propel your brand into the spotlight"}
          details="Unlock access to top stars and convert customers by leveraging the power of Cameo for Business."
          BtnName={"Request now"}
        />
        <Carousel_Slide backImageURL={"https://d31wcbk3iidrjq.cloudfront.net/68e9751c-897a-4e9c-8e03-f38c8a316d59.png?w=2080&amp;h=590"}
          heading_1={"CAMEO CARES"}
          heading_2={"Fundraising for Ukraine relief"}
          details="Request a personalized video and a portion of the proceeds will go to Choose Love."
          BtnName={"Get Involved"}
        />
    </Carousel>
  );
};

export default LandingCarousel;
