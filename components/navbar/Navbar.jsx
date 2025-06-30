'use client'
import { useState } from "react";
import{ X } from "lucide-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import Home from "@/app/page";

const navLinks = [
  { name: "Home", href: "/"},
  { name: "About", href: "about"},
  { name: "Projects", href: "#projects"},
  { name: "Contact", href: '#contact'}
];
const icon = "<ZIC>"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (l) => {
    const section = document.querySelector(l.href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed z-30 flex flex-row justify-between top-0 w-full py-4 px-4 gap-x-1 lg:px-[60px] lg:py-6 bg-neutral_black ">
        <Link href="/" className="font-orbitron p-2 font-extrabold text-[28px]/[100%] tracking-[-1px] text-off_white">
            {icon}
        </Link>
        <button className="lg:hidden flex justify-end p-2 rounded-lg" onClick={handleOpen}>
          {isOpen ? <X size={28} className="stroke-off_white" /> : <HiOutlineMenuAlt4 className="stroke-off_white" size={28}/>}
        </button>

        <div className="hidden lg:flex lg:justify-end lg:w-[326px] lg:gap-x-8">
          {navLinks.map((link, index) => (
            <Link  key={index} href={link.href} className="font-inter font-semibold text-[16px]/[150%] text-off_white">{link.name}</Link>
          ))}
        </div>
      </nav>
      {isOpen && (<div className="fixed lg:hidden z-10 pt-[100px] bg-neutral_black flex p-6 flex-col justify-center w-full gap-4">
          {navLinks.map((link, index) => (
            <Link  key={index} onClick={() => (handleScroll(link))} href={link.href} className="font-inter text-center font-semibold text-[16px]/[150%]  text-off_white">{link.name}</Link>
          ))}
        </div>)}
    </>
  )
}