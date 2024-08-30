import CourseOfferingCard from "../utils/CourseOfferingCard"

const CourseOffering = () => {
  return (
    <section className="w-[80%] flex flex-wrap gap-3 justify-center">
        <CourseOfferingCard />
        <CourseOfferingCard />
        <CourseOfferingCard />
        <CourseOfferingCard />
        <CourseOfferingCard />
        <CourseOfferingCard />
    </section>
  )
}

export default CourseOffering