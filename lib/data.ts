import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/navy-project-main.jpg";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Constellation Software Engineering (US Navy)",
    description:
      "I served as a contractor full-stack cloud software engineer at Constellation Software Engineering, delivering mission-critical solutions for the US Navy over an 8-month engagement.",
    tags: ["C#", ".NET Core", "Python", "Django", "Azure SQL", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "AppTech",
    description:
      "Modernized Angular applications to Angular 19, created features, fixed bugs, and unit tested Angular/TypeScript applications. Maintained .NET Framework apps, built scalable APIs with ASP.NET Core, and implemented CI/CD pipelines in Azure DevOps.",
    tags: ["Angular", ".NET 8", "ASP.NET Core", "TypeScript", "RxJS", "Azure DevOps"],
    imageUrl: rmtdevImg,
  },
  {
    title: "InfoEd Global",
    description:
      "Built full-stack solutions using C#, VB.NET, ASP.NET, Angular, and JavaScript. Implemented XML/XSD integrations with ASP.NET Web Forms and optimized SQL Server/Oracle databases.",
    tags: ["C#", "VB.NET", "ASP.NET", "Angular", "JavaScript", "SQL Server", "Oracle"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "C#",
  ".NET Core",
  "Azure SQL",
  "Framer Motion",
] as const;
