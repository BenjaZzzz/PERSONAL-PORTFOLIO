import { IconType } from "react-icons";

import { FaJava, FaReact, FaGitAlt, FaAws } from "react-icons/fa6";

import { FaCss3Alt, FaDocker, FaGithub } from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";

import {
  SiSpringboot,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiDotnet,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiPostman,
  SiPostgresql,
  SiFastapi,
  SiInsomnia,
  SiMongodb,
  SiAngular,
  SiIonic,
  SiFirebase,
  SiVercel,
  SiRender,
  SiRailway,
  SiGithubactions,
  SiLinux,
  SiSwagger,
} from "react-icons/si";

type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

type TechCategory = {
  title: string;
  technologies: Technology[];
};

export const techCategories: TechCategory[] = [
  {
    title: "Frontend",

    technologies: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#e34f26",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "#1572b6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#f7df1e",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178c6",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61dafb",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#00000",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38bdf8",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952b3",
      },
      {
        name: "Angular",
        icon: SiAngular,
        color: "#dd0031",
      },
    ],
  },

  {
    title: "Mobile",

    technologies: [
      {
        name: "Ionic",
        icon: SiIonic,
        color: "#3880ff",
      },
    ],
  },

  {
    title: "Backend",

    technologies: [
      {
        name: "Java",
        icon: FaJava,
        color: "#f89820",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6db33f",
      },
      {
        name: "C#",
        icon: TbBrandCSharp,
        color: "#68217a",
      },
      {
        name: ".NET",
        icon: SiDotnet,
        color: "#512bd4",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776ab",
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
        color: "#009688",
      },
    ],
  },

  {
    title: "Database",

    technologies: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479a1",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47a248",
      },
    ],
  },

  {
  title: "Cloud & DevOps",

  technologies: [
    {
      name: "AWS",
      icon: FaAws,
      color: "#ff9900",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "#2496ed",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#ffca28",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "#00000",
    },
    {
      name: "Railway",
      icon: SiRailway,
      color: "#00000",
    },
    {
      name: "Render",
      icon: SiRender,
      color: "#46e3b7",
    },
    {
      name: "GitHub Actions",
      icon: SiGithubactions,
      color: "#2088ff",
    },
    {
      name: "Linux",
      icon: SiLinux,
      color: "#000000",
    },
  ],
},

  {
    title: "Tools",

    technologies: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#f05032",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#00000",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#ff6c37",
      },
      {
        name: "Insomnia",
        icon: SiInsomnia,
        color: "#4000bf",
      },
      {
        name: "Swagger",
        icon: SiSwagger,
        color: "#85ea2d",
      },
    ],
  },
];
