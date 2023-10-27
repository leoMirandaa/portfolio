import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import {
  GithubSVG,
  MagentaKitchenSVG,
  QuasarSVG,
  ShopApiSVG,
  Sk8terSVG,
} from "../ui/icons";
import { ProjectList } from "@/app/utils";
import { projectType } from "@/app/types";

export const Projects = () => {
  return (
    <main>
      <Accordion defaultExpandedKeys={["1"]}>
        {ProjectList.map((project: projectType, index) => (
          <AccordionItem
            key={project.key}
            aria-label={project.title}
            title={project.title}
            subtitle={project.subtitle}
            startContent={
              <Avatar
                radius="sm"
                style={{ backgroundColor: project.bgColor }}
                fallback={project.icon}
              />
            }
          >
            {project.description}
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};
