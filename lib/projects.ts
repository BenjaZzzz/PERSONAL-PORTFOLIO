import {
  FaJava,
  FaReact,
  FaGitAlt,
} from "react-icons/fa6";

import { GrMysql } from "react-icons/gr";

import {
  SiSpringboot,
  SiThymeleaf,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiFastapi,
  SiPython,
  SiDotnet,
  SiMongodb,
  SiBootstrap,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

import { IconType } from "react-icons";

export type Technology = {
  name: string;
  icon: IconType;
  color: string;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: Technology[];
  github: string;
};

export const projects: Project[] = [
  {
    title: "Sistema de Inventario",
    slug: "inventory-system",

    description:
      "Aplicación para gestionar productos, stock y movimientos de inventario con autenticación y panel administrativo.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=Inventario",

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
        name: "MySQL",
        icon: GrMysql,
        color: "#4479a1",
      },
    ],

    github: "#",
  },

  {
    title: "Sistema de Contactos",
    slug: "contact-app",

    description:
      "Gestión de contactos con interfaz web moderna, autenticación y backend desarrollado con Spring Boot.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=Contactos",

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
        name: "Thymeleaf",
        icon: SiThymeleaf,
        color: "#005f0f",
      },
    ],

    github: "#",
  },

  {
    title: "Sistema Óptico",
    slug: "optical-system",

    description:
      "Sistema para gestión de ventas, clientes, inventario y reservas para ópticas.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=Optico",

    technologies: [
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6db33f",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61dafb",
      },
      {
        name: "MySQL",
        icon: GrMysql,
        color: "#4479a1",
      },
    ],

    github: "#",
  },

  {
    title: "ERP de Facturación",
    slug: "erp-system",

    description:
      "Sistema ERP con módulos de facturación, clientes, productos y reportes administrativos.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=ERP",

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
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
    ],

    github: "#",
  },

  {
    title: "Task Management App",
    slug: "task-management-app",

    description:
      "Aplicación para gestión de tareas y productividad con autenticación y panel dinámico.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=Tasks",

    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "#61dafb",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178c6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38bdf8",
      },
    ],

    github: "#",
  },

  {
    title: "API de Productos",
    slug: "products-api",

    description:
      "REST API para administración de productos, categorías y autenticación JWT.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=REST+API",

    technologies: [
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6db33f",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#f89820",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
    ],

    github: "#",
  },

  {
    title: "Portfolio Developer",
    slug: "portfolio",

    description:
      "Portafolio profesional moderno desarrollado con Next.js y animaciones avanzadas.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=Portfolio",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#ffffff",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#61dafb",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38bdf8",
      },
    ],

    github: "#",
  },

  {
    title: "Sistema de Empleados",
    slug: "employee-system",

    description:
      "Aplicación para registrar empleados, departamentos y gestión administrativa.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=Employees",

    technologies: [
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
        name: "MySQL",
        icon: GrMysql,
        color: "#4479a1",
      },
    ],

    github: "#",
  },

  {
    title: "Blog Platform",
    slug: "blog-platform",

    description:
      "Plataforma de blogs con autenticación, panel de administración y editor de contenido.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=Blog",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#ffffff",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47a248",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178c6",
      },
    ],

    github: "#",
  },

  {
    title: "FastAPI Backend",
    slug: "fastapi-backend",

    description:
      "Backend API desarrollada con FastAPI para aplicaciones modernas y microservicios.",

    image:
      "https://placehold.co/500x300/1a2236/818cf8?text=FastAPI",

    technologies: [
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
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#336791",
      },
    ],

    github: "#",
  },
];