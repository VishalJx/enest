import Image from "next/image"
import StarRating from "./StarRating"

const CourseCard = () => {

    const courseImages = [
        {src: "/assets/img1.png", alt: "course"},
        {src: "/assets/img2.png", alt: "course"},
        {src: "/assets/img3.png", alt: "course"},
        {src: "/assets/img4.png", alt: "course"},
    ]

  return (
    <div className="flex gap-4">
    {
        courseImages.map((course, index) => (
        <div key={index} className="w-[18rem] bg-white shadow-light rounded-2xl">
            <Image
                src={course.src}
                alt="course"
                width={300}
                height={200}
                className=""
            />
            <div className="py-3 px-4 flex flex-col gap-2">
                <h3 className="font-bold">Lorem, ipsum dolor.</h3>
                <p className="text-sm font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias qui non modi ipsa fugiat blanditiis!</p>
                <p className="text-xs text-gray-400">Dr. Chatur Ramlingam</p>
                <div className="flex items-center justify-between">
                    <span>
                        <p className="font-bold mb-2">&#x20B9;499</p>
                        <StarRating size={"xs"}/>
                    </span>
                    <span className="bg-yellow-500 text-xs font-bold px-2 py-1 rounded-md">Bestseller</span>
                </div>
            </div>
        </div>
        ))
    }
    </div>
  )
}

export default CourseCard