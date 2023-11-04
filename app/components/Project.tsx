import { useEffect } from "react";
import { Card, CardBody, CardHeader, Chip, Link } from "@nextui-org/react";
import { projectType } from "../types";
import ProjectsSectionAnimations from "../utils/ProjectsSectionAnimations";
import Image from "next/image";
import { GithubSVG, LinkSVG } from "./ui/icons";

export const Project = (project: projectType) => {
  const {
    bgColor,
    description,
    title,
    icon,
    imgUrl,
    videoUrl,
    technologies,
    githubUrl,
    websiteUrl,
  } = project;

  useEffect(() => {
    ProjectsSectionAnimations.videoAnimation();
    ProjectsSectionAnimations.descriptionAnimation();
    ProjectsSectionAnimations.websiteUrlAnimation();
    ProjectsSectionAnimations.githubUrlAnimation();
  }, []);

  return (
    // <div className="grid grid-rows-8 grid-cols-4 lg:grid-cols-5 gap-4">
    <div className="grid grid-rows-8 grid-cols-4 gap-6 pb-4 overflow-hidden">
      <div className="col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-5 text-3xl font-bold text-white">
        {title}
      </div>

      <div
        // style={{ width: "100%", height: "100%", position: "relative" }}
        className="col-span-full lg:row-start-2 lg:row-end-4 lg:col-start-1 lg:col-end-3 h-52 lg:h-auto videoSection"
      >
        <video
          className="rounded-xl  border-1 border-[#212121]"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            // objectFit: "fill",
          }}
          autoPlay
          loop
          playsInline
          poster={imgUrl}
          src={videoUrl}
        ></video>
      </div>

      <Card className="col-span-full lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-5 opacity-0 descriptionCard">
        <CardBody className="text-gray-400 text-lg flex justify-between gap-4">
          {description}
          <div className=" flex flex-wrap gap-2">
            {technologies.map((technology: string, index: number) => (
              <Chip
                key={`technology-item-${index}`}
                // variant="flat"
                size="sm"
              >
                {technology}
              </Chip>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className="col-span-2 lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-4 opacity-0 githubUrlCard">
        <Link
          href={websiteUrl}
          rel="noopener noreferrer"
          target="_blank"
          className="min-h-full flex justify-center items-center"
        >
          <CardBody className="justify-center items-center">
            <LinkSVG />
          </CardBody>
        </Link>
      </Card>

      <Card className="col-span-2 lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:col-end-5 opacity-0 websiteUrlCard">
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
