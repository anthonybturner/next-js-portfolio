import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Update these imports to match your actual project images
import modernStackImg from "@/public/modern-stack-solutions.png";
import portfolioImg from "@/public/portfolio-website.png";
import marvelRivalsAppImg from "@/public/marvel-rivals-site.png";
import reactMovieDatabaseAppImg from "@/public/react-movie-database.png";

import corpcommentImg from "@/public/navy-project-main.jpg";

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
    image: undefined,
    date: "2011",
  },
  {
    title: "Graduated UCCC - Ulster County Community College",
    location: "Stone Ridge, NY",
    description:
      "I graduated after 2 years of studying computer science. I immediately enrolled into SUNY New Paltz for my Bachelors.",
    icon: React.createElement(LuGraduationCap),
    image: undefined,
    date: "2014",
  },
  {
    title: ".NET Full-Stack Developer Intern - Precision Care Software",
    location: "New Paltz, NY",
    description:
      "Developed web/mobile apps with C#, VB.NET, ASP.NET, AngularJS, and RESTful APIs. Optimized Oracle/SQL queries for efficient SPA data retrieval.",
    icon: React.createElement(CgWorkAlt),
    image: undefined,
    date: "Apr 2015 - Apr 2016",
  },
  {
    title: "iOS/Android Mobile Developer (Contract) - Digital Catnip",
    location: "Beacon, NY",
    description:
      "Developed cross-platform fitness apps using Swift (iOS) and Java (Android). Integrated RESTful APIs for data tracking, synchronization, and analysis. Managed mobile databases and designed responsive, user-friendly UI/UX.",
    icon: React.createElement(CgWorkAlt),
    image: corpcommentImg,
    date: "Jan 2016 - Jun 2016",
  },
  {
    title: "WordPress / PHP Developer - Rev Design",
    location: "Patterson, NY",
    description:
      "Built dynamic WordPress sites with PHP and boilerplate templates; optimized MySQL databases. Designed responsive UI/UX using HTML5, CSS3, Bootstrap, and jQuery.",
    icon: React.createElement(CgWorkAlt),
    image: corpcommentImg,
    date: "Dec 2017 - Nov 2018",
  },
  {
    title: "Graduated State University of New Paltz",
    location: "New Paltz, NY",
    description:
      "I graduated after 4 years of studying computer science. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    image: corpcommentImg,
    date: "2018",
  },
  {
    title: ".NET Full-Stack Developer - InfoEd Global",
    location: "Albany, NY",
    description:
      "Built full-stack solutions using C#, VB.NET, ASP.NET, Angular, and JavaScript. Implemented XML/XSD integrations with ASP.NET Web Forms; optimized SQL Server/Oracle databases. Designed API logic to cache third-party data locally, improving performance and reducing redundant calls.",
    icon: React.createElement(FaReact),
    image: corpcommentImg,
    date: "Nov 2018 - Nov 2022",
  },
  {
    title: ".NET Software Developer (Legacy Modernization) (Contract) - Ryan Specialties",
    location: "Rockhill, NY",
    description:
      "Migrated legacy VB.NET applications to C#/.NET 4, improving maintainability and execution speed. Automated bulk email and Weather API systems, reducing manual processes and errors.",
    icon: React.createElement(CgWorkAlt),
    image: corpcommentImg,
    date: "Jan 2023 - Aug 2023",
  },
  {
    title: "Cloud Software Engineer (Contract) - Constellation Software Engineering",
    location: "Remote",
    description:
      "Built secure cloud applications for federal Navy projects using Azure, ASP.NET, .NET Core, and Python/Django. Implemented OAuth authentication systems; optimized SQL Server/PostgreSQL queries. Participated in Agile sprints, code reviews, and deployments.",
    icon: React.createElement(FaReact),
    image: corpcommentImg,
    date: "Sept 2023 - Aug 2024",
  },
  {
    title: "Applications Developer (Contract) - AppTech",
    location: "Norwalk, CT (Hybrid)",
    description:
      "Modernized Angular/.NET Framework apps to Angular 19 and .NET 8. Developed scalable APIs with ASP.NET Core, RxJS, and TypeScript; implemented DTO/entity mapping. Integrated CI/CD pipelines in Azure DevOps for automated testing and deployments.",
    icon: React.createElement(FaReact),
    image: corpcommentImg,
    date: "Apr 2025 - Jun 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, interactive navigation with active section tracking, contact form integration, and optimized performance. Showcases professional experience, skills, and projects with a clean, accessible design.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React", "Vercel"],
    imageUrl: portfolioImg,
  },
  {
    title: "Modern Stack Solutions",
    description:
      "A comprehensive business website showcasing modern web development services and solutions. Built with Angular and TypeScript for dynamic functionality and responsive design. Features service portfolios, client testimonials, project showcases, and contact integration. Demonstrates full-stack development capabilities with modern Angular architecture and component-based design.",
    tags: ["Angular", "TypeScript", "CSS3", "Business Website", "Professional Services", "Component Architecture"],
    imageUrl: modernStackImg,
  },
  {
    title: "React Movie Database",
    description:
      "A comprehensive movie discovery application built with React and integrated with The Movie Database (TMDb) API. Features include movie search, detailed information display, ratings, trailers, and user favorites. Implements responsive design, dynamic routing, and state management for seamless user experience.",
    tags: ["React", "JavaScript", "TMDb API", "CSS3", "REST APIs", "Responsive Design"],
    imageUrl: reactMovieDatabaseAppImg,
  },
  {
    title: "Marvel Rivals Stats Fan Site",
    description:
      "An interactive fan site dedicated to Marvel Rivals game statistics and character information. Built with Angular and TypeScript to provide real-time stats, character comparisons, and game insights. Features dynamic data visualization, Angular services for data management, and responsive design for gaming enthusiasts.",
    tags: ["Angular", "TypeScript", "CSS3", "API Integration", "Data Visualization", "Gaming", "Angular Services"],
    imageUrl: marvelRivalsAppImg,
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
