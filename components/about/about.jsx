'use client'
import { useState } from "react";
import { Download } from "lucide-react";
import { FaChevronUp, FaChevronDown, FaCalendar, FaClock, FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Link from "next/link";
import ToolIconsSection from "../tools/tools";
import { FaLocationDot } from "react-icons/fa6";
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import { GoDotFill } from "react-icons/go";
import Contact from "../contact/Contact";

const jobs = [
  {
    title: "Freelance Developer",
    role: "Software Engineer",
    duration: "June 2024 - Present",
    location: "Remote",
    time: "Full-time",
    desc: "Delivering efficient solutions with simple tools",
    contributions: [
      "developing robust API",
      "Developing part of the frontend"
    ],
    stack: [
        { "name": "Next.js", "icon": "SiNextdotjs", "color": null },
        { "name": "Git", "icon": "FaGitAlt", "color": "#F05032" },
        { "name": "Node.js", "icon": "FaNodeJs", "color": "#339933" },
    ]
  }
];

function getIconComponent(iconName) {
  return FaIcons[iconName] || SiIcons[iconName] || null;
}


export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  }


  return (
    <>
      <section className="pt-[150px] p-6">
          <div className="flex flex-col lg:flex-row justify-center">
            <h1 className="font-bebas py-4 font-bold text-[54px]/[54px] text-neutral_white tracking-tighter lg:w-[507px]">
              About Me
            </h1>
            <div className="flex flex-col lg:w-[704px]">
              <h4 className="font-manrope font-medium py-2 text-[24px]/[160%] text-neutral_white">I am a Software Engineer based in Nigeria</h4>
              <p className="font-manrope font-normal text-[16px]/[160%] tracking-normal text-off_white">I am a Software Engineer based in Nigeria looking for exciting opportunities. Has Applied Geophysics background. Likes to focus on solutions to unique problems when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Blockchain technology and a bit of DevOps. While I am not programming, I enjoy playing the bass guitar, teach high school Physics. Learning more to improve skill</p>
              <div className="flex flex-row items-center gap-x-4 my-1 py-3">
                <button className="bg-primary  font-manrope text-[14px]/[100%] tracking-tighter font-semibold text-neutral_black max-w-[212px] h-[48px] pl-6 pr-[5px] rounded-[100px] flex items-center justify-between">
                  DOWNLOAD RESUME <Download className="rounded-full p-2 flex items-center ml-2 justify-center bg-neutral_black h-[40px] w-[40px]" color="#FFFFFF" /></button>
                <Link href="https://www.linkedin.com/in/ifeanyi-zion-chidiebere-b078371a4" className="bg-icon_bg p-2 rounded-full h-[48px] min-w-[48px] flex items-center justify-center">
                    <TiSocialLinkedin className="rounded-full flex items-center justify-center" size={29} color="#D3E97A" />
                </Link>
                <Link href="https://github.com/ify-zi" className="bg-icon_bg p-2 rounded-full h-[48px] min-w-[48px] flex items-center justify-center">
                  <FaGithub className="  rounded-full flex items-center justify-center" size={27}  color="#D3E97A" />
                </Link>
              </div>
            </div>
          </div>
      </section>

      <section className="p-6 lg:flex lg:flex-row justify-center border-y-2 border-neutral_white py-20">
        <h1 className="font-bebas lg:w-[507px] py-4 font-bold text-neutral_white text-[43px]/[100%] tracking-[-2%]">Frequent Tools</h1>

        <div className="flex flex-col lg:w-[704px]">
        <p className="font-manrope font-normal py-6 text-[16px]/[160%] tracking-[0%] text-off_white">As a fullstack developer with a backend focus, my workflow is grounded in tools that enable scalable architecture, robust APIs, and efficient development pipelines. I regularly work with backend frameworks, containerization, CI/CD tools, and databases—alongside frontend libraries when needed—to deliver end-to-end solutions. The tools listed below represent the core technologies I have worked with to build secure, performant, and maintainable systems.</p>
          <ToolIconsSection />
        </div>
      </section>

      <section className="p-6 lg:flex lg:flex-row lg:justify-center lg:py-20  border-b-2 border-neutral_white">
        <h1 className="font-bebas py-4 font-bold text-[43px]/[100%] tracking-[-2%] text-neutral_white lg:w-[507px]">Work Experience</h1>
        <div className="py-2 lg:w-[704px]">
          {jobs.map((job, index) => (
            <div key={index} className="flex flex-col gap-y-4 justify-center border-[1px] border-neutral_white rounded-2xl p-6">
              <h1 className="font-manrope font-semibold text-3xl text-primary">{job.title}</h1>
              <h2 className="font-manrope font-medium  mt-[-8] text-2xl">{job.role}</h2>
              <div className="flex flex-row gap-x-4">
                <div className="flex items-center justify-center font-manrope font-normal"><FaCalendar className="inline mr-2" color="#D3E97A"/> {job.duration} </div>
                <div className="flex items-center justify-center font-manrope font-normal "><FaLocationDot className="inline mr-2" color="#D3E97A"/> {job.location} </div>
                <div className="flex items-center justify-center font-manrope font-normal"> <FaClock className="inline mr-2" color="#D3E97A"/> {job.time} </div>
              </div>
              <p className="text-base font-manrope font-medium">{job.desc}</p>
              <button onClick={handleOpen} className="text-start text-primary font-manrope font-medium">
                {isOpen ? "hide" : "view"} key contribution {isOpen ? <FaChevronUp className="inline" /> : <FaChevronDown className="inline" />}
              </button>
              {isOpen && (
                job.contributions.map((detail, index) => (
                    <ul key={index} className="my-1">
                      <li className="">
                        <GoDotFill className="inline mr-2"/>{detail}
                      </li>
                    </ul>
                ))
              )}
                <div className="flex flex-row gap-x-8">
                  {job.stack.map((tool, index) => {
                    const Icon = getIconComponent(tool.icon);
                    return (
                      <div key={index} className="flex flex-col gap-y-2">
                        <Icon color={tool.color} size={30}  /> {tool.name}
                      </div>
                    );
                  })}
                </div>
          </div>
        ))}
        </div>
      </section>

      <section className="p-6">
        <Contact />
      </section>
    </>

  );
}