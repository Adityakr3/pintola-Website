import React from "react";
import { Carousel } from "@material-tailwind/react";
const MainPage = () => {
  return (
    <div className="w-full h-[36vw] border-t-4 border-deep-orange-500">
      <Carousel>
        <img
          src="https://pintola.in/cdn/shop/files/Website_Banner_1_1600x.jpg?v=1709183995"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://pintola.in/cdn/shop/files/Website-Banner-copy3_1600x.jpg?v=1708516056"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://pintola.in/cdn/shop/files/Desktop_1600x.jpg?v=1704966813"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default MainPage;
