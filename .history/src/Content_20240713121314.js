// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import github from "./assets/images/Skills/github.png";
import ps from "./assets/images/Skills/ps.png";
import ai from "./assets/images/Skills/ai.png";
import pr from "./assets/images/Skills/pr.png";
import an from "./assets/images/Skills/an.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import laravel from "./assets/images/Skills/laravel.png";
import python from "./assets/images/Skills/python.png";
import godot from "./assets/images/Skills/godot.png";
import cas from "./assets/images/Skills/cas.png";
import blender from "./assets/images/Skills/blender.png";
import fl from "./assets/images/Skills/fl.png";
import au from "./assets/images/Skills/au.png";
import zotero from "./assets/images/Skills/zotero.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";
import services_logo5 from "./assets/images/Services/logo5.png";
import services_logo6 from "./assets/images/Services/logo6.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    titles: {
      title1: 'Game Developer',
      title2: 'Graphic Designer',
      title3: 'UI/UX Designer',
      title4: 'Music Producer',
    },
    firstName: "DHAZREEL",
    LastName: "AIMAN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Godot",
        para: "Game Engine",
        desc: "I used it for developing Games either for .",
        logo: godot,
        category: ["Game Development"],
      },
      {
        name: "Blender",
        para: "3D Modeling Software",
        desc: "I used is for creating a 3D Model for rendering, animation and game assets.",
        logo: blender,
        category: ["Game Development", "3D Modelling", "Graphic Design"],
      },
      {
        name: "Adobe Photoshop",
        para: "Raster Graphics Editor",
        desc: "Has some practical exercise during a multimedia courses. Mostly used for image editing for various purpose. Used together with Adobe Allustrator for T shirt design creation",
        logo: ps,
        category: ["Game Development", "3D Modelling", "Graphic Design"],
      },
      {
        name: "Adobe Illustrator",
        para: "Vector Graphics Editor",
        desc: "Plenty of work created using this software during my studies. Mostly used for designing logos, poster and icons",
        logo: ai,
        category: ["Graphic Design", "UI/UX Design"],
      },
      {
        name: "Adobe Premier Pro",
        para: "Video Editing Software",
        desc: "I used it alot for some projects on editing a presentation and promotional videos",
        logo: pr,
        category: ["Video Editing"],
      },
      {
        name: "Adobe Animate",
        para: "Computer Animation Program",
        desc: "Used for making simple GIF animation and some build a flash game",
        logo: an,
        category: ["Animation", "Graphic Design"],
      },
      {
        name: "Adobe Audition",
        para: "Digital Audio Workstation",
        desc: "I used for editing audios.",
        logo: au,
        category: ["Animation", "Video Editing"],
      },
      {
        name: "GitHub",
        para: "Developer Platform",
        desc: "I offen used for sharing project, collaborate projects with other developer and contribute other project",
        logo: github,
        category: ["Coding", "Web Development"],
      },
      {
        name: "Figma",
        para: "Collaborative Web Application",
        desc: "I used for designing a prototype for website and apps is UI/UX",
        logo: figma,
        category: ["UI/UX Design", "Web Development"],
      },
      {
        name: "Laravel",
        para: "PHP-Based Web Framework",
        desc: "I used for building a website that needed a strong logic using php and connect it with SQL",
        logo: laravel,
        category: ["UI/UX Design", "Web Development", "Coding"],
      },
      {
        name: "Node js",
        para: "JavaScript runtime environment",
        desc: "Enviroment that offen used for run a website",
        logo: nodejs,
        category: ["Web Development"],
      },
      {
        name: "React js",
        para: "JavaScript library",
        desc: "My others description",
        logo: reactjs,
        category: ["Coding", "Web Development"],
      },
      {
        name: "Python",
        para: "High-Level Programming Language",
        desc: "The most frequenly used programming languange used by me",
        logo: python,
        category: ["Game Development", "Coding"],
      },
      {
        name: "Clip Studio Paint",
        para: "Art Studio Software",
        desc: "Offen used for cartoon illustration, comics and some graphic design sketches",
        logo: cas,
        category: ["Misc"],
      },
      {
        name: "FL Studio",
        para: "Digital Audio Workstation",
        desc: "I used it for producing music together with extra plugins like Serum and Vocaloid",
        logo: fl,
        category: ["Music Production"],
      },
      {
        name: "Zotero",
        para: "Reference Management Software",
        desc: "I used it to make references more organize for my report writting",
        logo: zotero,
        category: ["Misc"],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "3D Modeling",
        para: "Modeling any model based on my expertise and experiences, will provide best service",
        logo: services_logo4,
      },
      {
        title: "Game Development",
        para: "Offering service such as designing a game mechanics, gameplays and levels. Some other related service can be offered such as music production and assets design.",
        logo: services_logo5,
      },
      {
        title: "Music Production",
        para: "Offering a electronic music production with sufficient assets and tools for advertisement or anything related",
        logo: services_logo6,
      },
      {
        title: "Web Development",
        para: "Offering a service on building a website that used Laravel, React js and Tailwind CSS",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Offering a service on designing the UI/UX, choosing color scheme and wireframe of a website using figma",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "Offering a service editing images.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
        description: "A modern gym website with a clean design.",
        link: "",
        images: [project1, project1, project1], // Array of images for the slider
      },
      {
        title: "Social Media Web",
        image: project2,
        description: "A social media platform for connecting with friends.",
        link: "https://socialmediaweb.com",
        images: [project2, project2, project2],
      },
      {
        title: "Creative Website",
        image: project3,
        description: "A creative portfolio website for showcasing work.",
        link: "https://creativewebsite.com",
        images: [project3, project3, project3],
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
