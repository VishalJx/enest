import ReviewCard from "../utils/ReviewCard"

const Reviews = () => {
  return (
    <section className="w-[80%] flex flex-wrap justify-center gap-5">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
    </section>
  )
}

export default Reviews