import React, { useState } from "react";
import { NavLinks } from "../constants";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

const Navbar = (props) => {
  const [activeLink, setActiveLink] = useState("/");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex items-center sticky top-0 w-full h-[5rem] z-50 bg-gray-900/10 justify-around  px-5">
      <div className="w-fit">
        <a href="#" className="text-green-500 text-xl">
          FR
        </a>
      </div>
      <ul className="flex justify-around items-center max-xs:hidden  w-fit  sm:gap-10 lg:gap-20 text-base">
        {NavLinks.map((e, index) => {
          return (
            <li
              onClick={() => {
                setActiveLink(e.path);
              }}
              key={index}
              className={`cursor-pointer ${
                activeLink === e.path ? " text-gray-400" : " text-white"
              } `}
            >
              <Link to={e.path}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
      <ul className="flex justify-around items-center w-fit max-xs:gap-5 xs:gap-5 lg:gap-10  text-white text-xl">
        <IoIosHeartEmpty />
        <IoBagOutline />
      </ul>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
        className="flex z-50 absolute right-3 top-[1.1rem]"
      >
        <IoIosMenu
          className={`text-white text-[40px] sm:hidden ${
            toggle ? "hidden" : "block"
 
          }  `}
        />
        <RxCross1
          className={`text-white text-[40px] ${toggle ? "block" : "hidden"} `}
        />
      </button>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } absolute right-0 top-0 h-[110vh] z-40 bg-gray-700/20 backdrop-blur-sm  w-screen justify-end`}
      >
        <div className={` h-[110vh] z-40 bg-[#161616] w-[300px]`}>
          <div className="h-[64px]  border-b-[1px] border-[#393939] w-[90%] m-auto "></div>
          <ul className="flex flex-col border-b-[2px] w-[80%] m-auto border-gray-300 p-2 ">
        {
          NavLinks.map((e,index)=>{
            return(
              <Link key={index} to={e.path}>
              <li
                onClick={() => {
                  setToggle(!toggle);
                }}
                style={{ fontWeight: "400" }}
                className=" font-sans text-[18px] text-white py-3 px-3"
              >
                {e.title}
              </li>
            </Link>
            )
          })
        }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
