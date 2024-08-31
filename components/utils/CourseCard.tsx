import { useEffect, useState } from 'react';
import Image from "next/image";
import StarRating from "./StarRating";

const CourseCard = () => {
    const courseImages = [
        {src: "/assets/img1.png", alt: "course"},
        {src: "/assets/img2.png", alt: "course"},
        {src: "/assets/img3.png", alt: "course"},
        {src: "/assets/img4.png", alt: "course"},
    ]

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/people-also-bought');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex gap-4">
      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        courses.map((course, index) => (
          <div key={index} className="w-[18rem] bg-white shadow-light rounded-2xl">
            <Image
              src={courseImages[0].src}
              alt={courseImages[0].alt}
              width={300}
              height={200}
            />
            <div className="py-3 px-4 flex flex-col gap-2">
              <h3 className="font-bold">{course.courseName}</h3>
              <p className="text-sm font-medium">{course.courseDescription}</p>
              <p className="text-xs text-gray-400">{course.courseInstructor}</p>
              <div className="flex items-center justify-between">
                <span>
                  <p className="font-bold mb-2">&#x20B9;{course.coursePrice}</p>
                  <StarRating />
                </span>
                {course.isBestseller && (
                  <span className="bg-yellow-500 text-xs font-bold px-2 py-1 rounded-md">Bestseller</span>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CourseCard;
