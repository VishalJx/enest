import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const WhatYouWillLearn = () => {

    const whatYouWillLearn = [
        {
            description: 'Learn how to build a full stack application with React and Node.js',

        },
        {
            description: 'Understand how to build a RESTful API with Node.js and Express',

        },
        {
            description: 'Learn how to use MongoDB and Mongoose to create and manage a database',

        },
        {
            description: 'Understand how to use React Router to create a single page application',

        },
        {
            description: 'Learn how to use Redux to manage the state of your application',

        },
        {
            description: 'Understand how to use Redux Thunk to make asynchronous requests',

        },
        {
            description: 'Learn how to use React Hooks to manage state in functional components',
        }
    ]

  return (
    <section className="w-[70%] h-[12rem] rounded-lg p-6 bg-white shadow-light flex flex-col flex-wrap gap-4 justify-center">
        {
            whatYouWillLearn.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="text-green-600 text-xl"/>
                    <p className="text-sm font-medium text-gray-700">{item.description}</p>
                </div>
            ))
        }
    </section>
  )
}

export default WhatYouWillLearn