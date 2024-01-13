import React, { useContext } from "react";
import Usercontext from "../constants/Usercontext";

const Wishlist = () => {
  
    const {wishList ,setWishList } = useContext(Usercontext)
  return <div className={`${wishList ? 'block' : 'hidden'} absolute max-xs:top-[4.5rem] xs:top-[5.4rem] mr-10 z-50  w-[150px] bg-Mgrey h-[100px]`}>
    <h1 className="text-gray-300 w-full text-center py-0.5 text-sm border-b-[0.5px] border-Lgrey">
    My Wishlist
    </h1>
    <div className="flex-col bg-Mgrey shadow-inner  text-gray-100 h-full  justify-center items-center w-full  text-sm flex">
      empty
    </div>
  </div>;
};

export default Wishlist;
