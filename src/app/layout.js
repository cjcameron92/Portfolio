"use client";

import "./globals.css";
import { Albert_Sans as FontSans } from "next/font/google";
import Badge from "@/components/badge";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const topics = [
  {
    title: "Experience",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Research",
    href: "/research",
  },
];

const socials = [
  {
    image: githubIcon,
    href: "https://github.com/cjcameron92",
  },
  {
    image: linkedinIcon,
    href: "https://linkedin.com/in/cjcameron92",
  },
];

const interests = [
  "Genetic Programming",
  "Neural Networks",
  "Parallel Computing",
  "Large Language Models",
  "Software Engineering",
  "Project Management",
  "Fullstack Development",
  "DevOps",
  "Systems Design",
];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
      <div
        className={`flex justify-between items-center m-8 ${fontSans.variable}`}
      >
        <Badge title="Cameron Carvalho" />
        <div className="flex space-x-4">
          {topics.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`block hover:underline ${
                pathname === item.href ? "font-bold" : "font-normal"
              }`}
            >
              {item.title}
            </Link>
          ))}
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item.image}
                alt="Social"
                width={32}
                height={32}
                className="block hover:bg-gray-100"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-32">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          i&rsquo;m interested in building ai tech
        </h1>
      </div>
      <div className="w-screen bg-black rounded-[5px] mt-4 flex flex-col md:flex-row items-center justify-center p-4 md:p-0 md:h-[200px]">
        {interests.map((item, i) => (
          <h2
            key={i}
            className={`text-white text-center px-2 mb-2 md:mb-0 ${
              i % 2 === 0 ? "md:mt-8" : "md:mb-8"
            } text-sm md:text-lg transition-colors duration-300 ease-in-out hover:bg-yellow-300 hover:rounded-[5px] whitespace-normal md:whitespace-nowrap`}
            style={{ flexBasis: "auto", flexGrow: 0, flexShrink: 0 }}
          >
            {item}
          </h2>
        ))}
      </div>

      {children}
      <div className="fixed bottom-0 w-full">
        <h1 className="text-lg text-white p-2 bg-black text-center">
          This website was created and designed by me.{" "}
          <span className="text-yellow-300 text-sm">
            &copy; Cameron Carvalho 2024
          </span>
        </h1>
      </div>
      </body>
    
    </html>
  );
}
