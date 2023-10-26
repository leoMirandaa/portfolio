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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis exercitationem ducimus ratione aut temporibus, est dolor, explicabo nemo hic autem eveniet at libero nisi. Dolorum sunt quas deserunt necessitatibus iusto beatae, nulla, autem a officia deleniti, nostrum molestias accusantium. Similique.",
    text1: "title 1",
    text2: "title 2",
    text3: "title 3",
    img1: "img 1",
    img2: "img2",
    technologies: ["test", "test2", "test3"],
    githubLink: "www.github.com",
    websiteLink: "www.youtube.com",
  },
  {
    key: "2",
    bgColor: "#560018",
    icon: <MagentaKitchenSVG />,
    title: "Magenta Kitchen",
    subtitle: "Restaurant Menu",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project",
    text1: "title 1",
    text2: "title 2",
    text3: "title 3",
    img1: "img 1",
    img2: "img2",
    technologies: ["test", "test2", "test3"],
    githubLink: "www.github.com",
    websiteLink: "www.youtube.com",
  },
  {
    key: "3",
    bgColor: "#2D650F",
    icon: <ShopApiSVG />,
    title: "Shop API",
    subtitle: "E-commerse back-end",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, tenetur.project",
    text1: "title 1",
    text2: "title 2",
    text3: "title 3",
    img1: "img 1",
    img2: "img2",
    technologies: ["test", "test2", "test3"],
    githubLink: "www.github.com",
    websiteLink: "www.youtube.com",
  },
];
