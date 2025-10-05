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
    title: "Graduated BOCES Trade School",
    location: "Port Ewen, NY",
    description:
      "I achieved graduation for my GED diploma, Microsoft Office Specialist (MOS), A+ Technician, after 1 year of studying. I immediately enrolled into UCCC for my Bachelors.",
    icon: React.createElement(LuGraduationCap),
    date: "2011",
  },
  {
    title: "Graduated UCCC - Ulster County Community College",
    location: "Stone Ridge, NY",
    description:
      "I graduated after 2 years of studying computer science. I immediately enrolled into SUNY New Paltz for my Bachelors.",
    icon: React.createElement(LuGraduationCap),
    date: "2014",
  },
  {
    title: ".NET Full-Stack Developer Intern - Precision Care Software",
    location: "New Paltz, NY",
    description:
      "Developed web/mobile apps with C#, VB.NET, ASP.NET, AngularJS, and RESTful APIs. Optimized Oracle/SQL queries for efficient SPA data retrieval.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 2015 - Apr 2016",
  },
  {
    title: "iOS/Android Mobile Developer (Contract) - Digital Catnip",
    location: "Beacon, NY",
    description:
      "Developed cross-platform fitness apps using Swift (iOS) and Java (Android). Integrated RESTful APIs for data tracking, synchronization, and analysis. Managed mobile databases and designed responsive, user-friendly UI/UX.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2016 - Jun 2016",
  },
  {
    title: "WordPress / PHP Developer - Rev Design",
    location: "Patterson, NY",
    description:
      "Built dynamic WordPress sites with PHP and boilerplate templates; optimized MySQL databases. Designed responsive UI/UX using HTML5, CSS3, Bootstrap, and jQuery.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2017 - Nov 2018",
  },
  {
    title: "Graduated State University of New Paltz",
    location: "New Paltz, NY",
    description:
      "I graduated after 4 years of studying computer science. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: ".NET Full-Stack Developer - InfoEd Global",
    location: "Albany, NY",
    description:
      "Built full-stack solutions using C#, VB.NET, ASP.NET, Angular, and JavaScript. Implemented XML/XSD integrations with ASP.NET Web Forms; optimized SQL Server/Oracle databases. Designed API logic to cache third-party data locally, improving performance and reducing redundant calls.",
    icon: React.createElement(FaReact),
    date: "Nov 2018 - Nov 2022",
  },
  {
    title: ".NET Software Developer (Legacy Modernization) (Contract) - Ryan Specialties",
    location: "Rockhill, NY",
    description:
      "Migrated legacy VB.NET applications to C#/.NET 4, improving maintainability and execution speed. Automated bulk email and Weather API systems, reducing manual processes and errors.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Aug 2023",
  },
  {
    title: "Cloud Software Engineer (Contract) - Constellation Software Engineering",
    location: "Remote",
    description:
      "Built secure cloud applications for federal Navy projects using Azure, ASP.NET, .NET Core, and Python/Django. Implemented OAuth authentication systems; optimized SQL Server/PostgreSQL queries. Participated in Agile sprints, code reviews, and deployments.",
    icon: React.createElement(FaReact),
    date: "Sept 2023 - Aug 2024",
  },
  {
    title: "Applications Developer (Contract) - AppTech",
    location: "Norwalk, CT (Hybrid)",
    description:
      "Modernized Angular/.NET Framework apps to Angular 19 and .NET 8. Developed scalable APIs with ASP.NET Core, RxJS, and TypeScript; implemented DTO/entity mapping. Integrated CI/CD pipelines in Azure DevOps for automated testing and deployments.",
    icon: React.createElement(FaReact),
    date: "Apr 2024 - Jun 2025",
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
  "TypeScript Generics", // ✅ Added TypeScript Generics
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
  "Framer Motion",
  "C#",
  "C# Generics", // ✅ Added C# Generics
  ".NET 8",
  "ASP.NET Core",
  "RxJS",
  "Azure DevOps",
  "Angular",
  "Azure SQL",
] as const;
