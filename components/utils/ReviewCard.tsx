import Image from "next/image"
import StarRating from "./StarRating"


const ReviewCard = () => {
  return (
    <div className="w-[22rem] h-fit flex flex-col gap-3 flex-wrap p-4 bg-white shadow-light rounded-lg">
        <div className="flex items-center gap-2">
            <Image
                src="/assets/user2.png"
                alt="user"
                width={45}
                height={45}
            />
            <div className=" flex flex-col gap-1">
                <h1 className="text-md text-gray-800 font-bold">John Doe</h1>
                <span className="flex items-center gap-3">
                    <StarRating size={"xs"}/>
                    <p className="text-xs font-medium pb-3">(4 Months ago)</p>
                </span>
            </div>
        </div>
        <p className="text-sm font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium voluptas sapiente incidunt. Totam vitae iure, tempore nostrum assumenda delenitm!</p>
    </div>
  )
}

export default ReviewCard