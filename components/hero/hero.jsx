'use client'
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from "next/link";


export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="flex flex-col lg:px-[80px] pt-[100px] lg:py-[100px] lg:max-w-[544px] lg:max-h-[360px] lg:gap-y-1">
      <h1 className="font-bebas text-neutral_white my-1 py-1 text-[48px]/[100%] lg:text-[50px]/[90%] tracking-[0%] font-semibold lg:font-semibold"><span className="text-primary">HI,</span> I AM IFEANYI ZION</h1>
      <p className="font-manrope text-[16px]/[160%] my-1 py-2 lg:text-[18px]/[150%]">A Nigerian based Software Engineer, passionate about developing solutions using tech tools</p>
      <div className="flex flex-row items-center gap-x-4 my-1 py-1">
        <button onClick={scrollToContact} className="bg-primary  font-manrope text-[14px]/[100%] font-semibold text-neutral_black w-[163px] h-[48px] pl-6 pr-[5px] rounded-[100px] flex items-center justify-between"
          >Contact Me <GoArrowUpRight className="rounded-full p-2 flex items-center justify-center bg-neutral_black h-[40px] w-[40px]" color="#FFFFFF" /></button>
        <Link href="https://www.linkedin.com/in/ifeanyi-zion-chidiebere-b078371a4" className="bg-icon_bg p-2 rounded-full h-[48px] min-w-[48px] flex items-center justify-center">
            <TiSocialLinkedin className="rounded-full flex items-center justify-center" size={29} color="#D3E97A" />
        </Link>

        <Link href="https://github.com/ify-zi" className="bg-icon_bg p-2 rounded-full h-[48px] min-w-[48px] flex items-center justify-center">
          <FaGithub className="  rounded-full flex items-center justify-center" size={27}  color="#D3E97A" />
        </Link>
      </div>
    </div>
  )

}
