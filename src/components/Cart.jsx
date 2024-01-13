import React, { useContext } from "react";
import Usercontext from "../constants/Usercontext";

const Cart = () => {
  const {cart , setCart} = useContext(Usercontext)
  return <div className={`${cart ? 'block' : 'hidden'} absolute  max-xs:top-[4.5rem] xs:top-[5.4rem]  ml-10  z-50  w-[150px] bg-Mgrey h-[100px]`}>
    <h1 className="text-gray-300 w-full text-center py-0.5 text-sm border-b-[0.5px] border-Lgrey">
    My Cart
    </h1>
    <div className="flex-col bg-Mgrey shadow-inner  text-gray-100 h-full justify-center items-center w-full  text-sm flex">
      empty
    </div>
  </div>;
};

export default Cart;
