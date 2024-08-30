import Image from "next/image"
import { FaChevronDown } from "react-icons/fa6";
import Searchbar from "./Searchbar";


const Navbar = () => {

  const navLinkIcons = [
    {src: "/assets/v1.png", alt: "program", text: "Program"},
    {src: "/assets/v2.png", alt: "test", text: "Test Series"},
    {src: "/assets/v3.png", alt: "skill", text: "Skill Connect"},
    {src: "/assets/v4.png", alt: "expert", text: "Expert Connect"}
  ]

  return (
    <section>
        <nav className="bg-white px-1 py-5 flex gap-12 items-center justify-center">
            <Image 
                className="logo mr-5"
                src="/assets/navlogo.png"
                alt="logo"
                width={100}
                height={100}
            />
          {
            navLinkIcons.map((icon, index) => (
              <div 
              key={index} 
              className="flex items-center gap-2">
                <Image 
                  className=""
                  src={icon.src}
                  alt={icon.alt}
                  width={15}
                  height={15}
                />
                <p className="text-center text-xs font-semibold text-gray-600">{icon.text}</p>
              </div>
            ))
          }
          <span className="flex items-center text-[0.70rem] text-gray-500 font-semibold pr-12"
            >More
            <FaChevronDown className="inline-block ml-1" />
          </span>
          <Image src="/assets/user1.png" alt="user" width={30} height={15}/>
        </nav>
        <Searchbar/>
    </section>
  )
}

export default Navbar