import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhatYouWillLearn = () => {

    const whatYouWillLearn = [
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },

    ]

  return (
    <section className="w-[70%] h-[12rem] rounded-lg p-6 bg-white shadow-light flex flex-col flex-wrap gap-4 justify-center">
        {
            whatYouWillLearn.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="text-green-600 text-xl"/>
                    <p className="text-xs font-medium text-gray-700">{item.description}</p>
                </div>
            ))
        }
    </section>
  )
}

export default WhatYouWillLearn