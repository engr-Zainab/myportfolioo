import {
  mobile,
  backend,
  creator,
  web,
  travel,
  astrology,
  fiverr,
  nft,
  palette,
  quiz,
  pof,
  movieland,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React JS",
    icon: mobile,
  },
  {
    title: "Next Js",
    icon: backend,
  },
  {
    title: "Typescript",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#fff",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, JavaScript and Webflow.",
      "Providing high-quality services to clients, delivering custom solutions that meet their specific needs.",
      "Delivered high-quality, pixel-perfect designs and ensured consistent client feedback and repeat business.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "POF IT",
    icon: pof,
    iconBg: "#fff",
    date: "July 2023 - Sept 2023",
    points: [
      "Developed and integrated real-time animated web pages using React.",
      "Leveraged Tailwind CSS to create visually dynamic web experiences, improving site load times and user engagement. ",
      "Built CRUD applications and interactive elements, enhancing user experience and functionality.",
      "Worked with AWS to deploy and manage cloud infrastructure and gained foundational knowledge of Docker to use it for creating, deploying, and running applications within containers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I wasn't sure a website could look this good, but Zainab made it happen effortlessly.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Zainab was absolutely fantastic. Perfect communication, super professional and efficient. Hope to work again in the future.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Thanks to Zainab's optimization, our website traffic grew by 30%. We couldn't be more grateful!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Travel Guide Website",
    description:
      "A visually appealing platform that showcases various travel destinations and experiences. It provides users with information on different locations, offering inspiration for future trips, built with Next.js, React, and Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/engr-Zainab/next-travelApp",
  },
  {
    name: "Movie Land",
    description:
      "A movie search platform built with React, allowing users to browse and search for movie details. A notable feature is its integration with the RapidAPI, which provides real-time movie data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: movieland,
    source_code_link: "https://github.com/engr-Zainab/movieland-react",
  },
  {
    name: "Design Portfolio",
    description:
      "The website is a design portfolio built in Webflow, showcasing creative projects and UI/UX designs. It highlights the use of Figma for design practices, featuring a clean, minimalistic layout to present work visually.",
    tags: [
      {
        name: "webflow",
        color: "blue-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://figma-practice-site.webflow.io/",
  },
  {
    name: "Color Pallette",
    description:
      "A color palette generator, allowing users to create, explore, and copy color schemes. It provides a simple interface for selecting and experimenting with different color combinations for design purposes.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: palette,
    source_code_link: "https://github.com/engr-Zainab/colorPalette",
  },
  {
    name: "Astrology Blog",
    description:
      "The site features interactive elements for daily horoscopes and personalized zodiac insights. With a clean design and responsive layout, its both visually appealing and user-friendly across all devices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: astrology,
    source_code_link: "https://github.com/engr-Zainab/astrologyBlog",
  },

  {
    name: "Quiz Application",
    description:
      "The app features questions from various categories, offering users a dynamic and interactive experience. The app includes real-time feedback and tracks scores, showcasing seamless functionality.",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/engr-Zainab/quizApplication",
  },
];

export { services, experiences, testimonials, projects };
