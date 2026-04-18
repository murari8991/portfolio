import './App.scss';
import  gsap  from "gsap";
import React, { useState, useEffect, useRef } from 'react';
import ExpandableCard from './expandableCard.jsx';
import ParticleBackground from './particleBg.jsx';
import { ImLinkedin2 } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import resume from "./assets/Resume.pdf";
import Pinwheel from './spinWheel.jsx';
import AnimatedButton from './AnimateBtn.jsx'

function App() {

  const [showTopBtn, setShowTopBtn] = useState(false); // State to show button
  
  // Effect to show the scroll to top botton only after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to a section based on the Section ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="hero" class="text-[#c8c6d7] scroll-smooth">
      <ParticleBackground>
      <section id="landing" class="flex flex-col items-center mb-96 mt-48 gap-y-4 mx-8">
        <div class="content-card">
          <h1 class="font-bold hero text-6xl text-center">Murari Ponduru</h1>
        </div>
        <div class="typewriter content-card">
          <span class="placeholder"></span>
        </div>
      </section>
      
      <div class="mx-8">
      <section id="about" class="flex flex-col items-center mb-40 wrapper">
        <div class="flex flex-col gap-6">
          <div class="pt-4 flex gap-4">
            <Pinwheel />
            <h3 class="text-[#aca1eb] text-2xl font-bold">About me</h3>
          </div>
          <hr></hr>
          <div class="flex flex-col gap-4">
            <h2 class="text-[#aca1eb] text-5xl font-bold basis-3/12">Hi, name's Murari</h2>
            <p class="text-lg basis-10/12 font-semibold">
              I am a passionate about learning new things in technology and applying it in real-life.
              Working on projects and building applications that provide value to people is what fuels me. 
              I am currently pursuing Masters in Information Systems at Saint Louis University.
              My goal is to be a developer, watching and contributing to the everchanging technology.
            </p>
          </div>
          <div class="border-t flex flex-col gap-6">
            <h2 class="text-[#aca1eb] text-5xl font-bold mt-6">Want to know more about me?</h2>
            <div class="flex flex-wrap gap-6">
              <AnimatedButton onClick={() => scrollToSection('skills')} class="skill-chip">My Skills</AnimatedButton>
              <button onClick={() => scrollToSection('experience')} class="skill-chip">My Experience</button>
              <button onClick={() => scrollToSection('edu')} class="skill-chip">My Education</button>
              <button onClick={() => scrollToSection('projects')} class="skill-chip">My Projects</button>
              <a href={resume} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="skill-chip flex items-center gap-1">
                My Resume
                <span class="material-symbols-outlined font-light">
                  open_in_new </span>
              </a>
            </div>
          </div>
          <div class="flex gap-4 mb-4">
            <a href="https://www.linkedin.com/in/s-m-v-a-lakshmanacharyulu-ponduru-43b8aa24b" class="p-2 border border-[#c8c6d7] rounded-full icon-wrap"><ImLinkedin2  class="size-5 icon"/></a>
            <a href="https://github.com/Murari-Lakshman" class="p-2 border border-[#c8c6d7] rounded-full icon-wrap"><IoLogoGithub class="size-5 icon"/></a>
            <a href="https://leetcode.com/u/MxWHMnMB8v/" class="p-2 border border-[#c8c6d7] rounded-full icon-wrap"><SiLeetcode  class="size-5 icon"/></a>
          </div>
        </div>
      </section>

      <section id="skills" class="flex flex-col mb-40">
        <div class="flex flex-col gap-6">
          <div class="pt-4 flex gap-4">
            <Pinwheel />
            <h3 class="text-[#aca1eb] text-2xl font-bold">Skills and Stack</h3>
          </div>
          <hr></hr>
          <ul class="flex flex-col gap-10 mb-4">
            <li class="grid gap-4 md:grid-cols-12">
              <div class="md:col-span-4">
                <h3 class="font-bold text-2xl">Languages: </h3>
              </div>
              <div class="md:col-span-7 flex flex-wrap gap-x-6 gap-y-6 text-xl font-normal">
                <p class="skill-chip">Python</p>
                <p class="skill-chip">SQL</p>
                <p class="skill-chip">R</p>
                <p class="skill-chip">TypeScript</p>
              </div>
            </li>
            <li class="grid gap-4 md:grid-cols-12">
              <div class="md:col-span-4">
                <h3 class="font-bold text-2xl">AI & ML: </h3>
              </div>
              <div class="md:col-span-7 flex flex-wrap gap-x-6 gap-y-6 text-xl font-normal">
                <p class="skill-chip">Large Language Models (LLMs)</p>
                <p class="skill-chip">Fine-tuning</p>
                <p class="skill-chip">NLP</p>
                <p class="skill-chip">Computer Vision</p>
                <p class="skill-chip">YOLO V5</p>
                <p class="skill-chip">RAG</p>
              </div>
            </li>
            <li class="grid gap-4 md:grid-cols-12">
              <div class="md:col-span-4">
                <h3 class="font-bold text-2xl">Tools & Methodologies:</h3>
              </div>
              <div class="md:col-span-7 flex flex-wrap gap-x-6 gap-y-6 text-xl font-normal">
                <p class="skill-chip">Git</p>
                <p class="skill-chip">GitHub</p>
                <p class="skill-chip">Agile/Scrum</p>
                <p class="skill-chip">Data Structures</p>
                <p class="skill-chip">Algorithms</p>
              </div>
            </li>
            <li class="grid gap-4 md:grid-cols-12">
              <div class="md:col-span-4">
                <h3 class="font-bold text-2xl">Data Science:</h3>
              </div>
              <div class="md:col-span-7 flex flex-wrap gap-x-6 gap-y-6 text-xl font-normal">
                <p class="skill-chip">Data Pipelines</p>
                <p class="skill-chip">ETL Pipelines</p>
                <p class="skill-chip">Data Engineering</p>
                <p class="skill-chip">BeautifulSoup</p>
                <p class="skill-chip">PowerBI</p>
                <p class="skill-chip">Data Visualization</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="experience" class="flex flex-col mb-40">
        <div class="flex flex-col gap-6">
          <div class="pt-4 flex gap-4">
            <Pinwheel />
            <h3 class="text-[#aca1eb] text-2xl font-bold">My Experience</h3>
          </div>
          <ul class="flex flex-col gap-12 mb-4">
            <li>
              <ExpandableCard title="Summer Intern" 
              desc="Designed a custom MCP for an in-house Gen-AI application that utilizes a RAG.
                  Contributed to modernizing the company's product by developing a new front-end using React and TypeScript.
                  Obfuscated the proprietry source code of using Python to ensure reliablity during training." 
              sub1="CoreCard, Norcross, Georgia" 
              sub2="May 2025 to July 2025"/>
            </li>
            <li>
              <ExpandableCard title="Software Intern"
              sub1="Techsophy Solutions, Hyd, IN" 
              sub2="May 2023 to July 2023"
              desc="Employed Machine Vision and AI to detect cars to secure a community and track the cars going in and out.
                  Fine-tuned YOLO V5 model to ensure proper detection."/>
            </li>
          </ul>
        </div>
      </section>

      <section id="edu" class="flex flex-col mb-40">
        <div class="flex flex-col gap-6">
          <div class="pt-4 flex gap-4">
            <Pinwheel />
            <h3 class="text-[#aca1eb] text-2xl font-bold">Education</h3>
          </div>
          <ul class="flex flex-col gap-12 mb-4">
            <li>
              <ExpandableCard 
              title="Masters in Information Systems"
              sub1="Saint Louis University, St. Louis, MO"
              sub2="Aug 2024 to May 2026 (Currently pursuing)"
              desc="Member of Alpha Sigma Nu, an honorary society that recognizes students who distinguish themselves in
                    scholarship, loyalty and service and encourages its members to a lifetime pursuit of intellectual development, deepening
                    Ignatian spirituality, service to others, and a commitment to the core principles of Jesuit education."
              />
            </li>
            <li>
              <ExpandableCard 
              title="Bachelors in Computer Science"
              sub1="Surampalem, Andhra Pradesh, India"
              sub2="Sept 2020 to May 2024"
              desc="Moderator for the sophomore and Junior year. 
                    Worked closely to establish clubs in the college and actively recruit people to run the clubs and inspire students to pursue their career in technical fields. 
                    Club Coordinator for the junior year, maintained the established Industry 4.0 clubs. 
                    Appreciated by the director for my outstanding efforts in establishing clubs."
              />
            </li>
          </ul>
        </div>
      </section>

      <section id="projects"  class="flex flex-col mb-16">
        <div class="flex flex-col gap-6">
          <div class="pt-4 flex gap-4">
            <Pinwheel />
            <h3 class="text-[#aca1eb] text-2xl font-bold">Projects</h3>
          </div>
          <ul class="flex flex-col gap-12 mb-4">
            <li class="content-card">
              <div class="flex flex-col gap-4 mb-2">
                <div class="flex justify-between">
                  <h2 class="text-2xl font-bold mt-3">ML Model to Find Salary Using Experience</h2>
                  <div class="flex items-center">
                    <a href="https://github.com/Murari-Lakshman/Simple-Linear-Regression" class="flex rounded p-1 icon-wrap md:mt-3">
                    <span class="material-symbols-outlined icon">
                    open_in_new </span>
                    </a>
                  </div>
                </div>
                <hr></hr>
                <p class="text-lg font-semibold">
                  A Simple linear regression model to predict the salary using the experience of an individual. 
                  This is model that is created only using numpy and matplotlib 
                  (with the exception of sklearn to determine how accurate our model is using r2 score). 
                  First we use a very simple dataset downloaded from Kaggle.
                </p>
              </div>
            </li>
            <li class="content-card">
              <div class="flex flex-col gap-4 mb-2">
                <div class="flex justify-between">
                  <h2 class="text-2xl font-bold mt-3">Web-Crawling and Data Cleaning using Python</h2>
                  <div class="flex items-center">
                    <a href="https://github.com/Murari-Lakshman/WebCrawling-Allergies" class="flex rounded md:mt-3 p-1 icon-wrap">
                    <span class="material-symbols-outlined icon">
                    open_in_new </span></a>
                  </div>
                </div>
                <hr></hr>
                <p class="text-lg font-semibold">
                  Scraped the website for data and presented the data in a structured fashion in csv file.
                  Utilized web crawling libraries like beautifulSoup.
                </p>
              </div>
            </li>
            <li class="content-card">
              <div class="flex flex-col gap-4 mb-2">
                <div class="flex justify-between">
                  <h2 class="text-2xl font-bold mt-3">My Portfolio</h2>
                  <div class="flex items-center">
                  <a href="https://github.com/murari8991/portfolio" class="flex rounded mt-3 p-1 icon-wrap">
                  <span class="material-symbols-outlined icon">
                  open_in_new </span></a>
                  </div>
                </div>
                <hr></hr>
                <p class="text-lg font-semibold">
                  This is a static website developed using HTML, CSS, JS, React and Vite.
                  I am still building it, so I am leaving the description empty.
                  This website contains all my achievements and also acts as a text of my skills.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <footer class="flex items-center justify-center">
        <p>email: murari2lakshman.ponduru@gmail.com</p>
      </footer>

      <div id="backtop" class="fixed bottom-8 right-8 z-50">
        <button 
        onClick={()=> scrollToSection('hero')}
        aria-label="Scroll to top"
        className={`skill-chip rounded transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-offset-2 focus:ring-2
          ${showTopBtn 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}><MdKeyboardArrowDown class="rotate-180"/></button>
      </div>
      </div>
      </ParticleBackground>
    </div>
  )
}

export default App
