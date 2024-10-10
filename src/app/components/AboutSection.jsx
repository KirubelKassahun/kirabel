/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Develpment</li>
        <li>ReactJS / NextJs</li>
        <li>TailwindCSS</li>
        <li>Back End Development</li>
        <li>JavaScript, NodeJS, Express,</li>
        <li>MongoDB & MySQL</li>
        <li>JavaScript | TypeScript</li>
        <li>Effective Communication</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Graduated from Unity University, Faculty of Engineering and Technology
          with BSc. Degree in Computer science <br /> From September 2018 to
          September 2022
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <strong>Intern Software Engineer</strong> Dan Energy Addis Ababa,
          Ethiopia From September 2022 to October 2022
        </li>
        <li>
          <strong>Full-stack Developer </strong> Dan Energy, Full time Addis
          Ababa, Ethiopia From October 2022 to December 2023
        </li>
        <li>
          <strong>Back-end Developer</strong> Private Client, Freelance Addis
          Ababa ,Ethiopia From February 2024 to March 2024
        </li>
        <li>
          <strong>Freelancer Developer</strong>at Upwork , Remote Addis Ababa
          ,Ethiopia From March 2024 to July 2024
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about me"
          src={"/images/aboutme.jpeg"}
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-justify text-start lg:text-lg">
            Enthusiastic and innovative Developer With in over 2+ years of
            experience in Full Stack Development, I thrive on architecting
            end-to-end solutions that blend seamless user experiences with
            robust functionality. Passionate about transforming ideas into
            high-performing web applications, I specialize in leveraging a wide
            array of technologies to build scalable and responsive systems.
            {/* Kirubel, a Software Engineer, brings a unique blend of technical
            prowess and creative flair to the world of web and mobile
            development. Fueled by a deep passion for cybersecurity, he
            graduated with top honours from Istanbul Bilgi University's Cyber
            Security Department and Bahçeşehir University Computer Engineering
            department. Beyond the coding screen, Yusufhan is a natural leader,
            steering the helm at the Bi'Siber Cyber Security Club and infusing
            his innovative spirit into captivating UI/UX designs. In a rapidly
            evolving tech landscape, he stands out not just for his skills but
            for the genuine enthusiasm he brings to every project. */}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
