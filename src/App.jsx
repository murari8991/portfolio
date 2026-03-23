import { useState } from 'react'
import './App.scss'

function App() {

  return (
    <div class="text-[#eae3ae] mx-8 mt-48">
      <section id="landing" class="flex flex-col items-center mb-96 gap-y-4">
        <div class="flex items-center justify-center">
          <h1 class="content-card text-7xl font-bold"><span class="hero">Murari Ponduru</span></h1>
        </div>
        <div class="typewriter content-card">
          <span class="placeholder"></span>
        </div>
      </section>

      <section id="about" class="flex flex-col items-center mb-40">
        <div class="content-card flex flex-col gap-6">
          <div class="pt-4">
            <h3 class="text-2xl font-bold">About me</h3>
          </div>
          <hr></hr>
          <div class="flex gap-x-3 content">
            <h2 class="text-5xl text-[#ffbd00] font-bold basis-3/12">Hi, name's Murari</h2>
            <div class="border-solid border-l mr-6"></div>
            <p class="text-lg basis-10/12 font-semibold">
              I am a passionate about learning new things in technology and applying it in real-life.
              Working on projects and building applications that provide value to people is what fuels me. 
              I am currently pursuing Masters in Information Systems at Saint Louis University.
              My goal is to be a developer, watching and contributing to the everchanging technology.
            </p>
          </div>
          <div class="flex gap-8 mb-4">
            <a href="https://www.linkedin.com/in/s-m-v-a-lakshmanacharyulu-ponduru-43b8aa24b" class="p-2 bg-[#ffbb006b] rounded-md">LinkedIn</a>
            <a href="https://github.com/Murari-Lakshman" class="px-4 py-2 bg-[#ffbb006b] rounded-md">Github</a>
            <a href="https://leetcode.com/u/MxWHMnMB8v/" class="p-2 bg-[#ffbb006b] rounded-md">Leetcode</a>
          </div>
        </div>
      </section>

      <section id="skills" class="flex flex-col mb-40">
        <div class="content-card flex flex-col gap-6">
          <div class="pt-4">
            <h3 class="text-2xl font-bold">Skills and Stack</h3>
          </div>
          <hr></hr>
          <ul class="flex flex-col gap-4 mb-4">
            <li>
              <h3>Languages: </h3>
              <div class="flex gap-4">
                <p class="skill-chip">Python</p>
                <p class="skill-chip">SQL</p>
                <p class="skill-chip">R</p>
                <p class="skill-chip">TypeScript</p>
              </div>
            </li>
            <li>
              <h3>AI & ML: </h3>
              <div class="flex gap-4">
                <p class="skill-chip">Large Language Models (LLMs)</p>
                <p class="skill-chip">Fine-tuning</p>
                <p class="skill-chip">NLP</p>
                <p class="skill-chip">Computer Vision</p>
                <p class="skill-chip">YOLO V5</p>
                <p class="skill-chip">RAG</p>
              </div>
            </li>
            <li>
              <h3>Tools & Methodologies:</h3>
              <div class="flex gap-4">
                <p class="skill-chip">Git</p>
                <p class="skill-chip">GitHub</p>
                <p class="skill-chip">Agile/Scrum</p>
                <p class="skill-chip">Data Structures</p>
                <p class="skill-chip">Algorithms</p>
              </div>
            </li>
            <li>
              <h3>Data Science:</h3>
              <div class="flex gap-4">
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
        <div class="content-card flex flex-col gap-6">
          <div class="pt-4">
            <h3 class="text-2xl font-bold">My Experience</h3>
          </div>
          <hr></hr>
          <ul class="flex flex-col gap-4 mb-4">
            <li class="skill-chip">
              <div class="flex flex-col gap-4 m-4">
                <div class="flex gap-4 justify-between">
                  <h2 class="text-[#ffbd00] text-2xl font-bold mt-3">Summer Intern</h2>
                  <div class="flex flex-col mr-4 items-end">
                    <p class="italic font-semibold text-lg">CoreCard, Norcross, Georgia</p>
                    <p class="italic text-lg">May 2025 to July 2025</p>
                  </div>
                </div>
                <hr></hr>
                <p class="text-lg font-semibold">
                  Designed a custom MCP for an in-house Gen-AI application that utilizes a RAG.
                  Contributed to modernizing the company's product by developing a new front-end using React and TypeScript.
                  Obfuscated the proprietry source code of using Python to ensure reliablity during training.
                </p>
              </div>
            </li>
            <li class="skill-chip">
              <div class="flex flex-col gap-4 m-4">
                <div class="flex gap-4 justify-between">
                  <h2 class="text-[#ffbd00] text-2xl font-bold mt-3">Software Intern</h2>
                  <div class="flex flex-col mr-4 items-end">
                    <p class="italic text-lg font-semibold">Techsophy Solutions, Hyd, IN</p>
                    <p class="italic text-lg">May 2023 to July 2023</p>
                  </div>
                </div>
                <hr></hr>
                <p class="text-lg font-semibold">
                  Employed Machine Vision and AI to detect cars to secure a community and track the cars going in and out.
                  Fine-tuned YOLO V5 model to ensure proper detection.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="edu" class="flex flex-col mb-40">
        <div class="content-card flex flex-col gap-6">
          <div class="pt-4">
            <h3 class="text-2xl font-bold">Education</h3>
          </div>
          <hr></hr>
          <ul class="flex flex-col gap-4 mb-4">
            <li class="skill-chip">
              <div>
                <h2>Masters in Information Systems</h2>
              </div>
              <div>
                <p>Saint Louis University, St. Louis, MO</p>
                <p>Aug 2024 to May 2026 (Currently pursuing)</p>
                <p>
                    Member of Alpha Sigma Nu, an honorary society that recognizes students who distinguish themselves in
                    scholarship, loyalty and service and encourages its members to a lifetime pursuit of intellectual development, deepening
                    Ignatian spirituality, service to others, and a commitment to the core principles of Jesuit education.
                </p>
              </div>
            </li>
            <li class="skill-chip">
              <div>
                <h2>Bachelors in Computer Science</h2>
              </div>
              <div>
                <p>Surampalem, Andhra Pradesh, India</p>
                <p>Sept 2020 to May 2024</p>
                <p>
                    Moderator for the sophomore and Junior year. 
                    Worked closely to establish clubs in the college and actively recruit people to run the clubs and inspire students to pursue their career in technical fields. 
                    Club Coordinator for the junior year, maintained the established Industry 4.0 clubs. 
                    Appreciated by the director for my outstanding efforts in establishing clubs.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="projects"  class="flex flex-col mb-16">
        <div class="content-card flex flex-col gap-6">
          <div class="pt-4">
            <h3 class="text-2xl font-bold">Projects</h3>
          </div>
          <hr></hr>
          <ul class="flex flex-col gap-4 mb-4">
            <li class="skill-chip">
              <div>
                <h2>ML Model to Find Salary Using Experience</h2>
              </div>
              <div>
                <p>
                  Built a simple linear regression model using Numpy and Matplotlib.
                  Achieved and R2 score of approximately 0.99.
                </p>
              </div>
            </li>
            <li class="skill-chip">
              <div>
                <h2>Web-Crawling and Data Cleaning using Python</h2>
              </div>
              <div>
                <p>
                  Scraped the website for data and presented the data in a structured fashion in csv file.
                  Utilized web crawling libraries like beautifulSoup.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* <section id="cetificates">
        <div>
          <h3>Certifia</h3>
        </div>
      </section> */}

      <footer class="flex items-center justify-center bg-[#550000]">
        <p>email: murari2lakshman.ponduru@gmail.com</p>
      </footer>
    </div>
  )
}

export default App
