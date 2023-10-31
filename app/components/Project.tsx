import { useEffect } from "react";
import { Card, CardBody, Chip, Link } from "@nextui-org/react";
import { projectType } from "../types";
import { GithubSVG, LinkSVG } from "./ui/icons";
import ProjectsSectionAnimations from "../utils/ProjectsSectionAnimations";
import Image from "next/image";

export const Project = (project: projectType) => {
  const {
    key,
    bgColor,
    icon,
    description,
    title,
    subtitle,
    text1,
    text2,
    text3,
    img1,
    img2,
    technologies,
    githubLink,
    websiteLink,
  } = project;

  useEffect(() => {
    ProjectsSectionAnimations.img2Animation();
    ProjectsSectionAnimations.text1Animation();
    ProjectsSectionAnimations.text2Animation();
    ProjectsSectionAnimations.descriptionAnimation();
    ProjectsSectionAnimations.text3Animation();
    ProjectsSectionAnimations.websiteLinkAnimation();
    ProjectsSectionAnimations.githubLinkAnimation();
  }, []);

  return (
    // <div className="grid grid-rows-8 grid-cols-4 lg:grid-cols-5 gap-4">
    <div className="grid grid-rows-8 grid-cols-4 gap-4 pb-4 overflow-hidden">
      <Card
        className="row-start-1 col-span-full lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-2 opacity-0 text1Card"
        style={{ backgroundColor: bgColor }}
      >
        <CardBody className="text-center text-3xl font-bold">{text1}</CardBody>
      </Card>

      {/* main image */}
      <Card className="col-span-full lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-4 ">
        <CardBody className="gap-4">
          <div style={{ width: "100%", height: "300px", position: "relative" }}>
            <Image
              src={img1}
              alt={`${title} image`}
              fill
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {technologies.map((technology) => (
              <Chip>{technology}</Chip>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-1 lg:row-end-3 lg:col-start-4 lg:col-end-6 opacity-0 descriptionCard">
        <CardBody className="text-gray-400 text-lg">{description}</CardBody>
      </Card>

      <Card
        className="col-span-2 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4 opacity-0 text2Card"
        style={{ backgroundColor: bgColor }}
      >
        <CardBody className="text-center justify-center items-center text-3xl font-bold">
          {text2}
        </CardBody>
      </Card>

      <Card
        className="col-span-2 lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2 opacity-0 text3Card"
        style={{ backgroundColor: bgColor }}
      >
        <CardBody className="text-center justify-center items-center text-3xl font-bold">
          {text3}
        </CardBody>
      </Card>

      {/* img2 */}
      <Card className="hidden lg:block col-span-full lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2 opacity-0 img2Card">
        <CardBody className="gap-4 flex justify-center items-center">
          <div style={{ width: "100%", height: "300px", position: "relative" }}>
            <Image
              src={img2}
              alt={`${subtitle} image`}
              fill
            />
          </div>
        </CardBody>
      </Card>

      <div className="col-span-full flex gap-4 lg:row-start-3 lg:row-end-4 lg:col-start-4 lg:col-end-6 opacity-0 websiteLinkCard">
        <Card className="col-span-2 lg:row-start-3 lg:row-end-4 w-1/2">
          <Link
            href={websiteLink}
            rel="noopener noreferrer"
            target="_blank"
            className="min-h-full flex justify-center items-center"
          >
            <CardBody className="justify-center items-center">
              <LinkSVG />
            </CardBody>
          </Link>
        </Card>

        <Card className="col-span-2 lg:row-start-3 lg:row-end-4 w-1/2 opacity-0 githubLinkCard">
          <Link
            href={githubLink}
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
    </div>
  );
};
