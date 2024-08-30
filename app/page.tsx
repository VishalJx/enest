"use server"

import DetailCard from "@/components/DetailCard";
import CourseOffering from "@/components/pages/CourseOffering";
import PeopleAlsoBought from "@/components/pages/PeopleAlsoBought";
import Reviews from "@/components/pages/Reviews";
import InstructorCard from "@/components/utils/InstructorCard";
import TopCompanies from "@/components/utils/TopCompanies";
import WhatYouWillLearn from "@/components/utils/WhatYouWillLearn";

export default async function Home() {
    return (
        <main className="w-full flex flex-col items-center gap-6">
            <DetailCard />

            <section className="flex flex-col items-center mb-8">
                <h1 className="text-xl text-primary font-bold text-center mb-6">Course offering</h1>
                <CourseOffering />
            </section>

            <section className="w-full flex flex-col items-center mb-8">
                <h1 className="text-xl text-primary font-bold text-center mb-6">Internship Opportunity</h1>
                <TopCompanies />
            </section>

            <section className="w-full flex flex-col items-center mb-8">
                <h1 className="text-xl text-primary font-bold text-center mb-6">What you will learn</h1>
                <WhatYouWillLearn />
            </section>
            
            <section className="w-full flex flex-col items-center">
                <h1 className="text-xl text-primary font-bold text-center mb-6">Syllabus</h1>
            </section>

            <section className="w-full flex flex-col items-center mb-8">
                <h1 className="text-xl text-primary font-bold text-center mb-6">About Instructor</h1>
                <InstructorCard />
            </section>

            <section className="w-full flex flex-col items-center mb-8 mx-auto">
                <h1 className="text-xl text-primary font-bold text-center mb-6">Featured Review</h1>
                <Reviews />
            </section>

            <section className="w-full flex flex-col items-center mb-8">
                <h1 className="text-xl text-primary font-bold text-center mb-6">People also bought</h1>
                <PeopleAlsoBought />
            </section>

        </main>
    );
}