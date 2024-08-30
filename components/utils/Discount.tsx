import { RiDiscountPercentFill } from "react-icons/ri";


const Discount = ({discount}) => {
  return (
    <div className="flex items-center gap-2 px-1 pr-4 py-[0.4rem] text-xs rounded-full bg-greenBadge text-white">
        <RiDiscountPercentFill  className="text-[1.1rem] " />
        <span className="text-white font-semibold">{discount}% discount</span>
    </div>
  )
}

export default Discount