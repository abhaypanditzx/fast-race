import React, { useEffect, useState } from "react";
import skate from "../assets/skate.mp4";
const About = () => {
  const [videoSrc, setVideoSrc] = useState(skate);

  return (
    <div className="w-screen overflow-hidden   text-wrap">
      <video
        loop
        autoPlay
        muted
        className="absolute top-12 opacity-50 left-0 z-[-1] w-full"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="flex flex-col">
        <h1 className="lg:text-[13rem] md:text-[8rem] sm:text-[6rem] leading-[1.2] max-xs:text-[2.5rem] xs:text-[6rem] p-2 font-[600] uppercase text-white">
          WELCOME TO FAST RACE
        </h1>
        <h3 className="lg:text-[4rem] md:text-[3rem] sm:text-[2rem] max-xs:text-[1rem] xs:text-[1.5rem] p-2 font-[500] uppercase text-white">
          Your One-Stop Shop for High-Performance Footwear
        </h3>
      </div>
      <div className="  w-full max-sm:mt-10 p-5 ">
        <div className="w-full items-center max-sm:flex-col-reverse flex-row  bg-Lgrey/20  p-4 m-auto  flex ">
          <h4 className=" text-white font-[500] tracking-wide p-3  font-lora  max-w-[600px] w-full h-full">
            “ At Fast Race, we're passionate about empowering people of all
            genders to reach their full potential, one stride at a time. We
            believe the right footwear can be the difference between a sluggish
            jog and a thrilling sprint, a hesitant walk and a confident stride.
            That's why we curated a diverse collection of high-performance shoes
            for men and women, built to fuel your passions and ignite your
            journey. ”
          </h4>
          <div className=" bg-aboutImage h-[300px] min-h-[200px] max-xs:w-[350px]  w-[500px] m-auto rounded-xl   bg-no-repeat bg-cover "></div>
        </div>
      </div>
      <div className="points">
        <h2 className="lg:text-[2rem] md:text-[3rem] sm:text-[2rem] max-xs:text-[1rem] xs:text-[1.5rem] p-2 font-[500] uppercase text-white">
          Here's why Fast Race ?
        </h2>
        <ul className="text-white flex flex-col list-disc gap-y-5 p-5 md:w-[80%] max-md:w-[100%] ">
          <li className="font-rubik mx-2 text-sm">
            <span className="text-lg w-max text-gray-200 font-[600]">
              Shoes for Every Step:
            </span>
             We understand every path is unique. Whether you're conquering
            asphalt jungles, scaling mountain trails, or mastering gym routines,
            our extensive collection covers running, training, hiking, and
            lifestyle shoes, each meticulously designed for specific activities
            and performance levels
          </li>
          <li className="font-rubik mx-2">
            <span className="text-lg w-max text-gray-200 font-[600]">
              Innovation Underfoot:
            </span>
             We partner with leading brands that prioritize cutting-edge
            technology and materials. Experience the comfort and responsiveness
            of cushioned soles, the support of stabilizing structures, and the
            breathability of advanced textiles, all pushing the boundaries of
            what's possible in footwear.
          </li>
          <li className="font-rubik mx-2">
            <span className="text-lg w-max text-gray-200 font-[600]">
              Style Meets Substance: 
            </span>
            Function doesn't have to be devoid of flair! Our shoes come in a
            vibrant array of colors and designs, letting you express your
            individuality while you conquer your goals.
          </li>
          <li className="font-rubik mx-2">
            <span className="text-lg w-max text-gray-200 font-[600]">
              Fueling Your Journey: 
            </span>
            More than just a shoe store, Fast Race is a community of passionate
            individuals united by a love for movement. We offer expert advice,
            training tips, and inspiring stories to keep you motivated and
            reaching for new heights.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
