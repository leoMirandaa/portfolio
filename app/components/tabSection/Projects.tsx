import { Accordion, AccordionItem, Avatar, Chip } from "@nextui-org/react";
import { ProjectList } from "@/app/utils";
import { projectType } from "@/app/types";
import { Project } from "../Project";

export const Projects = () => {
  return (
    <main className="flex flex-col gap-20">
      {/* <Accordion
        defaultExpandedKeys={["1"]}
      > */}
      {ProjectList.map((project: projectType) => (
        // <AccordionItem
        //   key={project.key}
        //   aria-label={project.title}
        //   title={<h2 className="text-xl font-bold">{project.title}</h2>}
        //   subtitle={
        //     <div className="flex gap-4">
        //       <div>{project.subtitle}</div>
        //     </div>
        //   }
        //   startContent={
        //     <div className="flex items-end ju">
        //       <Avatar
        //         radius="sm"
        //         style={{ backgroundColor: project.bgColor }}
        //         fallback={project.icon}
        //       />
        //     </div>
        //   }
        // >

        <Project
          key={`project-item-${project.title}`}
          {...project}
        />
        // </AccordionItem>
      ))}
      {/* </Accordion> */}
    </main>
  );
};
