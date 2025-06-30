'use client'
import emailjs from "emailjs-com";
import { useState } from 'react';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      formData,
      process.env.PUBLIC_KEY
    ).then(
      (result) => {
        alert("Message sent successfully!");
        setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                  });
      },
      (error) => {
        alert("Failed to send message. Please try again later.");
      }
    );
  };



  return (
    <>
      <section id="contact" className="lg:flex lg:flex- lg:justify-center">
        <div className="flex flex-col py-16 lg:w-[600px]">
          <h1 className="font-bebas text- text-[43px]/[43px] my-6 h-11 tracking-tighter text-neutral_white font-bold">
            LET'S CONNECT
          </h1>
          <div className="gap-8 py-4 my-2">
          <p className="text-off_white font-manrope text-[16px]/[160%] font-medium my-4 tracking-normal">Say hello at <span className="text-neutral_white border-b-2 border-primary">ifeanyizion3@gmail.com</span></p>
          <p className="text-off_white font-manrope text-[16px]/[160%] font-medium my-4 tracking-normal">For more info, here is my <Link href="" className="text-neutral_white border-primary border-b-2">resume</Link></p>
          </div>
          <div className="flex flex-row">
            <Link href="https://www.linkedin.com/in/ifeanyi-zion-chidiebere-b078371a4"><TiSocialLinkedin className="rounded-full mr-4" size={29} color="#D3E97A" /></Link>
            <Link href="https://github.com/ify-zi"><FaGithub className="rounded-full mx-4" size={27} color="#D3E97A" /></Link>
            <Link href="https://x.com/ify_zi"><FaXTwitter className="rounded-full mx-4" size={27} color="#D3E97A" /></Link>
            <Link href="https://instagram.com/ify_zi"><FaInstagram className="rounded-full mx-4" size={27} color="#D3E97A" /></Link>
          </div>
        </div>

        <div className="flex flex-col py-8 lg:w-[600px]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8" >
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="px-4 py-2.5 rounded-md bg-dark_gray text-neutral_white" required/>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-3 rounded-md bg-dark_gray text-neutral_white" required/>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="p-3 rounded-md bg-dark_gray text-neutral_white" required/>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="p-3 rounded-md bg-dark_gray text-neutral_white" rows="5"></textarea>
            <button type="submit" className="lg:w-[150px] bg-primary font-semibold font-manrope text-[16px]/[100%] text-center px-10 py-5 rounded-[100px] text-neutral_black ">Submit</button>
          </form>
        </div>
      </section>
    </>

  );
}