import { ProjectList } from "@/app/utils";
import { ProjectType } from "@/app/types";
import { Project } from "../Project";

export const Projects = () => {
  return (
    <main className="flex flex-col gap-20">
      {ProjectList.map((project: ProjectType) => (
        <Project
          key={`project-item-${project.title}`}
          {...project}
        />
      ))}
    </main>
  );
};
