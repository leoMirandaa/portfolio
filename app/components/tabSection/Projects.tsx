import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import { ProjectList } from "@/app/utils";
import { projectType } from "@/app/types";
import { Project } from "../Project";

export const Projects = () => {
  return (
    <main>
      <Accordion defaultExpandedKeys={["1"]}>
        {ProjectList.map((project: projectType) => (
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
            <Project {...project} />
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
};
