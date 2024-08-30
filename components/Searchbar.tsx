import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineShoppingCart, MdOutlineSearch  } from "react-icons/md";

const Searchbar = () => {
  return (
    <form className="w-full flex justify-around bg-secondary py-4 px-16">
        <div className="w-3/4 flex items-center">
            <span className="flex items-center text-white text-xs px-4 font-semibold">
                Explore
                <FaChevronDown className="text-[0.7rem] inline-block ml-3 mr-6" />
            </span>
            <div className="relative w-full">
                <MdOutlineSearch className="absolute top-3 left-3 text-secondary text-[1.2rem]"/>
                <input 
                    type="text" 
                    placeholder="Type skill here" 
                    className="w-2/3 h-10 rounded-3xl px-9 outline-none text-xs" 
                />
            </div>
        </div>
        <div className="flex items-center text-xs text-white gap-2 font-semibold">
            <MdOutlineShoppingCart className="text-[1.1rem]"/>
            <span>Cart</span>
        </div>
    </form>
  )
}

export default Searchbar