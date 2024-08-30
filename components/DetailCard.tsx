import { CiStopwatch, CiShare2 } from "react-icons/ci";

import Discount from "./utils/Discount";
import StarRating from "./utils/StarRating";


const DetailCard = () => {
  return (
    <section className="w-[70%] h-fit flex justify-between mx-auto my-12 rounded-lg p-6 bg-white shadow-light">
        <div className="w-[40%] flex flex-col gap-3 text-sm">
            <h1 className="text-primary text-xl font-bold">Lorem ipsum dolor sit amet</h1>
            <p className="pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nesciunt dolorem Lorem ipsum dolor sit amet.</p>
            <p 
                className="font-semibold "
                >Created By:
                <span className="text-tertiary"
                    > Chatur Ramlingam
                </span>
            </p>
            <StarRating size={"sm"}/>
            <div className="flex items-end gap-6">
                <p className="font-extrabold text-xl">
                    <span>&#x20B9;</span>499
                </p>
                <p className="font-semibold">
                    <span>&#x20B9;</span>3,099
                </p>
                <Discount discount={50}/>
            </div>
            <p className="text-red-500 text-xs font-medium "
                >
                <CiStopwatch className="text-red-500 text-[1rem] font-extrabold inline" />
                Limited Time Deal !
            </p>
            <div className="flex gap-3 font-bold mt-4">
                <button className="bg-primary text-white px-10 py-3 rounded-full">Buy Now</button>
                <button className="border border-purple-700 text-primary px-10 py-3 rounded-full">Add to cart</button>
                <span className="border border-purple-700 flex items-center justify-center rounded-full px-5">
                    <CiShare2 className="text-primary text-[1.5rem]" />
                </span>
            </div>
        </div>

        <div className="w-1/3 flex">
            <div className="w-[80%] flex flex-col gap-3 justify-center h-fit border border-purple-300 rounded-lg p-3">
                <p className="w-full h-[8rem] bg-gray-200 rounded-md"/>
                <p className="text-xs text-center font-medium">Use coupon to get extra discount</p>
                <div className="border border-dashed flex justify-between border-purple-600 rounded-lg px-4 py-3">
                    <span className="text-xs font-bold text-secondary">ENESTCOUPON26</span>
                    <p className="text-tertiary text-xs font-semibold">Copy</p>
                </div>
                <p className="text-tertiary font-semibold text-sm text-center">Apply Coupon</p>
                <div className="flex">
                    <input type="text" className="w-full border border-purple-600 text-sm rounded-tl-lg rounded-bl-lg p-3 outline-none" placeholder="Enter Coupon Code"/>
                    <button className="bg-secondary text-white px-8 py-2 rounded-tr-lg rounded-br-lg">Apply</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DetailCard