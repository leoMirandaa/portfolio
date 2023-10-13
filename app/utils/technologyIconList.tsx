import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
} from "@tabler/icons-react";

import {
  ExpressSVG,
  NextUISVG,
  PrimeReactSVG,
  PrimeVueSVG,
  QuasarSVG,
} from "../components/ui/icons";
import { IconType } from "../types";

export const techonologyIconList: IconType[] = [
  {
    name: "Html",
    icon: (
      <IconBrandHtml5
        stroke={1}
        size={40}
      />
    ),
  },
  {
    name: "CSS",
    icon: (
      <IconBrandCss3
        stroke={1}
        size={40}
      />
    ),
  },
  {
    name: "Javascript",
    icon: (
      <IconBrandJavascript
        stroke={1}
        size={40}
      />
    ),
  },

  {
    name: "Typescript",
    icon: (
      <IconBrandTypescript
        stroke={1}
        size={40}
      />
    ),
  },
  {
    name: "Vue",
    icon: (
      <IconBrandVue
        stroke={1}
        size={40}
      />
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <IconBrandTailwind
        stroke={1}
        size={40}
      />
    ),
  },
  {
    name: "React",
    icon: (
      <IconBrandReact
        stroke={1}
        size={40}
      />
    ),
  },
  {
    name: "React native",
    icon: (
      <IconBrandReactNative
        stroke={1}
        size={40}
      />
    ),
  },
  {
    name: "Next",
    icon: (
      <IconBrandNextjs
        stroke={1}
        size={40}
      />
    ),
  },
  {
    name: "Quasar",
    icon: <QuasarSVG />,
  },
  {
    name: "PrimeVue",
    icon: <PrimeVueSVG />,
  },
  {
    name: "PrimeReact",
    icon: <PrimeReactSVG />,
  },
  {
    name: "NextUI",
    icon: <NextUISVG />,
  },
  {
    name: "Express",
    icon: <ExpressSVG />,
  },
];
