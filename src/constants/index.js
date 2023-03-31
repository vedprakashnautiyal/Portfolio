import {
  ai,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "Machine Learning",
    icon: ai,
  },
  {
    title: "Open Source",
    icon: backend,
  },
  {
    title: "Sharing",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student Expert",
    company_name: "Postman",
    icon: starbucks,
    iconBg: "#EE6C3E",
    date: "February 2023 - Present",
    points: [
      "Educating peers regarding the use and importance of API's",
      "Spreading awareness in the field of tech",
    ],
  },
  {
    title: "Mentee",
    company_name: "JGEC Season Of Code",
    icon: tesla,
    iconBg: "#ffffff",
    date: "Feb 2023 - Mar 2023",
    points: [
      "Collaborating with others contributors including designers, and other developers to create high-quality contributions.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Contributing to many open source projects and helping them scale their reach.",
    ],
  },
  {
    title: "Contributor",
    company_name: "Social Season Of Code",
    icon: shopify,
    iconBg: "#ffffff",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Collaborating with others contributors including designers, and other developers to create high-quality contributions.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Contributing to many open source projects and helping them scale their reach.",
    ],
  },
  {
    title: "Member",
    company_name: "Google Developer Student Club",
    icon: meta,
    iconBg: "#F4F5F6",
    date: "Sep 2021- Present",
    points: [
      "Helping students by making them aware of many opportunities provided by the club",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blog Page",
    description:
      "Here I try to share whatever I learn while learning to code and collaborating with others",
    tags: [
      {
        name: "collaborations",
        color: "blue-text-gradient",
      },
      {
        name: "writing",
        color: "green-text-gradient",
      },
      {
        name: "documentation",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://vedprakashnautiyal.hashnode.dev/",
  },
  {
    name: "Markdown Blog Editor",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/vedprakashnautiyal/MarkdownBlogEditor",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };