const Course = require('../models/courseModel');
const Syllabus = require('../models/syllabusModel');
const Review = require('../models/reviewModel');
const PeopleAlsoBought = require('../models/peopleAlsoBoughtModel');
const Instructor = require('../models/instructorModel');

const generateDummyData = async () => {
    try {
        await Course.deleteMany({});
        await Syllabus.deleteMany({});
        await Review.deleteMany({});
        await PeopleAlsoBought.deleteMany({});
        await Instructor.deleteMany({});
        
        await Course.create([
            {
                courseId: '1',
                courseName: 'JavaScript for Beginners',
                courseDescription: 'Learn the basics of JavaScript, including variables, loops, and functions.',
                courseInstructor: 'Dr. Giraffee',
                coursePrice: 20,
            },
            {
                courseId: '2',
                courseName: 'Advanced React',
                courseDescription: 'Deep dive into React with advanced topics such as Hooks, Context API, and performance optimization.',
                courseInstructor: 'Dr. Elephant',
                coursePrice: 30,
            },
            {
                courseId: '3',
                courseName: 'Full Stack Development',
                courseDescription: 'Become a full-stack developer by learning both front-end and back-end technologies.',
                courseInstructor: 'Dr. Lion',
                coursePrice: 50,
            },
        ]);

        await Syllabus.create([
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
        ]);

        await Review.create([
            { courseId: '1', reviewerName: 'John Doe', reviewText: 'Excellent introduction to JavaScript.', rating: 5 },
            { courseId: '2', reviewerName: 'Jane Smith', reviewText: 'The advanced topics were explained very well.', rating: 4 },
            { courseId: '3', reviewerName: 'Emily Johnson', reviewText: 'Great course for learning full-stack development.', rating: 5 }
        ]);

        await PeopleAlsoBought.create([
            { productId: '1', courseName: 'JavaScript for Beginners', courseDescription: 'Learn JavaScript from scratch.', courseInstructor: '1', coursePrice: 20 },
            { productId: '2', courseName: 'Advanced React', courseDescription: 'Master React with advanced concepts.', courseInstructor: '2', coursePrice: 30 },
            { productId: '3', courseName: 'Full Stack Development', courseDescription: 'Learn to build full-stack applications.', courseInstructor: '3', coursePrice: 50 }
        ]);

        await Instructor.create([
            {
                instructorId: '1',
                instructorName: 'Alice Johnson',
                instructorTitle: 'Senior Developer',
                instructorDescription: 'Expert in JavaScript and Node.js with over 10 years of experience.',
                instructorImage: 'https://example.com/alice.jpg',
            },
            {
                instructorId: '2',
                instructorName: 'Bob Brown',
                instructorTitle: 'React Specialist',
                instructorDescription: 'React specialist with extensive experience in front-end development.',
                instructorImage: 'https://example.com/bob.jpg',
            },
            {
                instructorId: '3',
                instructorName: 'Charlie Davis',
                instructorTitle: 'Full Stack Developer',
                instructorDescription: 'Experienced full stack developer with a passion for teaching.',
                instructorImage: 'https://example.com/charlie.jpg',
            }
        ]);

        console.log('Dummy data generated successfully!');
    } catch (err) {
        console.error(err);
    }
};

module.exports = generateDummyData;
