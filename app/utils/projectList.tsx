import {
  MagentaKitchenSVG,
  ShopApiSVG,
  Sk8terSVG,
} from "../components/ui/icons";
import { projectType } from "../types";

export const ProjectList: projectType[] = [
  {
    key: "1",
    bgColor: "#2E3081",
    icon: <Sk8terSVG />,
    title: "Sk8ter",
    subtitle: "E-commerce",
    description:
      "This system was developed with React, validated with React Hook Forms, for the visual part the Prime React library was used, the system is connected to a non-relational database to manage the dashboard and the entire web system.",
    text1: "The coolest sk8 catalog",
    text2: "Website + Dashboard",
    text3: "Mobile first design",
    img1: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1698446583/portfolio/Laptop-1-1440x900_zkmrrv.png",
    img2: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1698447333/portfolio/iPhone-6-7-8-376x667_myovpz.png",
    technologies: [
      "Javascript",
      "Sass",
      "React",
      "Prime react",
      "React hook form",
    ],
    githubLink: "https://github.com/leo-miranda-dev/Clothing-store.git",
    websiteLink: "https://www.google.com/",
  },
  {
    key: "2",
    bgColor: "#560018",
    icon: <MagentaKitchenSVG />,
    title: "Magenta Kitchen",
    subtitle: "Restaurant Menu",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project",
    text1: "Clean and functional restaurant menu",
    text2: "Just scan the QR",
    text3: "Mobile first design",
    img1: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1698447615/portfolio/Laptop-1-1440x900_2_u4k0rh.png",
    img2: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1698447634/portfolio/iPhone-6-7-8-376x667_2_nndduz.png",
    technologies: ["React", "Next js", "Css modules", "Antd"],
    githubLink: "https://github.com/leo-miranda-dev/restaurant-menu.git",
    websiteLink: "https://www.google.com/",
  },
  {
    key: "3",
    bgColor: "#2D650F",
    icon: <ShopApiSVG />,
    title: "Shop API",
    subtitle: "E-commerse back-end",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project Lorem ipsum sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project",
    text1: "Manage your content without difficulties",
    text2: "NOSQL",
    text3: "JWT",
    img1: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1698447993/portfolio/shop-api_b2pb56.jpg",
    img2: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1698448450/portfolio/api-data_hfcreh.jpg",
    technologies: [
      "Javascript",
      "Typescript",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    githubLink: "https://github.com/leo-miranda-dev/shop-API.git",
    websiteLink: "https://www.google.com/",
  },
];
