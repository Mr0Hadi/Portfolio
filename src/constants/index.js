import {
  Software,
  FullStack,
  Architect,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  worldWise,
  mysql,
  python,
  intro,
  UserManagementSystem,
  toplearn,
  codeyad,
  udemy,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Application Specialist",
    icon: web,
  },
  {
    title: "Full-Stack Engineer",
    icon: FullStack,
  },
  {
    title: "Software Developer",
    icon: Software,
  },
  {
    title: "Technical Architect",
    icon: Architect,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "MySQL",
    icon: mysql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Python",
    company_name: "Toplearn",
    icon: toplearn,
    iconBg: "#383E56",
    date: "March 2023 - June 2023",
    points: [
      "Python Basics: Understanding fundamental concepts and setting up Python.",
      "Variables and Data Types: Working with numeric, string, and list data types.",
      "Operators: Utilizing various operators.",
      "Loops: Implementing `for` and `while` loops.",
      "Functions: Defining and using functions.",
      "Object-Oriented Programming (OOP): Introduction to classes and objects.",
      "Practical Project: Building a strong password generator.",
      "This course contains 110 videos with a total time of 29 hours and 22 minutes.",
    ],
  },
  {
    title: "Html & Css",
    company_name: "Toplearn",
    icon: toplearn,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Getting to know the basics of HTML and important tags for structuring web pages.",
      "Learning CSS principles for styling HTML elements.",
      "Understanding the concept of Box Model and managing spaces, margins and content.",
      "Responsive design using media queries.Familiarity with layout techniques such as Flexbox and Grid",
      "Working with fonts, icons and typography on the web",
      "Create simple animations and transitions with CSS",
      "This course includes 110 videos with a total time of 19 hours and 56 minutes",
    ],
  },
  {
    title: "JavaScript",
    company_name: "Codeyad",
    icon: codeyad,
    iconBg: "#383E56",
    date: "September 2023 - April 2024",
    points: [
      " JavaScript Basics: Understanding syntax and core concepts.",
      "DOM Manipulation: Interacting with and modifying HTML elements.",
      "Functions and Events: Defining functions and handling user events.",
      "Loops and Conditionals: Controlling the flow of programs.",
      "Arrays and Objects: Managing and organizing data.",
      "Advanced Concepts: Promises, Async/Await, and other modern features.",
      "Practical Projects: Strengthening skills with hands-on programming.",
    ],
  },
  {
    title: "React JS",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      " React: Core and advanced concepts, including components and state management.",
      " Hooks: Using essential React hooks like `useState`, `useEffect`, and custom hooks.",
      " Next.js: Server-side rendering (SSR) and project structuring.",
      " Redux: Managing complex application state.",
      " Tailwind CSS: Designing fast, responsive user interfaces.",
      " Supabase: Implementing databases and authentication in React applications.",
      " Practical Projects: Building over 10 real-world applications with these tools.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "WorldWise",
    description:
      "A world map that tracks your footsteps into every city you can think of. Creating a Single Page Application With React.js as Udemy Courses Tech Stack: useEffect, data fetching, custom hooks React Router, context API, memo, useMemo, useCallback",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Context API",
        color: "green-text-gradient",
      },
      {
        name: "React Router",
        color: "pink-text-gradient",
      },
    ],
    image: worldWise,
    source_code_link: "https://github.com/Mr0Hadi/worldwise",
  },
  {
    name: "User Management System",
    description:
      "A full-stack user management app built with React, Express.js, MySQL, Tailwind CSS and DaisyUI, CRUD operations. Designed with a RESTful architecture for scalability and maintainability.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL,",
        color: "green-text-gradient",
      },
      {
        name: "DaisyUI",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "orange-text-gradient",
      },
    ],
    image: UserManagementSystem,
    source_code_link: "https://github.com/Mr0Hadi/User-Management-System",
  },
  {
    name: "Storefront",
    description:
      "A practice project for designing the homepage of a studio equipment storefront using Tailwind CSS.Features: Modern and responsive design, Built with Tailwind CSS for fast and efficient styling, Simple, minimalistic homepage layout.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: intro,
    source_code_link: "https://github.com/Mr0Hadi/Tailwind-Project",
  },
];

export { services, technologies, experiences, projects };
