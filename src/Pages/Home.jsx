import React from "react";
import greenBg from "../assets/bottom-green.svg";
import pngShoe from "../assets/fashion-shoes-sneakers-removebg-preview.png";
import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <div className={`h-screen fixed  top-0 flex  items-center p-10 w-full`}>
      <div className="flex flex-col  z-50 gap-y-4">
        <h1  className="text-white md:text-[5rem] xs:text-[4rem] uppercase max-xs:text-[3rem] font-rubikGlitch ">fast <span className="bg-[#28CD0D] px-3">race</span></h1>
        <h4 className="text-white text-[40px] font-[600]  max-xs:text-[20px]  max-xs:w-[300px] w-[570px] capitalize font-rubik">
          Step Into Comfort: Elevate Your Every Move
        </h4>
        <p className="text-white w-[500px]  max-xs:w-[300px] max-xs:text-sm">
          "Elevate every step with Fast Race. Our shoes blend style with
          unparalleled comfort, redefining your journey in every stride.
          Experience the perfect fusion of fashion and well-being with us."
        </p>
        <Link to="/Categories" className="bg-white px-3 py-2 w-fit mt-5 z-10 rounded-sm  max-xs:text-sm  capitalize text-lg font-medium ">
          explore more
        </Link>
      </div>
      <div  className="black-gradient flex jusitfy-center  fixed  w-fit  z-20   max-xs:absolute right-0  items-center ">
        <img src={pngShoe} className="h-[400px] max-md:opacity-20 max-xs:h-[300px] " alt="shoe" />
      </div>
      <img src={greenBg} className=" h-[400px] sm:w-[400px] max-xs:w-[300px]  lg:w-[500px] max-xs:bg-[300px] fixed bottom-[-100px] left-0 z-20"/>
    </div>
  );
};

export default Home;
