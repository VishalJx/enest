import { useEffect, useState } from 'react';
import Image from "next/image";
import StarRating from "./StarRating";

const ReviewCard = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/reviews');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex items-center gap-4">
      {reviews.length === 0 ? (
        <p>No reviews available</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="w-[22rem] h-[10rem] flex gap-3 flex-wrap p-4 bg-white shadow-light rounded-lg">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/user2.png" 
                alt="user"
                width={45}
                height={45}
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-gray-800 font-bold">{review.reviewerName}</h1>
                <span className="flex items-center gap-3">
                  <StarRating />
                  <p className="text-xs font-medium pb-3">(4 Months ago)</p>
                </span>
              </div>
            </div>
            <p className="text-sm font-medium">{review.reviewText}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewCard;
