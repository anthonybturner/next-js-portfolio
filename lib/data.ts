import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Project images - using Next.js public folder pattern
import marvelRivalsAppImg from "@/public/images/marvel-rivals-site.png";
import modernStackImg from "@/public/images/modern-stack-solutions.png";
import portfolioImg from "@/public/images/portfolio-website.png";
import reactMovieDatabaseAppImg from "@/public/images/react-movie-database.png";

import corpcommentImg from "@/public/images/navy-project-main.jpg";

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
    title: "Applications Developer (Contract) - AppTech",
    location: "Norwalk, CT (Hybrid)",
    description:
      "Modernizing legacy Angular applications to Angular 19 and working with .NET Framework systems. Working with existing APIs using ASP.NET Core, RxJS, and TypeScript; managing and implementing efficient DTO/entity mapping. Contributing to CI/CD pipeline integration in Azure DevOps for automated testing and deployments. Participating in daily standups in an agile environment.",
    icon: React.createElement(FaReact),
    image: corpcommentImg,
    date: "Apr 2025 - Jun 2025",
  },
  {
    title: "Cloud Software Engineer - Constellation Software Engineering",
    location: "Remote",
    description:
      "Migrated, managed, and built secure cloud applications using Python/Django for federal Navy projects. Managed reporting systems with .NET Core and SQL Server, handling data management and report generation. Worked on OAuth authentication systems. Participated in Agile development with code reviews and automated deployments.",
    icon: React.createElement(FaReact),
    image: corpcommentImg,
    date: "Sept 2023 - Aug 2024",
  },
  {
    title: ".NET Software Developer - Ryan Specialties",
    location: "Rockhill, NY",
    description:
      "Worked on legacy system modernization, migrating VB.NET applications to C#/.NET 4, improving maintainability and execution speed by 60%. Created bulk email applications for automating email processes and modernized a Weather API application from legacy VB code, reducing manual processes and operational errors.",
    icon: React.createElement(CgWorkAlt),
    image: corpcommentImg,
    date: "Jan 2023 - Aug 2023",
  },
  {
    title: ".NET Full-Stack Developer - InfoEd Global",
    location: "Albany, NY",
    description:
      "Developed and maintained enterprise solutions for government and educational sectors using full-stack .NET technologies (C#, ASP.NET MVC, WebForms, legacy ASP), JavaScript, and jQuery. Enhanced user interfaces with Telerik component libraries and implemented robust data processing through XML/XSD integrations and REST API development.",
    icon: React.createElement(FaReact),
    image: corpcommentImg,
    date: "Nov 2018 - Nov 2022",
  },
  {
    title: "Bachelor's Degree in Computer Science",
    location: "SUNY New Paltz, NY",
    description:
      "Graduated with comprehensive foundation in algorithms, data structures, software engineering, database design, web applications, and design.",
    icon: React.createElement(LuGraduationCap),
    image: corpcommentImg,
    date: "2018",
  },
  {
    title: "Associate's Degree in Computer Science",
    location: "Ulster County Community College, NY",
    description:
      "Earned foundational knowledge in programming, computer systems, software development principles, web applications, and design.",
    icon: React.createElement(LuGraduationCap),
    image: corpcommentImg,
    date: "2014",
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
  "GraphQL",
  "Express",
  "SQL Server",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "C#",
  "C# Generics", // ✅ Added C# Generics
  ".NET 8",
  "ASP.NET Core",
  "Legacy ASP.NET",
  "OAuth2",
  "JWT",
  "PHP",
  "WordPress",
  "RxJS",
  "Azure DevOps",
  "Angular",
  "Azure SQL",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
] as const;
