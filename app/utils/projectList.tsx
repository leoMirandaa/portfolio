import {
  MagentaKitchenSVG,
  ShopApiSVG,
  Sk8terSVG,
} from "../components/ui/icons";
import { projectType } from "../types";

export const ProjectList: projectType[] = [
  {
    bgColor: "#2E3081",
    icon: <Sk8terSVG />,
    title: "Sk8ter",
    subtitle: "E-commerce",
    technologies: [
      "Javascript",
      "Typescript",
      "Sass",
      "React",
      "Prime react",
      "React hook form",
    ],
    description:
      "This system was made as final project for FullStack degree, created to apply all the knowledge obtained from frontend technologies to backend technologies, the system has authentication, dashboard, darkmode and a friendly user interface.",
    imgUrl: "/videos/skate.webp",
    videoUrl: "/videos/sk8.mp4",
    githubUrl: "https://github.com/leo-miranda-dev/Clothing-store.git",
    websiteUrl: "https://www.google.com/",
  },
  {
    bgColor: "#560018",
    icon: <MagentaKitchenSVG />,
    title: "Magenta Kitchen",
    subtitle: "Restaurant Menu",
    technologies: ["React", "Next js", "Css modules", "Antd"],
    description:
      "Restaurant menu created with the purpose to have an elegant digital menu, with the capability to use it with QR code and show the elemental restaurant information and all the dishes availables.",
    imgUrl: "/videos/magenta.webp",
    videoUrl: "/videos/magenta.mp4",
    githubUrl: "https://github.com/leo-miranda-dev/restaurant-menu.git",
    websiteUrl: "https://www.google.com/",
  },
  {
    bgColor: "#2D650F",
    icon: <ShopApiSVG />,
    title: "Shop API",
    subtitle: "E-commerse back-end",
    technologies: [
      "Javascript",
      "Typescript",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    description:
      "Backed e-commerce project that allows to manage users, categories, coupons and products with the endpoints ready to play with.",
    imgUrl:
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1698447993/portfolio/shop-api_b2pb56.jpg",
    videoUrl: "",
    githubUrl: "https://github.com/leo-miranda-dev/shop-API.git",
    websiteUrl: "https://www.google.com/",
  },
];
