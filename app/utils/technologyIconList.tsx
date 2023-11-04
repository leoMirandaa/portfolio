import { iconType } from "../types";
import {
  JavascriptSVG,
  TypescriptSVG,
  VueSVG,
  ReactSVG,
  TailwindSVG,
  ExpressSVG,
  NextUISVG,
  PrimeReactSVG,
  PrimeVueSVG,
  QuasarSVG,
  MongoDBSVG,
  FirebaseSVG,
} from "../components/ui/icons";

let color = "#9ca3af";
export const techonologyIconList: iconType[] = [
  {
    name: "Javascript",
    icon: <JavascriptSVG color={color} />,
  },
  {
    name: "Typescript",
    icon: <TypescriptSVG color={color} />,
  },
  {
    name: "Vue",
    icon: <VueSVG color={color} />,
  },
  {
    name: "React",
    icon: <ReactSVG color={color} />,
  },

  {
    name: "Quasar",
    icon: <QuasarSVG color={color} />,
  },
  {
    name: "Tailwind",
    icon: <TailwindSVG color={color} />,
  },
  {
    name: "PrimeVue",
    icon: <PrimeVueSVG color={color} />,
  },
  {
    name: "PrimeReact",
    icon: <PrimeReactSVG color={color} />,
  },

  {
    name: "NextUI",
    icon: <NextUISVG color={color} />,
  },
  {
    name: "Express",
    icon: <ExpressSVG color={color} />,
  },
  {
    name: "MongoDB",
    icon: <MongoDBSVG color={color} />,
  },
  {
    name: "Firebase",
    icon: <FirebaseSVG color={color} />,
  },
];
