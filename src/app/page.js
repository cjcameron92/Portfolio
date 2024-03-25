"use client";

import { useState } from "react";

const languages = [
  "Java",
  "C++",
  "GoLang",
  "Kotlin",
  "Python",
  "Javascript",
  "C#",
  "Typescript",
];
const services = [
  "Azure",
  "SQL",
  "MongoDB",
  "Redis",
  "Data Anyaltics",
  "Excel",
  "RabbitMQ",
  "Word",
];

const experience = [
  {
    title: "Lead Software Engineer",
    date: "09/01/2022 --- present",
    company: "Docere Health",
    location: "Toronto, Ontario",
    description:
      "Starting as an intern at Docere Health in 2022, I quickly progressed to a full-stack developer role, where I was instrumental in designing the MVP. My success led to a permanent position, through which I ascended to lead a team tasked with further developing the healthcare platform. In this leadership role, I not only guide the platform's design but also mentor the next wave of talent. My experience at Docere, enriched by our Microsoft partnership, has honed my skills in both teamwork and project leadership.",
  },
  {
    title: "Software Engineer",
    date: "04/01/2021 --- 09/01/2022",
    company: "Stellar Development",
    location: "North Carolina",
    description:
      "In collaboration with stakeholders, I enhanced the Minecraft gaming experience by integrating blockchain technology. I led the design of a robust ecosystem to accommodate a thriving community of thousands of players, focusing on creating a seamless, engaging environment. My role included architecting a resilient backend infrastructure to support the complex needs of this dynamic online world.",
  },
  {
    title: "Chief Executive Officer",
    date: "08/01/2019 - 12/31/2020",
    company: "Vertmix Inc.",
    location: "Waterloo, Ontario",
    description:
      "I founded Vertmix Inc., a bespoke software development firm catering to global small businesses, specializing in Java and Kotlin. Embracing agile methodologies, we've earned the trust of over 30 clients worldwide. Leading a dedicated team of six developers, we've consistently delivered high-quality software solutions, underpinned by a SCRUM-based project management framework, ensuring client satisfaction and timely delivery.",
  },
];

export default function Home() {
  const [currentExperience, setCurrentExperience] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row ">
      {/* Sidebar for Languages - becomes a top bar on smaller screens */}
      <div className="lg:fixed lg:left-0 w-full lg:w-[200px] rounded-t-lg lg:rounded-[5px] mt-4 lg:mt-16 flex flex-row lg:flex-col items-center lg:justify-start space-x-2 lg:space-x-0 space-y-0 lg:space-y-4 p-2 lg:p-4 overflow-auto">
        {languages.map((item, i) => (
          <h2
            key={i}
            className={`ml-2 lg:ml-8 sm:mr-2 lg:mr-8 block text-black p-2 text-base lg:text-lg transition-colors duration-300 ease-in-out hover:bg-yellow-300 hover:rounded-[5px] whitespace-nowrap `}
            style={{ width: "auto", maxWidth: "160px" }}
          >
            {item}
          </h2>
        ))}
      </div>

      {/* Main Content - Adjusts padding to account for sidebars on larger screens */}
      <div className="flex-grow p-4 lg:p-8 text-center">
        <h1 className="text-xl font-bold">Work Experience</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-32 mt-8">
          <div>
            <h2 className="text-lg font-medium">
              {experience[currentExperience].title}
            </h2>
            <h3>{experience[currentExperience].date}</h3>
          </div>
          <div>
            <h2 className="text-lg font-medium">
              {experience[currentExperience].company}
            </h2>
            <h3>{experience[currentExperience].location}</h3>
          </div>
        </div>
        {/* Background and Text Styling Applied Here */}

        <div className="mt-8 mb-16 lg:mb-8 bg-black text-white p-4 rounded-lg max-w-4xl mx-auto">
          <p className="text-base lg:text-lg leading-relaxed">
            {experience[currentExperience].description}
          </p>
        </div>
      </div>
      {/* Buttons for changing experience */}
      <div className="fixed bottom-12 md:bottom-8 left-0 right-0 px-4">
        <div className="flex justify-center space-x-2 md:space-x-4 mb-10">
          {experience.map((item, index) => (
            <button
              key={index}
              aria-label={`Select experience ${index + 1}`}
              className={`w-6 h-6 md:w-6 md:h-6 rounded-full cursor-pointer transition-all duration-300 
              ${
                index === currentExperience
                  ? "bg-blue-600 border-4 border-blue-300 shadow-lg"
                  : "bg-black"
              } 
        hover:bg-gray-500 hover:shadow-md`}
              onClick={() => setCurrentExperience(index)}
            ></button>
          ))}
        </div>
      </div>
      <div className="lg:fixed lg:right-0 w-full lg:w-[200px] rounded-b-lg lg:rounded-[5px] mt-4 lg:mt-16 flex flex-row lg:flex-col items-center lg:justify-start space-x-2 lg:space-x-0 space-y-0 lg:space-y-4 p-2 lg:p-4 overflow-auto">
        {services.map((item, i) => (
          <h2
            key={i}
            className={`block text-black p-2 text-base lg:text-lg transition-colors duration-300 ease-in-out hover:bg-yellow-300 hover:rounded-[5px] whitespace-nowrap `}
            style={{ width: "auto", maxWidth: "160px" }}
          >
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
}
