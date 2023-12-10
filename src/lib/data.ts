import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/prof-pic.png";
import rmtdevImg from "../../public/prof-pic.png";
import wordanalyticsImg from "../../public/prof-pic.png";
import c from "../../public/icons/c.svg";
import css3 from "../../public/icons/css-3.svg";
import django from "../../public/icons/django-icon.svg";
import figma from "../../public/icons/figma.svg";
import firebase from "../../public/icons/firebase.svg";
import git from "../../public/icons/git-icon.svg";
import html5 from "../../public/icons/html-5.svg";
import java from "../../public/icons/java.svg";
import javascript from "../../public/icons/javascript.svg";
import matlab from "../../public/icons/matlab.svg";
import nextjs from "../../public/icons/nextjs-icon.svg";
import nodejs from "../../public/icons/nodejs.svg";
import pandas from "../../public/icons/pandas-icon.svg";
import php from "../../public/icons/php.svg";
import postgresql from "../../public/icons/postgresql.svg";
import prisma from "../../public/icons/prisma.svg";
import python from "../../public/icons/python.svg";
import react from "../../public/icons/react.svg";
import scikitlearn from "../../public/icons/scikit-learn.svg";
import swift from "../../public/icons/swift.svg";
import tailwindcss from "../../public/icons/tailwindcss-icon.svg";
import tensorflow from "../../public/icons/tensorflow.svg";
import typescript from "../../public/icons/typescript-icon.svg";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  { name: "C", image: c },
  { name: "Java", image: java },
  { name: "Python", image: python },
  { name: "Swift", image: swift },
  { name: "PHP", image: php },
  { name: "HTML", image: html5 },
  { name: "CSS", image: css3 },
  { name: "JavaScript", image: javascript },
  { name: "TypeScript", image: typescript },
  { name: "React", image: react },
  { name: "Next.js", image: nextjs },
  { name: "Node.js", image: nodejs},
  { name: "Tailwind", image: tailwindcss },
  { name: "Prisma", image: prisma },
  { name: "PostgreSQL", image: postgresql },
  { name: "Django", image: django },
  { name: "Firebase", image: firebase },
  { name: "MatLab", image: matlab },
  { name: "SciKit-Learn", image: scikitlearn },
  { name: "Pandas", image: pandas },
  { name: "TensorFlow", image: tensorflow },
  { name: "Git", image: git },
  { name: "Figma", image: figma },
] as const;
