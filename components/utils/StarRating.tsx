import { IoIosStar } from "react-icons/io";


const StarRating = ({size}) => {
  return (
    <span className={`flex font-bold gap-1 text-${size} mb-3`}>
    <p className="mr-1">4.8</p>
    {
        Array(5)
            .fill('')
            .map((_, i) => (
                <IoIosStar key={i} className={`text-primary text-${size}`} /> 
            ))
    }
    </span>
  )
}

export default StarRating