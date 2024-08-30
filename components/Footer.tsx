import Image from "next/image"
import { GoLocation } from "react-icons/go";

const Footer = () => {

  const quickLinks = [
    "Program",
    "Test Series",
    "Skill Connect",
    "Expert Connect",
    "Study Abroad"
  ]

  const company = [
    "About Us",
    "Why choose us",
    "Policies",
    "Privacy Policy"
  ]

  const security = [
    "Report",
    "Trademark Notice",
    "Advertise with us",
    "Help & Support"
  ]

  return (
    <footer className="w-full h-[20rem] bg-white px-16 py-6 mt-3">
        <div className="flex justify-evenly">
          <div className="flex flex-col gap-[0.7rem]">
            <Image
              src="/assets/footerlogo.png"
              alt="footer logo"
              width={70}
              height={70} 
              className="mb-5" 
            />
            <p className="text-xs font-extrabold">Contact with us</p>
            <p className="text-xs">Email</p>
            <p className="text-xs">Talk to a Councellor</p>
          </div>
          <ul className="flex flex-col gap-[0.6rem]">
            <header className="text-sm font-extrabold">Quick Link</header>
            {
              quickLinks.map((link, index) => (
                <li key={index} className="text-xs font-semibold">{link}</li>
              ))
            }
          </ul>
          <ul className="flex flex-col gap-[0.6rem]">
            <header className="text-sm font-extrabold">Company</header>
            {
              company.map((link, index) => (
                <li key={index} className="text-xs font-semibold">{link}</li>
              ))
            }
          </ul>
          <ul className="flex flex-col gap-[0.6rem]">
            <header className="text-sm font-extrabold">Security</header>
            {
              security.map((link, index) => (
                <li key={index} className="text-xs font-semibold">{link}</li>
              ))
            }
          </ul>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/assets/msme.png"
              alt="incubated"
              width={80}
              height={80}
            />
            <Image
              src="/assets/iima.png"
              alt="incubated"
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className="mt-8 px-4 flex items-center justify-around gap-16">
          <span className="flex flex-col gap-3">
            <p className="text-xs font-extrabold">Address</p>
            <span className="flex items-center gap-1">
              <GoLocation className="text-xs font-bold"/>
              <p className="text-[0.7rem] font-semibold cursor-pointer">
                 Address link
              </p>
            </span>
          </span>

          <div className="flex gap-3">
            <Image
              src="/assets/googleplay.png"
              alt="google play"
              width={120}
              height={40}
            />
            <Image
              src="/assets/appstore.png"
              alt="google play"
              width={120}
              height={40}
            />
          </div>

          <div className="text-xs font-extrabold text-center mb-2">
            <p className="mb-2">Let's get social:</p>
            <span className="flex gap-2">
              <Image
                      src="/assets/yt.png"
                      alt="yt"
                      width={20}
                      height={20}
                      className="rounded-full bg-gray-300"
                  />
                  <Image
                      src="/assets/facebook.png"
                      alt="facebook"
                      width={20}
                      height={20}
                      className="rounded-full bg-gray-300"
                  />
                  <Image
                      src="/assets/x.png"
                      alt="twitter"
                      width={20}
                      height={20}
                      className="rounded-full bg-gray-300"
                  />
                  <Image
                      src="/assets/linkedin.png"
                      alt="linkedin"
                      width={20}
                      height={20}
                      className="rounded-full bg-gray-300"
                  />              
            </span>
          </div>

        </div>
    </footer>
  )
}

export default Footer