import "./App.css";
import aboutmeprofile from "./assets/aboutmeProfile.jpg";
import arrow from "./assets/arrow.png";
import bootstrap from "./assets/bootstrap.png";
import calculator from "./assets/calculator.jpg";
import css from "./assets/css.png";
import diceRoller from "./assets/diceRoller.jpg";
import ecommerce from "./assets/ecommerce.jpg";
import exit from "./assets/exit.png";
import express from "./assets/expressJS.png";
import git from "./assets/git.png";
import guessNumber from "./assets/guessNumber.png";
import homeProfilee from "./assets/homeProfile.png";
import html from "./assets/html.png";
import java from "./assets/java.png";
import javascript from "./assets/javascript.png";
import jquery from "./assets/jquery.png";
import mysql from "./assets/mysql.png";
import nextjs from "./assets/nextjs.png";
import nodejs from "./assets/nodejs.png";
import npm from "./assets/npm.png";
import photobooth from "./assets/photobooth.jpg";
import php from "./assets/php.png";
import python from "./assets/python.png";
import pokemon from "./assets/pokemon.png";
import react from "./assets/react.png";
import rockPaperScissor from "./assets/rockPaperScissor.webp";
import sass from "./assets/sass.png";
import SMART from "./assets/SMART.jpg";
import supabase from "./assets/supabase.png";
import tailwind from "./assets/tailwind.png";
import taskManager from "./assets/taskManager.png";
import tempConversion from "./assets/tempConversion.webp";
import typescript from "./assets/typescript.png";
import vite from "./assets/vite.png";
import vscode from "./assets/vscode.png";
import weatherApp from "./assets/weatherApp.webp";
import villaruelResume from "./assets/VILLARUEL_ADRIAN_JULIUS_resume.pdf";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import {
  FaUserGraduate,
  FaCode,
  FaBook,
  FaHamburger,
  FaSchool,
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagramSquare,
} from "react-icons/fa";

function App() {
  const home = useRef();
  const aboutme = useRef();
  const SkillsServices = useRef();
  const projects = useRef();
  const experience = useRef();
  const contact = useRef();

  // Splash --------------------------------
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSplash(false);
    }, 4500);
  }, []);

  // Navbar --------------------------------
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Home");

  const menu = [
    { sectionName: "Home", ref: home },
    { sectionName: "About Me", ref: aboutme },
    { sectionName: "Expertise", ref: SkillsServices },
    { sectionName: "Projects", ref: projects },
    { sectionName: "Experience", ref: experience },
    { sectionName: "Contact", ref: contact },
  ];

  function showSection(sectionName, sectionRef) {
    if (isActive) {
      setIsActive(false);
    }

    setSelected(sectionName);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  // Set up scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Check which section is in view
      menu.forEach((tab) => {
        const section = tab.ref.current;

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Update the selected state if section is in view
          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionBottom
          ) {
            setSelected(tab.sectionName);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);

  const navMenu = menu.map((tab, index) => (
    <li key={index}>
      <button
        key={index}
        onClick={() => showSection(tab.sectionName, tab.ref)}
        className={`${
          selected === tab.sectionName
            ? "text-white font-semibold"
            : `${
                isActive ? "text-slate-300 shadow-2xl my-3" : "text-slate-600"
              } hover:text-orange-700 hover:font-semibold duration-200`
        } text-2xl px-5 py-3 rounded-sm shadow-sm transition-colors relative`}
      >
        <span className="relative z-10">{tab.sectionName}</span>
        {selected === tab.sectionName && (
          // <motion.span
          //   layoutId="pill-tab"
          //   transition={{
          //     type: "spring",
          //     stiffness: 100,
          //     damping: 12,
          //     duration: 0.5,
          //   }}
          <motion.span
            layoutId="pill-tab"
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="absolute px-5 py-3 rounded-sm inset-0 z-0 bg-gradient-to-r from-orange-600 to-orange-800"
          ></motion.span>
        )}
      </button>
    </li>
  ));

  // Changing isActive to false when screen size is large(lg)
  useEffect(() => {
    function resizing() {
      const largeScreen = window.matchMedia("(min-width: 1024px)");
      if (largeScreen.matches) {
        setIsActive(false);
      }
    }

    // Add event listener for screen resizing
    window.addEventListener("resize", resizing);
    resizing();

    return () => {
      window.removeEventListener("resize", resizing);
    };
  }, []);

  function showingNav() {
    setIsActive(!isActive);
  }

  // Contact -------------------------------
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pil0oe2", "template_z4fuk6m", form.current, {
        publicKey: "AkAdxvPiwuJyK4AcK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // SKILLS -----------------------------
  const [btnActive, setBtnActive] = useState("skills");

  function settingBtnActive(picked) {
    setBtnActive(picked);
  }

  // PROJECTS -----------------------------
  const projectsInfo = [
    {
      id: 1,
      name: "Fullstack Clothing Shop",
      image: ecommerce,
      url: "https://github.com/Adrian-Julius/eCommerce_clothing_shop",
      description:
        "A simple, responsive full-stack e-commerce website where users can browse products, explore categories, and add items to their cart. The platform is powered by Supabase as the backend for authentication, database management, and real-time data handling.",
    },
    {
      id: 2,
      name: "(SMART) Library System",
      image: SMART,
      url: "https://github.com/Adrian-Julius/SMART_library_management_system",
      description:
        "SMART - a personalized responsive full-stack library management system that allows users to search for books, read them online, save the preferred books to their personal library, and manage their own account.",
    },
    {
      id: 3,
      name: "DIY Photobooth",
      image: photobooth,
      url: "https://adrian-julius.github.io/photobooth_DIY/",
      description:
        "A DIY photobooth app that lets users choose their preferred layout, customize their photos, and instantly download or print their final photobooth strip.",
    },

    {
      id: 4,
      name: "Task Manager",
      image: taskManager,
      url: "https://adrian-julius.github.io/task-manager-app/",
      description:
        "A task manager app that allows users to add, remove, and organize tasks into three categories: To Do, Doing, and Done. It also includes a due date feature to help track deadlines and keep tasks on schedule with a simple, intuitive interface.",
    },
    {
      id: 5,
      name: "Weather App",
      image: weatherApp,
      url: "https://adrian-julius.github.io/Weather-App/",
      description:
        "A simple and user-friendly weather app that provides real-time weather updates for any city. Just input a city name to get accurate weather data, including temperature, humidity, and more.",
    },
    {
      id: 6,
      name: "Pokemon Stats Checker",
      image: pokemon,
      url: "https://adrian-julius.github.io/pokemon-stat-checker/",
      description:
        "A simple and interactive Pokémon checker that displays stats for any Pokémon. Just enter a Pokémon's name to view its stats like hp, attacks, defense, and speed",
    },

    {
      id: 7,
      name: "Basic Calculator",
      image: calculator,
      url: "https://adrian-julius.github.io/Basic-Calculator/",
      description:
        "A responsive, simple calculator App that allows users to solve basic mathematical equations such as addition, subtraction, multiplication, and division.",
    },
    {
      id: 8,
      name: "Rock Paper Scissor",
      image: rockPaperScissor,
      url: "https://adrian-julius.github.io/Rock-Paper-Scissors-Game-/",
      description:
        "Rock-Paper-Scissors game where users can play against another player or the computer. It has a simple interface and tracks scores for an enjoyable experience.",
    },
    {
      id: 9,
      name: "Temperature Conversion",
      image: tempConversion,
      url: "https://adrian-julius.github.io/Temperature-Conversion/",
      description:
        "A Temperature Conversion App that enables users to convert between various temperature scales, including Celsius, Fahrenheit, Kelvin, Rankine, and Réaumur.",
    },
    {
      id: 10,
      name: "Number Guessing Game",
      image: guessNumber,
      url: "https://adrian-julius.github.io/Guess-The-Number/",
      description:
        "Number Guessing Game that lets users set their own range. Players guess a random number, receiving hints on whether their guesses are too high or too low.",
    },
    {
      id: 11,
      name: "Dice Roller",
      image: diceRoller,
      url: "https://adrian-julius.github.io/Dice-Roller-Game/",
      description:
        "The Dice Roller project is a game that allows users to generate values for dice, ranging from 1 to 6, based on the number of dice they input or specify.",
    },
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const intervalId = useRef(null);

  document.addEventListener("DOMContentLoaded", initializeSlider);

  const myProjects = projectsInfo.map((project, index) => (
    <div
      key={index}
      className={`project ${
        index === imageIndex
          ? "scale-[1.01] bg-gradient-to-r from-slate-200 to-slate-400"
          : "scale-100 bg-gradient-to-r from-slate-200 to-slate-100"
      } overflow-hidden h-full flex flex-col justify-between text-center gap-5  lg:px-6 py-4 rounded-sm  shadow-xl duration-700 `}
      onClick={() => {
        setImageIndex(index);
        clearInterval(intervalId.current);
      }}
    >
      <div className="description h-full flex flex-col justify-center items-center gap-y-2 absolute opacity-0 px-4 lg:px-7 text-[13px] lg:text-[15px] text-green-600 ">
        {project.description}
        <a
          href={project.url}
          target="_blank"
          title={`Visit ${project.name}`}
          className="inline-block text-white text-[12px] sm:text-[1em] py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-500  rounded-3xl shadow-2xl z-20"
        >
          VISIT
        </a>
      </div>
      <div>
        <div className=" projectName text-lg lg:text-2xl text-slate-600 font-semibold px-2 mb-4">
          {project.name}
        </div>
        <img
          src={project.image}
          alt={project.name}
          id={project.id}
          className="projectImg w-[180px] lg:w-[200px] flex-1 object-contain mx-auto"
        />
      </div>
    </div>
  ));

  useEffect(() => {
    initializeSlider();
    return () => clearInterval(intervalId.current);
  }, [projectsInfo.length]);

  function initializeSlider() {
    if (projectsInfo.length > 0) {
      intervalId.current = setInterval(nextSlide, 1500); // Set interval for the slider
    }
  }

  function nextSlide() {
    setImageIndex((imageIndex) => (imageIndex + 1) % projectsInfo.length);
  }

  const homeProfile = useRef(null);
  const isInView1 = useInView(homeProfile, { once: false });
  const homeText = useRef(null);
  const isInView2 = useInView(homeText, { once: false });
  const aboutProfile = useRef(null);
  const isInView3 = useInView(aboutProfile, { once: false });
  const aboutText = useRef(null);
  const isInView4 = useInView(aboutText, { once: false });
  const techSkills = useRef(null);
  const isInView5 = useInView(techSkills, { once: true });
  const contactText = useRef(null);
  const isInView6 = useInView(contactText, { once: false });

  // window.addEventListener("load", (event) => {
  //   console.log("page is fully loaded");
  // });

  return (
    <>
      <div
        className={`${
          splash ? "block" : "hidden"
        } w-screen h-screen bg-gradient-to-r from-blue-800 to-green-800 flex justify-center items-center text-orange-600`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3.5,
            duration: 1,
            // repeat: 1,
            // repeatType: "reverse",
            // ease: "linear",
          }}
          className="absolute w-screen h-screen bg-gradient-to-r from-yellow-500 to-orange-300 z-50"
        ></motion.div>

        <motion.samp
          initial={{ y: -600 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            // repeat: 1,
            // repeatType: "reverse",
            // ease: "linear",
            type: "spring",
            stiffness: 100,
            damping: 8,
          }}
          className="text-[11em] md:text-[13em] xl-[14em]"
        >
          A
        </motion.samp>

        <motion.samp
          initial={{ y: -600 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
            // repeat: 1,
            // repeatType: "reverse",
            // ease: "linear",
            type: "spring",
            stiffness: 100,
            damping: 8,
          }}
          className="text-[11em] md:text-[13em] xl-[14em]"
        >
          J
        </motion.samp>

        <motion.samp
          initial={{ y: -600 }}
          animate={{ y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.6,
            // repeat: Infinity,
            // repeatType: "reverse",
            // ease: "linear",
            type: "spring",
            stiffness: 100,
            damping: 8,
          }}
          className="text-[11em] md:text-[13em] xl-[14em]"
        >
          V
        </motion.samp>

        <motion.samp
          initial={{ y: -600 }}
          animate={{ y: 0 }}
          transition={{
            delay: 2,
            duration: 0.6,
            // repeat: Infinity,
            // repeatType: "reverse",
            // ease: "linear",
            type: "spring",
            stiffness: 100,
            damping: 8,
          }}
          className=" text-[1.2em] md:text-[1.8em] xl:text-[2em] absolute z-30 text-yellow-100 font-extrabold"
        >
          𝓨𝓸𝓾𝓻 𝓦𝓮𝓫𝓼𝓲𝓽𝓮 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓻
          <br />
          ꧁༺༻꧂
        </motion.samp>
      </div>

      <div
        className={`mainContainer ${
          splash ? "hidden" : "block"
        } bg-slate-900 text-white`}
      >
        <button
          onClick={showingNav}
          className="inline-block fixed top-5 left-3 lg:hidden z-50"
        >
          {isActive ? (
            <img
              src={exit}
              className="w-10 bg-red-200 rounded-full hover:bg-yellow-700 hover:translate-y-[-3px] duration-200"
            />
          ) : (
            <FaHamburger size={"2.5em"} color="orange" />
          )}
        </button>
        <nav
          className={`${
            isActive ? "w-screen h-full left-0 backdrop-blur-sm" : ""
          } fixed w-full flex lg:justify-end items-center py-4 lg:px-10 lg:backdrop-blur-xl lg:shadow-md z-40`}
        >
          <ul
            className={`${
              isActive
                ? "flex flex-col min-w-[280px] w-1/3 h-screen px-10 justify-evenly absolute lg:relative top-0 left-0 bg-slate-700"
                : "hidden"
            } lg:flex lg:gap-x-5`}
          >
            {navMenu}
          </ul>
        </nav>

        <div className="sectionsContainer overflow-hidden ">
          {/* HOME SECTION */}
          <section
            ref={home}
            className="pt-[5vh] lg:pt-32 px-10 sm:px-16 mb-24 lg:mb-8 "
          >
            <div className="homeContainer relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <motion.img
                src={homeProfilee}
                alt="home profile"
                ref={homeProfile}
                initial={{ opacity: 0.5, x: -100 }}
                animate={isInView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="profile h-[49vh] sm:h-[50vh] lg:h-[65vh] xl:h-[75vh]   p-8 m-auto"
              />

              <motion.div
                ref={homeText}
                initial={{ opacity: 0, rotateY: 180 }}
                animate={isInView2 ? { opacity: 1, rotateY: 0 } : {}}
                transition={{ duration: 1 }}
                className="place-self-center"
              >
                <div className="text-[15px] sm:text-[18px] md:text-xl  sm:px-5 mb-7 font-semibold">
                  {" "}
                  <span className="hidden lg:inline-block lg:text-5xl mb-4 text-orange-500">
                    <span>HELLO,</span>
                  </span>
                  <br />I am{" "}
                  <span className="md:text-[1.3em] text-orange-500">
                    Adrian Julius Villaruel,{" "}
                  </span>
                  a Computer Science graduate with a focus on Website
                  development. Feel free to connect with me. Thanks for stopping
                  by!
                </div>

                <div className="homeIntro ">
                  <div className=" flex gap-3 justify-center items-center">
                    <a
                      href="https://www.linkedin.com/in/adrianvillaruel/"
                      target="_blank"
                      title="LinkedIn"
                      className="hover:translate-y-[-2.5px] duration-200 bg-gray-100 rounded-md"
                    >
                      <FaLinkedin
                        size={""}
                        color="0A66C2"
                        className="size-10 lg:size-12"
                      />
                    </a>

                    <a
                      href="https://github.com/Adrian-Julius"
                      target="_blank"
                      title="Github"
                      className="hover:translate-y-[-2.5px] duration-200 bg-gray-100 rounded-md"
                    >
                      <FaGithub
                        size={""}
                        color="#181717"
                        className="size-10 lg:size-12"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/adrianjulius.villaruel"
                      target="_blank"
                      title="Facebook"
                      className="hover:translate-y-[-2.5px] duration-200 bg-gray-100 rounded-md"
                    >
                      <FaFacebook
                        size={""}
                        color="blue"
                        className="size-10 lg:size-12"
                      />
                    </a>
                  </div>

                  <div className="mt-9 lg:mt-12 hover:translate-y-[-2.5px] ">
                    <a
                      href={villaruelResume}
                      title="Villaruel_resume"
                      download={"Villaruel_resume"}
                      className="text-white text-[15px] lg:text-2xl p-5 rounded-2xl shadow-xl bg-lime-700 hover:bg-[#375010] z-20"
                    >
                      Download CV
                    </a>
                    <motion.div
                      initial={{ y: 0 }}
                      animate={{ y: -10 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                      }}
                      className="mt-[20px] z-10"
                    >
                      <img
                        src={arrow}
                        alt="arrow up"
                        className="w-[55px] m-auto"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ABOUT ME SECTION */}
          <section
            ref={aboutme}
            className="aboutmeSection pt-7 lg:pt-[15vh] px-8 sm:px-16 mb-16 lg:mb-12 "
          >
            <h1 className="text-4xl font-semibold mb-12">ABOUT ME</h1>
            <div className="flex flex-col items-center justify-center gap-y-7 sm:gap-y-16 text-2xl">
              <motion.img
                src={aboutmeprofile}
                alt="About me profile"
                ref={aboutProfile}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="aboutProfile w-[200px] h-[200px] border shadow-lg rounded-[50%] object-contain"
              />

              <motion.div
                ref={aboutText}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView4 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="aboutText text-[14px] sm:text-[15px] md:text-xl sm:text-center leading-6 lg:px-28"
              >
                I’m Adrian Julius Villaruel, a full-stack web developer
                specializing in building dynamic, user-friendly websites and
                applications. I completed my BS Computer Science degree at the
                Polytechnic University of the Philippines, where I gained a
                strong foundation in both front-end and back-end development.
                I'm passionate about creating responsive, visually engaging web
                experiences and continually learning the latest technologies.
                Outside of coding, I enjoy exploring new design concepts and
                working on personal projects. Look at the skills below.
              </motion.div>
            </div>
          </section>

          {/* SKILLS/SERVICES SECTION */}
          <section
            ref={SkillsServices}
            className="pt-7 lg:pt-[15vh] px-6 sm:px-16 mb-16 lg:mb-12"
          >
            <div className="inline-block bg-slate-700 p-1 m-auto mb-5 sm:mb-10 rounded-full">
              <button
                onClick={() => settingBtnActive("skills")}
                className={`${
                  btnActive == "skills" ? "bg-orange-700 duration-700" : ""
                } text-xl sm:text-3xl text-center font-semibold px-5 py-1 rounded-full`}
              >
                SKILLS
              </button>
              <button
                onClick={() => settingBtnActive("services")}
                className={`${
                  btnActive == "services" ? "bg-orange-700 duration-700" : ""
                } text-xl sm:text-3xl text-center font-semibold px-5 py-1 rounded-full`}
              >
                SERVICES
              </button>
            </div>

            <div
              className={`${
                btnActive == "services"
                  ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-3 duration-700"
                  : "hidden"
              } `}
            >
              <div className=" bg-slate-500  pb-8 px-7 rounded-lg">
                <h1 className="text-orange-100 underline underline-offset-8 text-[15px] sm:text-lg lg:text-2xl font-semibold p-3  ">
                  Frontend Development
                </h1>
                <div className="sm:text-[15px] ">
                  Creating visually appealing, responsive websites with clean
                  code to deliver seamless and engaging user experiences.
                </div>
              </div>

              <div className=" bg-slate-500  pb-8 px-7 rounded-lg">
                <h1 className="text-orange-100 underline underline-offset-8 text-[15px] sm:text-lg lg:text-2xl font-semibold p-3  ">
                  Backend Development
                </h1>
                <div className="sm:text-[15px] ">
                  Building efficient and secure backend systems with clean,
                  scalable code, well-structured RESTful APIs, and BaaS
                  integrations like Supabase to ensure smooth performance and
                  reliable user experiences.
                </div>
              </div>

              <div className=" bg-slate-500 pb-8 px-7 rounded-lg">
                <h1 className="text-orange-100 underline underline-offset-8 text-[15px] sm:text-lg lg:text-2xl font-semibold p-3  ">
                  Basic SEO Implementation
                </h1>
                <div className="sm:text-[15px] ">
                  Enhancing website structure and content to improve visibility
                  in search engine results, including optimizing HTML structure
                  and metadata for better SEO performance.
                </div>
              </div>

              <div className=" bg-slate-500 pb-8 px-7 rounded-lg">
                <h1 className="text-orange-100 underline underline-offset-8 text-[15px] sm:text-lg lg:text-2xl font-semibold p-3  ">
                  Version Control Management
                </h1>
                <div className="sm:text-[15px] ">
                  Collaborating and managing code versions effectively using
                  Git, ensuring smooth workflow and collaboration in team
                  environments.
                </div>
              </div>

              <div className=" bg-slate-500 pb-8 px-7 rounded-lg">
                <h1 className="text-orange-100 underline underline-offset-8 text-[15px] sm:text-lg lg:text-2xl font-semibold p-3  ">
                  Basic Debugging and Testing
                </h1>
                <div className="sm:text-[15px] ">
                  Conducting foundational testing and debugging of web
                  applications using tools like Jest to identify and resolve
                  issues, ensuring a smoother and more reliable user experience.
                </div>
              </div>
            </div>

            <div>
              <motion.div
                ref={techSkills}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView5 ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7 }}
                className={`technicalSkills ${
                  btnActive == "skills"
                    ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-2 md:gap-x-8 gap-x-5 gap-y-8  text-center lg:px-28 duration-1000"
                    : "hidden"
                }  `}
              >
                {/* HTML5 */}
                <div
                  className={`${
                    isInView5 ? `containers95` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={html}
                    alt="css"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    HTML5
                  </h3>
                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[13px] text-right">
                      95%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* CSS3 */}
                <div
                  className={`${
                    isInView5 ? `containers95` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={css}
                    alt="css"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    CSS3
                  </h3>
                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[13px] text-right">
                      95%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Javascript */}
                <div
                  className={`${
                    isInView5 ? `containers90` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={javascript}
                    alt="javascript"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[13px] font-semibold">
                    Javascript
                  </h3>

                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[14px] text-right">
                      90%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* React */}
                <div
                  className={`${
                    isInView5 ? `containers90` : `invisible`
                  } xl:px-5`}
                >
                  <motion.img
                    src={react}
                    alt="react"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[13px] font-semibold">
                    React JS
                  </h3>

                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[14px] text-right">
                      90%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Node JS */}
                <div
                  className={`${
                    isInView5 ? `containers90` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={nodejs}
                    alt="node js"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[13px] font-semibold">
                    Node JS
                  </h3>

                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[14px] text-right">
                      90%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Express JS */}
                <div
                  className={`${
                    isInView5 ? `containers90` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={express}
                    alt="express js"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[13px] font-semibold">
                    Express JS
                  </h3>

                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[14px] text-right">
                      90%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* mySQL */}
                <div
                  className={`${
                    isInView5 ? `containers90` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={mysql}
                    alt="mysql"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    MySQL
                  </h3>
                  <div>
                    <label className="labels block w-[0]  text-[10px] sm:text-[13px] text-right">
                      90%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Sass */}
                <div
                  className={`${
                    isInView5 ? `containers90` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={sass}
                    alt="sass"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    Sass
                  </h3>
                  <div>
                    <label className="labels  block w-[0]  text-[10px] sm:text-[13px] text-right">
                      90%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Tailwind */}
                <div
                  className={`${
                    isInView5 ? `containers90` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={tailwind}
                    alt="tailwind"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    Tailwind CSS
                  </h3>

                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[13px]  text-right">
                      90%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* jQuery */}
                <div
                  className={`${
                    isInView5 ? `containers85` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={jquery}
                    alt="jquery"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    jQuery
                  </h3>

                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[13px] text-right">
                      85%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Bootstrap */}
                <div
                  className={`${
                    isInView5 ? `containers80` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={bootstrap}
                    alt="bootstrap"
                    className="w-[80px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    Bootstrap
                  </h3>

                  <div>
                    <label className="labels  block w-[0] text-[10px] sm:text-[13px] text-right">
                      80%
                    </label>
                    <div className="skills w-full h-[9px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Typescript */}
                <div
                  className={`${
                    isInView5 ? `containers80` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={typescript}
                    alt="typescript"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[13px] font-semibold">
                    TypeScript
                  </h3>

                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[14px] text-right">
                      80%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Next JS */}
                <div
                  className={`${
                    isInView5 ? `containers80` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={nextjs}
                    alt="nextJS"
                    className="w-[80px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    NextJS
                  </h3>

                  <div>
                    <label className="labels  block w-[0] text-[10px] sm:text-[13px] text-right">
                      80%
                    </label>
                    <div className="skills w-full h-[9px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* PHP */}
                <div
                  className={`${
                    isInView5 ? `containers80` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={php}
                    alt="php"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[13px] font-semibold">
                    PHP
                  </h3>

                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[14px] text-right">
                      80%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Java */}
                <div
                  className={`${
                    isInView5 ? `containers80` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={java}
                    alt="java"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    Java
                  </h3>
                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[13px] text-right">
                      80%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Python */}
                <div
                  className={`${
                    isInView5 ? `containers80` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={python}
                    alt="python"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    Python
                  </h3>

                  <div>
                    <label className="labels block w-[0] text-[10px] sm:text-[13px] text-right">
                      80%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Git */}
                <div
                  className={`${
                    isInView5 ? `containers80` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={git}
                    alt="git"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    Git
                  </h3>
                  <div>
                    <label className="labels block w-[0]  text-[10px] sm:text-[13px]  text-right">
                      80%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery  w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Supabase */}
                <div
                  className={`${
                    isInView5 ? `containers80` : `invisible`
                  } xl:px-5`}
                >
                  <img
                    src={supabase}
                    alt="Supabase"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3 className="text-[12px] sm:text-[14px] font-semibold">
                    Supabase
                  </h3>
                  <div>
                    <label className="labels block w-[0]  text-[10px] sm:text-[13px]  text-right">
                      80%
                    </label>
                    <div className="skills w-full h-[8.5px] bg-slate-600 rounded-full">
                      <div className="mastery  w-[0] h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full text-[9.5px] md:text-[9px] text-white text-right pr-2 font-semibold"></div>
                    </div>
                  </div>
                </div>

                {/* Vite */}
                <div className="viteContainer xl:px-5">
                  <img
                    src={vite}
                    alt="vite"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3>Vite</h3>
                </div>

                {/* npm */}
                <div className="npmContainer xl:px-5">
                  <img
                    src={npm}
                    alt="npm"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3>npm</h3>
                </div>

                {/* VS Code */}
                <div className="vsCodeContainer xl:px-5">
                  <img
                    src={vscode}
                    alt="vscode"
                    className="w-[75px] md:w-[100px] m-auto"
                  />
                  <h3>VS Code</h3>
                </div>
              </motion.div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section
            ref={projects}
            className="min-h-[90vh] pt-7 lg:pt-[15vh] px-6 sm:px-24 md:px-16 mb-16 lg:mb-8 "
          >
            <h1 className="text-4xl font-semibold mb-12">PROJECTS</h1>
            <div className="projectContainer flex flex-col md:grid grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-x-2 lg:gap-y-4  justify-center">
              {myProjects}
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section
            ref={experience}
            className="pt-7 lg:pt-[15vh] px-6 sm:px-16 mb-20 lg:mb-8 "
          >
            <h1 className="text-4xl mb-20 font-semibold xl:mb-12">
              EXPERIENCE / JOURNEY
            </h1>

            <div className="timelineContainer relative text-slate-700">
              <div className="timeline hidden xl:block left-[50%] top-[12%] translate-x-[-50%] absolute w-1 h-3/4 bg-green-600"></div>

              <div className="experienceContainer relative flex flex-col justify-center items-center gap-y-2">
                <div className="leftContainer relative w-full sm:w-[560px] sm:h-[200px] xl:translate-x-[-51%] px-10 py-12 md:py-9 bg-slate-300 shadow-2xl rounded-[30px] sm:rounded-full">
                  <div className="absolute top-[-17%] sm:top-[-20%] right-[42%] sm:right-[44%]  xl:top-[35%] xl:right-[-7%] w-[65px] h-[65px] p-2 rounded-[50%] bg-green-600 z-30 grid place-items-center">
                    <FaUserGraduate size={"40px"} color="orange" />
                  </div>

                  <div className="content">
                    <h2 className="md:text-[1.1em] font-semibold text-slate-700">
                      Computer Science Graduate
                    </h2>
                    <h3 className="text-[15px] text-orange-600 font-semibold mb-2">
                      (October 3, 2024)
                    </h3>
                    <p className="sm:text-[16px] leading-5 sm:leading-6">
                      I completed my BS in Computer Science, which provided me
                      with a solid foundation in programming and software
                      development.
                    </p>
                  </div>
                </div>

                <div className="rightContainer relative w-full sm:w-[560px] sm:h-[200px] xl:translate-x-[51%] px-10 py-12 md:py-9 bg-slate-300 shadow-2xl rounded-[30px] sm:rounded-full">
                  <div className="absolute top-[-16%] sm:top-[-20%] right-[42%] sm:right-[44%]  xl:top-[30%] xl:left-[-7%] w-[65px] h-[65px] p-2 rounded-[50%] bg-green-600 z-30 grid place-items-center">
                    <FaCode size={"40px"} color="orange" />
                  </div>

                  <div className="content">
                    <h2 className="md:text-[1.1em] font-semibold text-slate-700">
                      Website Developer Intern
                    </h2>
                    <h3 className="text-[15px] text-orange-600 font-semibold mb-2">
                      (Sept. 2023 - Oct. 2023)
                    </h3>
                    <p className="sm:text-[16px] leading-5 sm:leading-6">
                      During my internship, I gained valuable experience with
                      various programming tools, including Sass, ReactJS,
                      Semantic UI React, Next.js, and Jest.
                    </p>
                  </div>
                </div>

                <div className="leftContainer relative w-full sm:w-[560px] sm:h-[200px] xl:translate-x-[-51%] px-10 py-12 md:py-9 bg-slate-300 shadow-2xl rounded-[30px] sm:rounded-full">
                  <div className="absolute top-[-17%] sm:top-[-20%] right-[42%] sm:right-[44%]  xl:top-[35%] xl:right-[-7%] w-[65px] h-[65px] p-2 rounded-[50%] bg-green-600 z-30 grid place-items-center">
                    <FaSchool size={"40px"} color="orange" />
                  </div>

                  <div className="content">
                    <h2 className="md:text-[1.1em] font-semibold text-slate-700">
                      Polytechnic University of the Philippines - Main Campus
                    </h2>
                    <h3 className="text-[15px] text-orange-600 font-semibold mb-2">
                      (2020)
                    </h3>
                    <p className="sm:text-[16px] leading-5 sm:leading-6">
                      I decided to pursue a Computer Science course, marking the
                      true beginning of my journey.
                    </p>
                  </div>
                </div>

                <div className="rightContainer relative w-full sm:w-[560px] sm:h-[200px] xl:translate-x-[51%] px-10 py-12 md:py-9 bg-slate-300 shadow-2xl rounded-[30px] sm:rounded-full">
                  <div className="absolute top-[-16%] sm:top-[-20%] right-[42%] sm:right-[44%]  xl:top-[30%] xl:left-[-7%] w-[65px] h-[65px] p-2 rounded-[50%] bg-green-600 z-30 grid place-items-center">
                    <FaBook size={"40px"} color="orange" />
                  </div>
                  <div className="content">
                    <h2 className="md:text-[1.1em] font-semibold text-slate-700">
                      Technological Institute of the Philippines - Manila
                    </h2>
                    <h3 className="text-[15px] text-orange-600 font-semibold mb-2">
                      (2018-2020)
                    </h3>
                    <p className="sm:text-[16px] leading-5 sm:leading-6">
                      I began learning the basics of HTML and CSS in our ICT
                      class and developed an interest in programming.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section
            ref={contact}
            className="pt-7 lg:pt-[15vh] px-6 sm:px-16 mb-16 lg:mb-8 "
          >
            <h1 className="text-4xl font-semibold mb-12">CONTACT ME</h1>
            <div className="contactText grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                ref={contactText}
                initial={{ rotateY: 180 }}
                animate={isInView6 ? { rotateY: 0 } : {}}
                transition={{ duration: 1 }}
                className="flex items-center px-5 sm:px-10  sm:text-lg lg:text-2xl"
              >
                <div>
                  <span className="inline-block text-[1.5em] sm:text-3xl lg:text-4xl text-orange-600 mb-3 font-semibold">
                    LET'S TALK
                  </span>
                  <br />
                  I'm open to new opportunities and collaborations! You can
                  contact me via email or connect on social media.
                </div>
              </motion.div>

              <div className="formContainer text-left text-xl">
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    placeholder="fullname"
                    className="w-full rounded-xl p-3 mb-6 mt-2 shadow-lg hover:scale-[1.02] focus:scale-[1.02] text-slate-700"
                    required
                  />
                  <br />

                  <label>Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full rounded-xl p-3 mb-6 mt-2 shadow-lg hover:scale-[1.02] focus:scale-[1.02] text-slate-700"
                    required
                  />
                  <br />

                  <label>Message</label>
                  <br />
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-xl p-3 mt-2 shadow-lg hover:scale-[1.02] focus:scale-[1.02] text-slate-700"
                    required
                  />
                  <br />

                  <div className="text-center lg:text-left">
                    <input
                      type="submit"
                      value="Send"
                      className="px-6 py-3 mt-5 rounded-xl shadow-xl cursor-pointer bg-orange-700 hover:bg-orange-500 hover:translate-y-[-2.5px] duration-200"
                    />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className=" flex flex-col xl:justify-center xl:items-center gap-x-10 gap-y-1 p-10 pb-3 mt-10 bg-slate-950 text-white">
          <address className="flex flex-col xl:flex-row gap-x-10 gap-y-3 text-left text-[14px] sm:text-[1.1em] mb-5">
            <div className="flex gap-x-2 ">
              <FaPhoneAlt
                size={""}
                className="flex-shrink-0 size-5 lg:size-6"
              />
              <span>+63 966 460 6513</span>
            </div>
            <div className="flex gap-x-3">
              <FaLocationArrow
                size={""}
                color=""
                className="flex-shrink-0 size-5 lg:size-6"
              />
              <span>
                38-H 20th Ave, Cubao, Quezon City, 1109 Metro Manila,
                Philippines
              </span>
            </div>
            <div className="flex gap-x-3">
              <FaEnvelope
                size={""}
                color=""
                className="flex-shrink-0  size-5 lg:size-6"
              />
              <a
                href="mailto:adrianvillaruel2223@gmail.com"
                title="Email me here"
              >
                adrianvillaruel2223@gmail.com
              </a>
            </div>
          </address>

          <div className="flex gap-x-3 lg:gap-x-3 xl:justify-center xl:items-center">
            <a
              href="https://www.linkedin.com/in/adrianvillaruel/"
              target="_blank"
              title="LinkedIn"
              className="hover:translate-y-[-2.5px] duration-200 bg-gray-100 rounded-md"
            >
              <FaLinkedin
                size={""}
                color="0A66C2"
                className="size-10 lg:size-[2.9em]"
              />
            </a>

            <a
              href="https://github.com/Adrian-Julius"
              target="_blank"
              title="Github"
              className="hover:translate-y-[-2.5px] duration-200 bg-gray-100 rounded-md"
            >
              <FaGithub
                size={""}
                color="#181717"
                className="size-10 lg:size-[2.9em]"
              />
            </a>
            <a
              href="https://www.facebook.com/adrianjulius.villaruel"
              target="_blank"
              title="Facebook"
              className="hover:translate-y-[-2.5px] duration-200 bg-gray-100 rounded-md"
            >
              <FaFacebook
                size={""}
                color="#1877F2"
                className="size-10 lg:size-[2.9em]"
              />
            </a>
            <a
              href="https://www.instagram.com/adrianjuliusvillaruel/"
              target="_blank"
              title="Instagram"
              className="hover:translate-y-[-2.5px] duration-200 bg-white rounded-md"
            >
              <FaInstagramSquare
                size={""}
                color="#E1306C"
                className="size-10 lg:size-[2.9em]"
              />
            </a>
          </div>
          <h2 className="copyright pt-3 mt-9 text-orange-600">
            © 2024 Adrian Julius Villaruel. All rights reserved.
          </h2>
        </footer>
      </div>
    </>
  );
}

export default App;
