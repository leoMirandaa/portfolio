import { useEffect } from "react";
import Link from "next/link";

import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

import { projectType } from "../types";
import { GithubSVG, LinkSVG } from "./ui/icons";
import ProjectsSectionAnimations from "../utils/ProjectsSectionAnimations";

export const Project = (project: projectType) => {
  const {
    description,
    title,
    icon,
    imgUrl,
    videoUrl,
    technologies,
    githubUrl,
    websiteUrl,
  } = project;

  const mq = window.matchMedia("(min-width: 1024px)");

  useEffect(() => {
    if (!mq.matches) return ProjectsSectionAnimations.mobileAnimation();

    ProjectsSectionAnimations.titleAnimation();
    ProjectsSectionAnimations.videoAnimation();
    ProjectsSectionAnimations.descriptionAnimation();
    ProjectsSectionAnimations.websiteUrlAnimation();
    ProjectsSectionAnimations.githubUrlAnimation();
  }, []);

  return (
    <div className="grid grid-rows-8 grid-cols-4 gap-5 pb-4 overflow-hidden">
      <div className="flex lg:hidden items-center col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 text-3xl font-bold text-white opacity-0 mobile-animation titleSection">
        <span className="bg-[#303036] p-2 rounded-md mr-2"> {icon}</span>
        {title}
      </div>

      <div className="col-span-full lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-3 opacity-0 mobile-animation videoSection">
        <video
          className="rounded-xl  border-1 border-[#212121]"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          loop
          playsInline
          poster={imgUrl}
          src={videoUrl}
        ></video>
      </div>

      <Card className="col-span-full lg:row-start-1 lg:row-end-3 lg:col-start-3 lg:col-end-5 lg:min-h-[250px] opacity-0 mobile-animation descriptionCard">
        <CardBody className="text-gray-400 text-lg flex justify-between gap-4">
          <div className="hidden lg:flex col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 text-3xl font-bold text-white opacity-0 mobile-animation titleSection">
            <span className="bg-[#303036] p-2 rounded-md mr-2"> {icon}</span>{" "}
            {title}
          </div>
          {description}
          <div className=" flex flex-wrap gap-2">
            {technologies.map((technology: string, index: number) => (
              <Chip
                key={`technology-item-${index}`}
                size="sm"
              >
                {technology}
              </Chip>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card
        isHoverable
        className="col-span-2 lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:max-h-24 lg:col-end-4 opacity-0 mobile-animation githubUrlCard"
      >
        <Link
          href={websiteUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="min-h-full flex justify-center items-center"
        >
          <CardBody className="justify-center items-center">
            {!websiteUrl ? (
              <h2 className="font-bold text-xl text-gray-400">Coming Soon!</h2>
            ) : (
              <LinkSVG />
            )}
          </CardBody>
        </Link>
      </Card>

      <Card
        isHoverable
        className="col-span-2 lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:max-h-24 lg:col-end-5  opacity-0 mobile-animation websiteUrlCard"
      >
        <Link
          href={githubUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="min-h-full flex justify-center items-center"
        >
          <CardBody className="justify-center items-center">
            <GithubSVG />
          </CardBody>
        </Link>
      </Card>
    </div>
  );
};
