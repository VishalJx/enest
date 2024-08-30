import Image from "next/image"

const TopCompanies = () => {

    const companies = [
        {src:"/assets/britannia.png", alt:"Company", width:80, height:80},
        {src:"/assets/itc.png", alt:"Company", width:40, height:40}
    ]

  return (
    <section className="w-[70%] rounded-lg p-6 bg-white shadow-light flex flex-col gap-4 items-center justify-center">
        <p className="font-medium text-gray-700">Get internship opportunity at these Top Companies after learning this course</p>
        <div className="flex flex-wrap justify-center gap-7">
            {
                Array(8)
                .fill('')
                .map((_, i) => (
                    <div key={i} className="w-[5rem] h-[5rem] flex justify-center items-center">
                        <Image src={companies[i%2].src} alt={companies[i%2].alt} width={companies[i%2].width} height={companies[i%2].height}/>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default TopCompanies