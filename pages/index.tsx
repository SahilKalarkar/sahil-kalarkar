import React, { useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import * as Dialog from "@radix-ui/react-dialog";
import Typewriter from "typewriter-effect";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { FiChevronDown, FiGithub } from "react-icons/fi";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaLinkedinIn,
  FaRegMoon,
  FaRegSun,
} from "react-icons/fa";

const techStackGroups: {
  title: string;
  stacks: { name: string; level: number }[];
}[] = [
  {
    title: "Frontend",
    stacks: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 93 },
      { name: "TypeScript", level: 80 },
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    stacks: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
      { name: "PHP", level: 80 },
    ],
  },
  {
    title: "Database",
    stacks: [
      { name: "MySQL", level: 87 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools",
    stacks: [
      { name: "Visual Studio Code", level: 90 },
      { name: "Git", level: 85 },
    ],
  },
];

type Project = {
  id: number;
  title: string;
  technology: string[];
  description: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Army Welfare Donation Website",
    technology: ["HTML", "CSS", "MySQL", "PHP"],
    description:
      "A dynamic Army Website where people can  donate money directly to the Army’s Welfare Fund.",
  },
  {
    id: 2,
    title: "Portfolio Website",
    technology: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    description:
      "Personal portfolio website showcasing my skills, education & projects with beautiful animations.",
  },
  {
    id: 3,
    title: "Gym Website",
    technology: ["React.js", "Email.js"],
    description:
      "A modern Gym Website with a various membership plans and services.",
  },
  {
    id: 4,
    title: "ZEST - Restaurant Website",
    technology: ["React.js", "MySQL", "PHP"],
    description:
      "A fully responsive website for a restaurant including key features like menu display, opening hours and contact information.",
  },
];

const Home: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  const toggleHandler = () => {
    if (themeRef.current) {
      if (!isDark) {
        themeRef.current.style.backgroundColor = "black";
        themeRef.current.style.color = "white";
      } else {
        themeRef.current.style.backgroundColor = "white";
        themeRef.current.style.color = "black";
      }
      setIsDark(!isDark);
    } else {
      console.warn("themeRef.current is null");
    }
  };

  return (
    <>
      <Head>
        <title>Sahil Kalarkar</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <section ref={themeRef}>
        <section className="container mx-auto pt-15 pl-15 pr-15">
          {/*--------------------------- Home Section Starts --------------------*/}
          <div className="flex flex-col-reverse md:justify-evenly items-center md:flex-row pb-10">
            <div id="#">
              <h1 className="text-3xl text-center sm:text-left font-bold pb-4">
                Hi, I&apos;m Sahil 👋
              </h1>
              <h3 className="text-md text-center sm:text-left pb-5">
                Engineer by craft, entrepreneur by vision. <br /> Building
                modern, fast, and responsive websites. <br /> Your vision, my
                code.
              </h3>
              <h3 className="flex text-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font pb-4">
                I'm a&nbsp;
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer",
                      "Web Developer",
                      "MERN Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </h3>
              <div className="flex flex-col md:flex-row text-black w-full h-auto gap-4 pb-4">
                <Link
                  href={"https://www.linkedin.com/in/sahil-kalarkar-b09b79233"}
                  className="flex justify-center items-center text-xs font-semibold rounded-xl bg-cyan-400 hover:bg-cyan-500 gap-2 cursor-pointer p-2"
                >
                  <FaLinkedin size={25} />
                  linkedIn/sahil-kalarkar
                </Link>
                <Link
                  href={"https://github.com/SahilKalarkar"}
                  className="flex justify-center items-center text-xs font-semibold rounded-xl bg-cyan-400 hover:bg-cyan-500 gap-2 cursor-pointer p-2"
                >
                  <FaGithub size={25} />
                  github/SahilKalarkar
                </Link>
              </div>
              <div className="flex gap-3">
                <Link
                  href={"/RESUME(SAHIL KALARKAR).pdf"}
                  className={`text-sm border border-cyan-400 rounded-full inline-flex justify-center items-center gap-2 cursor-pointer p-3 bg-white ${
                    themeRef ? "text-black" : ""
                  }`}
                >
                  Resume
                  <span className="animate-bounce">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"></path>
                    </svg>
                  </span>
                </Link>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                      className={`text-sm border border-cyan-400 rounded-full inline-flex justify-center items-center gap-2 cursor-pointer p-3 bg-white ${
                        themeRef ? "text-black" : ""
                      }`}
                    >
                      Hire Me
                      <span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M11 14H9a9 9 0 0 1 9-9v2c-3.87 0-7 3.13-7 7zm7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3zM7 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2zm4.45.5h-2A2.99 2.99 0 0 1 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74a4.97 4.97 0 0 0 3.45-4.24zM19 17c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-3a2.99 2.99 0 0 1-2.95-2.5h-2A4.97 4.97 0 0 0 16 19.74V22h6v-2.5c0-.83-.67-1.5-1.5-1.5z"></path>
                        </svg>
                      </span>
                    </button>
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
                    <Dialog.Content className="fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-2xl z-50 max-h-[90vh] overflow-auto animate-slide-up">
                      <div className="p-6 m-10">
                        <div className="flex flex-col justify-between items-center mb-10">
                          <h2 className="text-2xl font-bold mx-auto mb-2">
                            Contact Me
                          </h2>
                          <p>Let's bulid something great together. 👇 </p>
                        </div>
                        <div className="space-y-4 grid place-items-center">
                          <div>
                            <Link
                              href="mailto:sahilkalarkar@gmail.com"
                              className="flex justify-center items-center text-xs font-semibold rounded-xl bg-cyan-400 hover:bg-cyan-500 gap-2 cursor-pointer p-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 text-black"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75M21.75 6.75l-9.75 6.75L2.25 6.75M21.75 6.75H2.25"
                                />
                              </svg>
                              sahilkalarkar@gmail.com
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
            <div
              className="home__img w-[200px] sm:w-[350px] h-auto mb-4 sm:mb-0"
              data-sr-id="7"
            >
              <svg
                className="home__blob"
                viewBox="0 0 479 467"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 
              311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 
              237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 
              466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 
              219.583 9.19024 145.964Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 
              311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 
              237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 
              466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 
              219.583 9.19024 145.964Z"
                    fill="#22d3ee"
                  />
                  <image
                    className="home__blob-img scale-120"
                    y="10"
                    href="/SK.png"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="pb-6 text-center sm:text-left mb-8">
            <h1 className="text-2xl font-bold hover:underline pb-3">About</h1>
            <p>
              I am a passioanate <strong>Software Developer</strong> with an
              excellent problem-solving skills and a deep enthusiasm for bulding
              scalable, responsive & user-friendly websites. Specializing in{" "}
              <strong>
                MERN stack (MongoDB, Express.js, React.js, Node.js).
              </strong>
            </p>
          </div>
          <div className="text-center sm:text-left mb-8">
            <h1 className="text-2xl font-bold hover:underline">Education</h1>
            <div className="border-gray-300 border-b-2 rounded-2xl shadow-md hover:shadow-lg  p-6">
              <p className="mb-2">2025 - Passout 👨‍🎓</p>
              <h1>
                <strong>Bachelor of Engineering</strong> in{" "}
                <strong>Computer Science & Engineering</strong>
              </h1>
              <p>College of Engineering and Technology, Akola</p>
              <h3 className="text-sm mt-3">
                Focused on software engineering, data structures, and full-stack
                web development.
              </h3>
            </div>
          </div>
          {/*--------------------------- Home Section End -----------------------*/}

          {/*--------------------------- Skills Starts ------------------------- */}
          <div className="pt-6 mb-8">
            <h1 className="text-2xl font-bold hover:underline pb-3">
              Tech Stack
            </h1>
            <Accordion type="multiple" className="w-full space-y-4">
              {techStackGroups.map((group) => (
                <AccordionItem key={group.title} value={group.title}>
                  <AccordionTrigger className="group text-xl font-semibold rounded-2xl flex w-full p-4 justify-between items-center cursor-pointer hover:underline">
                    {group.title}
                    <FiChevronDown
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {group.stacks.map((stack) => (
                        <div
                          key={stack.name}
                          className="rounded-xl shadow hover:shadow-md transition p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{stack.name}</span>
                            </div>
                            <span className="text-sm font-semibold">
                              {stack.level}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded">
                            <motion.div
                              className="h-2 bg-green-500 rounded"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${stack.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/*--------------------------- Skills End ---------------------------- */}

          {/*---------------------------- Project Starts -------------------------*/}
          <div className={`flex items-center justify-center px-4 py-10`}>
            <div className="max-w-7xl w-full">
              <h1 className="text-2xl font-bold hover:underline mb-6">
                Projects
              </h1>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, id) => (
                  <div
                    key={id}
                    className={`border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-6 flex flex-col justify-between h-full ${
                      id === 3 ? "lg:col-start-2" : ""
                    }`}
                  >
                    {/* Project Title */}
                    <div className="text-lg font-semibold mb-3">
                      {project.title}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technology.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*----------------------------- Project End ---------------------------*/}
        </section>
        <section className="container mx-auto pl-15 pr-15 pb-10">
          {/*------------------------------- Footer Starts -----------------------------*/}
          <div className="pt-10">
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="text-center sm:text-left">
                © 2025 Sahil Kalarkar. All rights reserved.
              </div>
              <div className="flex justify-center gap-x-4 gap-y-6">
                <Link
                  href={"https://www.linkedin.com/in/sahil-kalarkar-b09b79233"}
                >
                  <FaLinkedin size={25} />
                </Link>
                <Link href={"https://github.com/SahilKalarkar"}>
                  <FaGithub size={25} />
                </Link>
              </div>
            </div>
          </div>
          {/*------------------------------- Footer End -----------------------------*/}
          {/*-------------------------------- Navigation Starts ------------------*/}
          <div className="fixed bottom-13 left-1/2 -translate-x-30 flex justify-center bg-linear-to-bl from-violet-500 to-fuchsia-500 mx-auto w-[250px] h-auto rounded-full">
            <div className="flex items-center p-2 gap-2">
              <Link href="#">
                <FaHome size={20} className="text-white" />
              </Link>
              <div className="border-l-2 border-white h-10 ml-2 mr-2"></div>
            </div>
            <div className="flex items-center p-2 gap-2">
              <Link
                href={"https://www.linkedin.com/in/sahil-kalarkar-b09b79233"}
              >
                <FaLinkedinIn size={20} className="text-white" />
              </Link>
              <Link href={"https://github.com/SahilKalarkar"} className="ml-2">
                <FiGithub size={20} className="text-white" />
              </Link>
              <div className="border-l-2 border-white h-10 ml-2 mr-2"></div>
            </div>
            <div className="flex items-center p-2 gap-2">
              <button onClick={toggleHandler} className="cursor-pointer">
                {isDark ? (
                  <FaRegSun size={20} className="text-white" />
                ) : (
                  <FaRegMoon size={20} className="text-white" />
                )}
              </button>
            </div>
          </div>
          {/*-------------------------------- Navigation End ------------------*/}
        </section>
      </section>
    </>
  );
};

export default Home;
