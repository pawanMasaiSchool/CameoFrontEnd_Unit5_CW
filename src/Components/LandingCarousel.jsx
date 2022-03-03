import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const LandingCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      showArrows={true}
      showStatus={false}
      width="100%"
      showThumbs={false}
    >
      <div>
        <img
          style={{ height: "600px" }}
          alt="slidingImage"
          src="https://d31wcbk3iidrjq.cloudfront.net/eab99bea-6bdc-4bf0-ad54-20b9a40efd56.png?w=2080&h=590"
        />
      </div>
      <div>
        <img
          style={{ height: "600px" }}
          alt="slidingImage"
          src="https://d31wcbk3iidrjq.cloudfront.net/f8af8478-3da1-4b01-8d30-0bab2ea32de2.png?w=2080&amp;h=590"
        />
      </div>
      <div>
        <img
          style={{ height: "600px" }}
          alt="slidingImage"
          src="https://d31wcbk3iidrjq.cloudfront.net/ef5c5326-dc46-4c33-8d8c-a3cb0254f533.png?w=2080&amp;h=590"
        />
      </div>
      <div>
        <img
          style={{ height: "600px" }}
          alt="slidingImage"
          src="https://d31wcbk3iidrjq.cloudfront.net/f7986462-2766-4ace-9a32-17abbb5c8d47.png?w=2080&amp;h=590"
        />
      </div>
    </Carousel>
  );
};

export default LandingCarousel;
