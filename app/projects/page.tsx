import { ProjectList } from "@/app/utils";
import { projectType } from "@/app/types";
import { Project } from "../components/Project";

export default function Projects() {
  return (
    <section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
      <div className="flex flex-col gap-20">
        {ProjectList.map((project: projectType) => (
          <Project
            key={`project-item-${project.title}`}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
