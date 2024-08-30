import Image from "next/image"
import StarRating from "./StarRating"


const InstructorCard = () => {
  return (
    <div className="w-[70%] rounded-lg p-7 pt-9 pb-4 bg-white shadow-light flex gap-4 items-center justify-between">
        <div className="w-2/3 flex flex-col gap-1">
            <h3 className="text-lg text-tertiary font-semibold">Chatur Ramlingam</h3>
            <p className="w-[70%] text-sm font-medium mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi quisquam perspiciatis nulla.</p>
            <StarRating size={"sm"}/>
            <h4 className="text-[0.95rem] text-primary font-bold mt-4 ">About me</h4>
            <p className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam a repudiandae assumenda, repellat quo quis vitae! Commodi nostrum dolorem distinctio itaque, cumque in fugit, reiciendis iusto soluta saepe, architecto at?</p>
            <span className="text-tertiary text-xs font-bold">Show More</span>
        </div>
        <div className="w-1/3 flex flex-col gap-4 items-center justify-center">
            <Image
                src="/assets/person.png"
                alt="Instructor"
                width={130}
                height={130}
                className="rounded-full bg-gray-300"
            />
            <span className="flex gap-4 justify-center">
                <Image
                    src="/assets/yt.png"
                    alt="yt"
                    width={22}
                    height={30}
                    className="rounded-full bg-gray-300"
                />
                <Image
                    src="/assets/facebook.png"
                    alt="facebook"
                    width={22}
                    height={30}
                    className="rounded-full bg-gray-300"
                />
                <Image
                    src="/assets/x.png"
                    alt="twitter"
                    width={22}
                    height={30}
                    className="rounded-full bg-gray-300"
                />
                <Image
                    src="/assets/linkedin.png"
                    alt="linkedin"
                    width={22}
                    height={30}
                    className="rounded-full bg-gray-300"
                />
            </span>
        </div>
    </div>
  )
}

export default InstructorCard