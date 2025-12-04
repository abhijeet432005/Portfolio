// index.js
export const servicesData = [
  {
    title: "Custom Frontend Development",
    description:
      "I build clean, modern and responsive websites using HTML, CSS, SCSS, JavaScript and React. Every page is structured for clarity, speed and smooth user flow.",
    items: [
      {
        title: "React Development",
        description: "(Reusable components, Props, State, Routing)",
      },
      {
        title: "Clean UI Implementation",
        description: "(Modern layouts with Tailwind & SCSS)",
      },
      {
        title: "API Consumption",
        description: "(Fetch, Axios, JSON data handling)",
      },
    ],
  },
  {
    title: "Website Responsiveness",
    description:
      "I convert designs into fully responsive layouts that look and work perfectly across mobile, tablet and large screens. No broken UI, no scroll issues — just smooth experience.",
    items: [
      {
        title: "Mobile-first Layouts",
        description: "(Optimized for every screen size)",
      },
      {
        title: "Cross-Browser Support",
        description: "(Chrome, Safari, Firefox compatibility)",
      },
      {
        title: "SCSS Architecture",
        description: "(Clean, structured and scalable CSS)",
      },
    ],
  },
  {
    title: "Animations & Interactions",
    description:
      "I use GSAP to create smooth, premium animations that make websites feel more alive and engaging — from scroll effects to micro-interactions.",
    items: [
      {
        title: "GSAP Effects",
        description: "(ScrollTrigger, Timelines, Parallax)",
      },
      {
        title: "Interactive UI",
        description: "(Hover effects, dynamic components)",
      },
      {
        title: "Smooth Transitions",
        description: "(Page transitions, reveal animations)",
      },
    ],
  },
  {
    title: "Performance & Optimization",
    description:
      "A slow UI kills user experience. I optimize code, reduce layout shifts and improve load speed for smooth performance and better engagement.",
    items: [
      {
        title: "Code Optimization",
        description: "(Refactoring, reducing DOM complexity)",
      },
      {
        title: "Asset Optimization",
        description: "(Image compression, lazy loading)",
      },
      {
        title: "SEO-Friendly Markup",
        description: "(Semantic HTML, proper structure)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Browser-Based Operating System",
    description:
      "A fully interactive desktop-style OS built entirely with Vanilla JavaScript. Features include a camera app, gallery, music player, weather app, draggable windows, and multi-app environment built using pure DOM manipulation.",
    href: "https://apna-os.vercel.app/",
    image: "/assets/projects/os-project.png",
    bgImage: "/assets/background/blanket.jpg",
    frameworks: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "SCSS" },
      { id: 3, name: "HTML" },
      { id: 4, name: "DOM APIs" },
    ],
  },

  {
    id: 2,
    name: "K72 Agency Website",
    description:
      "A modern, animation-heavy portfolio built with React and GSAP. Includes smooth section transitions, parallax layers, interactive UI components, and mobile-first responsive design.",
    href: "https://k72-web-site.vercel.app/",
    image: "/assets/projects/k72.png",
    bgImage: "/assets/background/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "SCSS" },
    ],
  },

  {
    id: 3,
    name: "YouTube Clone",
    description:
      "A high-performance YouTube clone using the YouTube Data API with live chat, category filters, debounced search, infinite scrolling, and clean state management for seamless UX.",
    href: "https://youtube-web-site.vercel.app/",
    image: "/assets/projects/youtube.png",
    bgImage: "/assets/background/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Redux" },
      { id: 3, name: "YouTube API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },

  {
    id: 4,
    name: "E-Commerce Web App",
    description:
      "A fully responsive e-commerce platform built with React featuring infinite scrolling product feed, add-to-cart system, category filtering, detailed product pages, client-side routing, and optimized performance for a smooth shopping experience.",
    href: "https://aapki-dukkan.vercel.app/",
    image: "/assets/projects/E-comerce.png",
    bgImage: "/assets/background/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "React Router" },
      { id: 3, name: "Redux" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhijeet-kumar00/" },
  { name: "GitHub", href: "https://github.com/abhijeet432005" },
];