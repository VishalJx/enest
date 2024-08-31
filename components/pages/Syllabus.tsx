import React, { useState } from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Syllabus = () => {
    const [clickedSection, setClickedSection] = useState(null);

    const syllabusData = [
        {
            courseId: '1',
            sections: [
                {
                    title: 'Introduction to JavaScript',
                    lectures: [
                        { title: 'Introduction', content: 'Introduction to JavaScript and its history.' },
                        { title: 'Setting Up the Environment', content: 'How to set up a JavaScript development environment.' },
                        { title: 'Hello World', content: 'Writing your first JavaScript program.' }
                    ]
                },
                {
                    title: 'JavaScript Basics',
                    lectures: [
                        { title: 'Variables and Data Types', content: 'Understanding variables and different data types in JavaScript.' },
                        { title: 'Operators', content: 'Using operators to perform calculations and logic in JavaScript.' },
                        { title: 'Control Flow', content: 'Introduction to control flow with if-else statements and loops.' }
                    ]
                },
                {
                    title: 'Functions',
                    lectures: [
                        { title: 'Defining Functions', content: 'How to define and call functions in JavaScript.' },
                        { title: 'Function Parameters and Return Values', content: 'Working with function parameters and return values.' },
                        { title: 'Anonymous Functions', content: 'Understanding anonymous functions and callbacks.' }
                    ]
                }
            ]
        },
        {
            courseId: '2',
            sections: [
                {
                    title: 'React Fundamentals',
                    lectures: [
                        { title: 'Introduction to React', content: 'What is React and why use it?' },
                        { title: 'JSX and Virtual DOM', content: 'Understanding JSX and how the virtual DOM works in React.' },
                        { title: 'Components and Props', content: 'Building reusable components and passing data with props.' }
                    ]
                },
                {
                    title: 'State and Lifecycle',
                    lectures: [
                        { title: 'State in React', content: 'Managing state in class and functional components.' },
                        { title: 'Lifecycle Methods', content: 'Understanding React lifecycle methods and their use cases.' },
                        { title: 'Handling Events', content: 'Handling user events in React components.' }
                    ]
                },
                {
                    title: 'Advanced Topics',
                    lectures: [
                        { title: 'Hooks Overview', content: 'Introduction to React Hooks.' },
                        { title: 'Using useState and useEffect', content: 'Working with useState and useEffect Hooks.' },
                        { title: 'Context API', content: 'Using Context API for global state management.' }
                    ]
                }
            ]
        },
        {
            courseId: '3',
            sections: [
                {
                    title: 'Introduction to Full Stack Development',
                    lectures: [
                        { title: 'What is Full Stack Development?', content: 'Overview of full stack development and its importance.' },
                        { title: 'Tools and Technologies', content: 'Introduction to tools and technologies used in full stack development.' }
                    ]
                },
                {
                    title: 'Front-End Development',
                    lectures: [
                        { title: 'HTML and CSS Basics', content: 'Building the structure and style of web pages with HTML and CSS.' },
                        { title: 'JavaScript and DOM Manipulation', content: 'Using JavaScript to manipulate the DOM and create interactive web pages.' },
                        { title: 'Responsive Design', content: 'Implementing responsive design principles to create mobile-friendly websites.' }
                    ]
                },
                {
                    title: 'Back-End Development',
                    lectures: [
                        { title: 'Node.js and Express', content: 'Introduction to server-side development with Node.js and Express.' },
                        { title: 'Databases and ORMs', content: 'Working with databases and Object-Relational Mapping (ORM) tools.' },
                        { title: 'RESTful APIs', content: 'Building and consuming RESTful APIs.' }
                    ]
                }
            ]
        }
    ]

    const handleClick = (sectionTitle) => {
        setClickedSection(clickedSection === sectionTitle ? null : sectionTitle);
    }

    return (
        <section className='w-[70%] rounded-lg flex justify-center'>
            <div className='w-2/3'>
                <header className='bg-primary text-center text-white font-semibold py-2 rounded-tl-xl'>Section</header>
                {syllabusData.map((course) => (
                    <div key={course.courseId}>
                        {course.sections.map((section) => (
                            <div key={section.title} className='h-[4em] bg-white px-7 py-5 flex items-center justify-between border border-purple-300'>
                                <div className="w-full flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <IoIosArrowDroprightCircle className='text-primary text-xl'/>
                                        <p onClick={() => handleClick(section.title)} className='text-sm font-medium cursor-pointer'>{section.title}</p>
                                    </div>
                                    <span className='text-xs'>{section.lectures.length} Lectures</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='w-2/3'>
                <header className='bg-primary text-center text-white font-semibold py-2 rounded-tr-xl'>Lectures</header>
                <div className='bg-white h-[36rem] px-3 py-5 flex flex-col items-start justify-between border border-purple-300'>
                    {syllabusData.map((course) => (
                        course.sections.map((section) => (
                            clickedSection === section.title && (
                                <div key={section.title} className='w-full'>
                                    {section.lectures.map((lecture, index) => (
                                        <span key={index} className='flex items-center justify-between gap-4 py-3 border'>
                                            <div className="flex items-center gap-2 px-2">
                                                <FaPlayCircle className='text-lg text-gray-700'/>
                                                <p className='text-sm text-left font-medium'>{lecture.title}</p>
                                            </div>
                                            <span className='text-xs'>02:20</span>
                                        </span>
                                    ))}
                                </div>
                            )
                        ))
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Syllabus;