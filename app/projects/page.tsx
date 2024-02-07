import { ProjectList } from "@/app/utils";
import { ProjectType } from "@/app/types";
import { Project } from "../components/Project";

export default function Projects() {
  return (
    <section className="p-4 pb-12 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
      <div className="flex flex-col gap-20">
        {ProjectList.map((project: ProjectType) => (
          <Project
            key={`project-item-${project.title}`}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
