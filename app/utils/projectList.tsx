import {
  AntdSVG,
  CSSSVG,
  ExpressSVG,
  JavascriptSVG,
  MagentaKitchenSVG,
  MongoDBSVG,
  MongooseSVG,
  PrimeReactSVG,
  ReactHookFormSVG,
  ReactSVG,
  SassSVG,
  ShadcnLandingSVG,
  ShadcnSVG,
  ShopApiSVG,
  Sk8terSVG,
  SwaggerSVG,
  TailwindSVG,
  TypescriptSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
  {
    icon: <ShadcnLandingSVG />,
    title: "Shadcn Landing page",
    subtitle: "Landing page template",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },

      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Shadcn",
        icon: (
          <ShadcnSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "Tailwind",
        icon: (
          <TailwindSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
    ],
    description:
      "Landing page  with essential sections to promote a particular product, service, event, or offer. It is fully responsive, customizable, has dark mode, meta tags and user-friendly interface.",
    imgUrl: "/videos/shadcn-landing-page.webp",
    videoUrl: "/videos/shadcn-landing-page.mp4",
    githubUrl: "https://github.com/leoMirandaa/shadcn-landing-page.git",
    websiteUrl: "https://shadcn-landing-page.vercel.app/",
  },
  {
    icon: <MagentaKitchenSVG />,
    title: "Magenta Kitchen",
    subtitle: "Restaurant Menu",
    technologies: [
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "Next js",
        icon: (
          <NextSVG
            color="#000"
            size={16}
          />
        ),
      },
      {
        name: "CSS Modules",
        icon: (
          <CSSSVG
            color="#1572B6"
            size={16}
          />
        ),
      },
      {
        name: "Antd",
        icon: (
          <AntdSVG
            color="#1d93ff"
            size={16}
          />
        ),
      },
    ],
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
      {
        name: "JavaScript",
        icon: (
          <JavascriptSVG
            color="#F7DF1E"
            size={16}
          />
        ),
      },
      {
        name: "React",
        icon: (
          <ReactSVG
            color="#61DAFB"
            size={16}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Sass",
        icon: (
          <SassSVG
            color="#CC6699"
            size={16}
          />
        ),
      },

      {
        name: "Prime React",
        icon: (
          <PrimeReactSVG
            color="#06B6D4"
            size={16}
          />
        ),
      },
      {
        name: "React Hook Form",
        icon: (
          <ReactHookFormSVG
            color="#EC5990"
            size={16}
          />
        ),
      },
    ],
    description:
      "Dynamic e-commerce web system selling skateboards in a friendly and intuitive interface. The system has authentication, a dashboard and also dark mode.",
    imgUrl: "/videos/sk8ter.webp",
    videoUrl: "/videos/sk8ter.mp4",
    githubUrl: "https://github.com/leoMirandaa/sk8ter-shop",
    websiteUrl: "",
  },
  {
    icon: <ShopApiSVG />,
    title: "Shop API",
    subtitle: "E-commerse back-end",
    technologies: [
      {
        name: "JavaScript",
        icon: (
          <JavascriptSVG
            color="#F7DF1E"
            size={16}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <TypescriptSVG
            color="#3178C6"
            size={16}
          />
        ),
      },
      {
        name: "Express",
        icon: (
          <ExpressSVG
            color="#000000"
            size={16}
          />
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <MongoDBSVG
            color="#47A248"
            size={16}
          />
        ),
      },
      {
        name: "Mongoose",
        icon: (
          <MongooseSVG
            color="#880000"
            size={16}
          />
        ),
      },
      {
        name: "Swagger",
        icon: (
          <SwaggerSVG
            color="#85EA2D"
            size={16}
          />
        ),
      },
    ],
    description:
      "Backed e-commerce project that allows to manage users, categories, coupons and products with the endpoints ready to play with. Includes swagger docs.",
    imgUrl: "/videos/shop-api.webp",
    videoUrl: "",
    githubUrl: "https://github.com/leomirandaa/shop-API.git",
    websiteUrl: "NONE",
  },
];
