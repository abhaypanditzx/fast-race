import React, { useContext } from "react";
import UserContext from "../constants/Usercontext";
import { RxCross2 } from "react-icons/rx";
const Filter = () => {
  const { filter, setFilter } = useContext(UserContext);

  return (
    <div
      className={`${
        filter ? "xs:w-[450px] max-xs:w-[260px]" : "w-[0px] "
      } duration-300  flex flex-col z-50 bg-[#090909] h-screen overflow-hidden fixed top-0 right-0`}
    >
      <div className="nav flex  justify-between items-center text-gray-200 text-2xl h-[70px] border-b-[1px] bordr-[#707070] py-2 px-4 ">
        <span classsName="w-max">Filter and sort</span>{" "}
        <RxCross2
          className="cursor-pointer "
          onClick={() => {
            setFilter(!filter);
          }}
        />
      </div>
      <div className="relative h-full w-full flex flex-col">
        <div className="p-4">
          <label
            htmlFor="default-range"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Price range
          </label>
          <input
            id="default-range"
            type="range"
            max={100}
            min={10}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        </div>
        <div className="p-4">
          <span className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
            size
          </span>
          <select
            name="size"
            id="size"
            className="bg-[#1E1E1E] p-2 outline-none text-white"
          >
            <optgroup label="size">size</optgroup>
            <option value="">1(124)</option>
            <option value="">2(138)</option>
            <option value="">3(510)</option>
            <option value="">4(636)</option>
            <option value="">5(608)</option>
            <option value="">6(869)</option>
            <option value="">7(913) </option>
            <option value="">8(712) </option>
            <option value="">9(502) </option>
            <option value="">10(545) </option>
            <option value="">11(351) </option>
            <option value="">12(166) </option>
            <option value="">13(134) </option>
            <option value="">S(40) </option>
            <option value="">M(39) </option>
            <option value="">L(38) </option>
            <option value="">XL(46) </option>
            <option value="">XXL(19) </option>
            <option value="">UN(65)</option>
          </select>
        </div>
        <div className=" p-4  text-white">
          <span className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
            gender
          </span>
          <div className="flex gap-x-2">
            <label
              htmlFor="my"
              className="block mb-2  bg-[#1e1e1e] p-1 text-base font-medium text-gray-900 dark:text-white"
            >
              <input type="radio" name="gender" className="gap-" id="female" />
              <span className="p-1">male</span>
            </label>
            <label
              htmlFor="my"
              className="block mb-2  bg-[#1e1e1e] p-1 text-base font-medium text-gray-900 dark:text-white"
            >
              <input type="radio" name="gender" id="male" />
              <span className="p-1">female</span>
            </label>
          </div>
        </div>
        <div className=" absolute flex-wrap bottom-5 p-4 w-full justify-around flex ">
          <button className=" bg-[#1e1e1e] font-[500] uppercase text-white xs:w-[180px] text-md max-xs:h-[30px] max-xs:w-[100px] h-[40px] shadow-md ">
            clear all filters
          </button>
          <button className=" bg-[#28cd0d] font-[600] uppercase text-white xs:w-[160px] max-xs:text-sm max-xs:h-[30px] max-xs:w-[80px] h-[40px] shadow-md ">
            apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
