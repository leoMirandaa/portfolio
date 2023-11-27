import {
  MagentaKitchenSVG,
  ShopApiSVG,
  Sk8terSVG,
} from "../components/ui/icons";
import { projectType } from "../types";

export const ProjectList: projectType[] = [
  {
    icon: <MagentaKitchenSVG />,
    title: "Magenta Kitchen",
    subtitle: "Restaurant Menu",
    technologies: ["React", "Next js", "Css modules", "Antd"],
    description:
      "Restaurant menu created with the purpose to have an elegant digital menu, with the capability to use it with QR code and show the elemental restaurant information and all the dishes available.",
    imgUrl: "/videos/magenta.webp",
    videoUrl: "/videos/magenta.mp4",
    githubUrl: "https://github.com/leomirandaa/restaurant-menu.git",
    websiteUrl: "https://magentakitchen.vercel.app/",
  },
  {
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
      "Dynamic e-commerce web system selling skateboards in a friendly and intuitive interface. The system has authentication, a dashboard and also dark mode.",
    imgUrl: "/videos/skate.webp",
    videoUrl: "/videos/sk8.mp4",
    githubUrl: "https://github.com/leoMirandaa/sk8ter-shop",
    websiteUrl: "",
  },
  {
    icon: <ShopApiSVG />,
    title: "Shop API",
    subtitle: "E-commerse back-end",
    technologies: [
      "Javascript",
      "Typescript",
      "Express",
      "MongoDB",
      "Mongoose",
      "Swagger",
    ],
    description:
      "Backed e-commerce project that allows to manage users, categories, coupons and products with the endpoints ready to play with. And also you can check API documentation with swagger.",
    imgUrl:
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1698447993/portfolio/shop-api_b2pb56.jpg",
    videoUrl: "",
    githubUrl: "https://github.com/leomirandaa/shop-API.git",
    websiteUrl: "https://www.google.com/",
  },
];
