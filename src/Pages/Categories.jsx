import React from "react";
import sneakers from "../assets/sneakers.jpg";
import { TwoCategory , Trending} from "../constants";
const Categories = () => {
  return (
    <div className=" h-full w-full">
      <section className="flex gap-x-10  justify-center p-10 items-center w-full">
        {TwoCategory.map((e, index) => {
          return (
            <div
              key={`category-${index}`}
              className={`relative ${e.class} cursor-pointer flex   bg-no-repeat bg-cover h-[500px] w-[400px] max-xs:w-[200px] max-xs:h-[210px] min-h-[200px] min-w-[100px]`}
            >
              <div className="bg-black/50 hover:bg-black/10  z-0 absolute top-0 left-0 h-full w-full"></div>
              <div className="z-50 relative self-end max-xs:p-2 xs:p-5 gap-y-4">
                <h1 className="text-white max-xs:text-lg xs:text-xl pb-2">{e.title}</h1>
                <button className="bg-white  h-fit w-fit rounded-xl max-xs:text-sm max-xs:px-3  shadow-md px-6 font-semibold py-1">
                  Shop
                </button>
              </div>
            </div>
          );
        })}
      </section>
    <div className="flex-col gap-y-5 p-10 flex">
    <h1 className="text-3xl rubik text-white">Trending</h1>
      <div className="flex w-[80vw]  overflow-scroll justify-start gap-x-4  ">
      {Trending.map((e, index) => {
          return (
            <div key={`trending-${index}`} className="border-[1px] border-[#707070] bg-[#161616] rounded-md h-[300px] p-4 min-w-[250px] ">
            <div className="overflow-hidden w-full rounded-md h-[180px]">
              <img src={e.image} className="object-fill" alt="" />
            </div>
            <div className="flex-col capitalize  py-2 flex">
              <h2 className="text-white text-lg">{e.Name}</h2>
              <p className="text-gray-400 text-xs">{e.description} </p>
              <h4 className="text-white  mt-1 text-lg">{e.Price}</h4>
            </div>
          </div>
          );
        })}
   
      </div>
    </div>

    <div className="flex-col gap-y-5 p-10 flex">
    <h1 className="text-3xl rubik text-white">Trending</h1>
      <div className="flex w-[80vw]  overflow-scroll justify-start gap-x-4  ">
      {Trending.map((e, index) => {
          return (
            <div key={`trending-${index}`} className="border-[1px] border-[#707070] bg-[#161616] rounded-md h-[300px] p-4 min-w-[250px] ">
            <div className="overflow-hidden w-full rounded-md h-[180px]">
              <img src={e.image} className="object-fill" alt="" />
            </div>
            <div className="flex-col capitalize  py-2 flex">
              <h2 className="text-white text-lg">{e.Name}</h2>
              <p className="text-gray-400 text-xs">{e.description} </p>
              <h4 className="text-white  mt-1 text-lg">{e.Price}</h4>
            </div>
          </div>
          );
        })}
   
      </div>
    </div>
    </div>
  );
};

export default Categories;
