'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { img } from "@/assets/images.js";


const projects = [
  { tag: "Conceptual Work",
    alt: "concept",
    img: img.chowdeck,
    title: "Promotional Landing Page",
    desc: "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
    info: [
      { name: "Year", value: "2024" },
      { name: "Role", value: "Full Stack Developer" },
    ],
    links: [
      { name: "Live Demo", href: "#", icon: img.arrow},
      { name: "See on Github", href: "#", icon: img.git},
      { name: "View Project", href: "#", icon: img.arrow}
    ],
   },
];

export default function Projects() {

  return (
    <>
      <section className="flex flex-col justify-start lg:justify-center lg:px-[80px] z-0 gap-2 mt-20 py-10 border-y-[1px]">
        <header className="min-w-[343px] gap-y-2">
          <h1 className="font-bebas text-[30px]/[100%] lg:text-[57px]/[100%] lg:w-auto  py-2 tracking-tighter font-semibold text-neutral_white">
            FEATURED PROJECTS
          </h1>
          <p className="font-manrope text-[16px]/[160%] lg:text-[18px]/[160%] lg:max-w-[600px] py-2 tracking-tighter font-normal text-off_white">
            Here are some of the selected projects that showcase my passion for Software development.
          </p>
        </header>

        {projects.map((project, index) => (
          <div key={index} className="flex flex-col my-8 py-3 lg:flex-row lg:gap-x-6">
            <div className="relative lg:min-w-[600px]  bg-b_gray rounded-lg flex items-center justify-center">
              <h1 className="absolute top-0 left-0 bg-[#0A0A0A] font-manrope font-extralight w-[160px] h-[30px] flex items-center justify-center rounded-[100px] px-3 py-3 my-1 mx-2 text-nowrap text-center text-neutral_white text-[12px]/[150%] lg:text-[14px]/[150%] tracking-[1%]">
                {project.tag}
              </h1>
              <Image alt={project.alt} src={project.img} width={343} height={100} className=" py-12 px-8 w-fit h-fit rounded-[12px]" />
            </div>

            <div className="flex flex-col justify-start lg:max-w-[578px]">
              <h3 className="font-manrope font-bold text-[24px]/[140%] lg:text-[32px]/[140%] tracking-[0%] text-neutral_white my-6">
                {project.title}
              </h3>
              <p className="font-manrope font-normal text-[16px]/[160%] tracking-[0%] text-off_white mb-6">
                {project.desc}
              </p>

              <h4 className="font-manrope my-4 text-[16px]/[150%] tracking-[0%] font-normal text-neutral_white">PROJECT INFO</h4>
                {project.info.map((i, index) => (
              <div key={index} className="flex flex-row justify-between py-2.5 border-y-[1px] border-dark_gray">
                <p className="font-manrope font-medium text-[16px]/[160%] tracking-[0%] text-neutral_white">{i.name} </p>
                <p className="font-manrope font-medium text-[16px]/[160%] tracking-[0%] text-off_white">{i.value}</p>
              </div>
              ))}
              <div className="my-6 flex flex-row gap-x-4">
                {project.links.map((link, index) => (
                  <Link key={index + 1} href={link.href} className="border-b-2 border-primary font-semibold flex items-center gap-x-1 py-1 text-primary lg:text-[16px]/[150%] ">{link.name} <Image alt="icon" src={link.icon} width={16} height={16} className="lg:w-[24px] lg:h-[24px] inline"/></Link>
                ))}
              </div>

            </div>
          </div>
          ))}
      </section>
    </>
  )
}