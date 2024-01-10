import React, { useContext } from "react";
import UserContext from "../constants/Usercontext";
import { RxCross2 } from "react-icons/rx";
const Filter = () => {
    const {filter , setFilter} = useContext(UserContext)

  return (
    <div className={`${filter ?  'xs:w-[400px] max-xs:w-[200px]':'w-[0px] ' } duration-300  flex flex-col z-50 bg-[#090909] h-screen fixed top-0 right-0`}>
        <div className="nav flex justify-between items-center text-gray-200 text-2xl h-[70px] border-b-[1px] bordr-[#707070] py-2 px-4 "><span classsName="w-max">Filter and sort</span> <RxCross2 className="cursor-pointer " onClick={()=>{setFilter(!filter)}}/></div>
        <progress max={100} value={10}/>
    </div>
  )
}

export default Filter