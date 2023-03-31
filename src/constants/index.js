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
      "Supervised Machine Learning ",
    name: "DeepLearning.ai",
    designation: "ML",
    company: "Coursera",
    image:"data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "Web Development Bootcamp",
    name: "Angela Yu",
    designation: "Web",
    company: "Udemy",
    image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACDCAMAAACZQ1hUAAAAolBMVEUcHR////+kNfB5eXkJCw4AAADZ2dkUFhihoqJERESoNvbPz88AGgCmNvMNGwCPMdBrKpoYHRgaHRwUHBAWHBSKMMmsN/t/LrigNOn4+Phubm8SHAxBIluUMtiGL8NKJGg1IEcoHzSxsbE3NziEhIRaWlvq6upRUVKXl5diYmLBwcFeJ4crHzlaJ4FEI2FkKI9PJHE6IVIuHz9xK6UhHikqKiu4CPalAAADeUlEQVR4nO3Z6XqqMBAG4IhEFANlUVyoG1oXuree+7+1E7pYAqGdIEjPeWZ+1ohv54MJCiFNl95uWoAGNKABDWi4gCF0/YYNA3Y7vGZugwaXXc8CKxitmNeQwbPvRpalaZqpOSRsxOD792NTey9z9mCXDaS84S0G7VRnBFLW4LG7UWBp6TItx7UvaPC9x1MMKcXsqUwgpQwue57lBUkg5pzYyoGUMHjsJRtDqhWmeiDqhtBzNGkTPhXjJ3tQq8G1F/IYhECWSoGoGTxG5mZRDKlWWK9MYWQpGWziAATvgdzb4J1MweDaTz/FkArEGj5DA4Eb7FXR1SD/K99DgJs62GA/mvImWNZVgc0cP4AuELCBzaQfZJlXy7DoUjEd0KiAG65kBn7uhQMvPL5KR8YlDGbwenz7FM9eDiWB1G/gs+jldOq7bJHeyS9k4DPZTZ9y4TE3w2s28FHIdw5hhceWmSFaq8EK5kvJTVM2kDoNxfcqvu2k7m3qM/ABeCw8Nr9CRqdA6jJYwfDl242ABzIOajUEs8WPX6p89nGzWYvBHDseYB/y+P6W7GQ1GJKrAbgfv99uVW+AxPBVPrvVgqoNc2eg9h2fB1KxwV2Fql8c3MEK9Bb4fVSZ75Kw9/wnvwWhAQ1oQMMvMFChilYZsGXlDDTqp6vg6Ma6k1610as1dFrpKjL0hFVdUCPQgAY0oAENaEADGtCABjSgAQ1oQAMa0PBPGvTpBQ09Q75qf0HDRn50PRZW7Sv+XS4Sjh5Lj2782QqrphUbxC5P1rIw6EZY1DrIEytr0Nvi4aVR62JgE+ihgQZjNxGPf5Pvc6ZXrW3FvxUTus18AMk2mh7EFa2ockOc+YSOIXaCZjoFPSUVDJnxk3TiQL9aoWeD4K9Lz9tzDCRz3SUV7yjVDUPXqTHNvwqMQsWQ/0f5mdnptm92h3acFxTO0nMMBsnm/X3FwDYoPUvKTqDvSz7FzjUQ2lcw7KFtUDMYPVnsZyah+lwvN4UKq2NAk1B+tkhvgAQKJyg/36QHSBz93Byv0kBor/MjoaurEEo85zVks0rIYQc/HUsaeCvWcfG02m4obKc6z8Bb0YukiklnQxSbUNaQKPRplDk7J/19D/iEuxJD8k6+Ze423SjmFUX76ZpSlQuyEsOH47PULoUKDdUUGtCABjT8coPedNE2aTde0V9NRkojiozH6QAAAABJRU5ErkJggg==",
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
