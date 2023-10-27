import { ReactElement, useEffect } from "react";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  Chip,
  Tooltip,
} from "@nextui-org/react";

import { Education } from "../Education";
import { Employment } from "../Employment";
import { EmploymentType, IconType, educationType } from "@/app/types";
import aboutAnimation from "../../utils/aboutSectionAnimations";
import { educationList, techonologyIconList, whoAmIData } from "@/app/utils";
import React from "react";

const IconComponent = React.forwardRef<HTMLDivElement, { icon: ReactElement }>(
  (props, ref): any => {
    return (
      <p
        ref={ref}
        {...props}
      >
        {props.icon}
      </p>
    );
  }
);
export const About = () => {
  const { fullName, profession, whoAmI, quote } = whoAmIData;

  useEffect(() => {
    aboutAnimation.whoAmIAnimation();
    aboutAnimation.contactAnimation();
    aboutAnimation.technologiesTitleAnimation();
    aboutAnimation.techonologyIconListAnimation();
    aboutAnimation.educationTitleAnimation();
    aboutAnimation.educationContentAnimation();
    aboutAnimation.employmentTitleAnimation();
    aboutAnimation.employmentContentAnimation();
  }, []);

  return (
    <div className="grid grid-rows-8 grid-cols-4 lg:grid-cols-3 gap-6">
      <Card className="col-span-full lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-1">
        <CardBody className="flex-col items-center justify-center gap-2">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-28 h-28 text-large"
          />
          <h1 className="text-4xl font-bold">{fullName}</h1>

          <Button>Download CV</Button>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-2  opacity-0 whoAmICard">
        <CardBody className="gap-2">
          <h2 className="text-3xl font-bold">Who am I?</h2>
          <p className="text-lg text-gray-400">{whoAmI} </p>
          <p className="text-lg text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            sequi expedita quis, eum voluptates nihil quae iste culpa placeat
            soluta eaque mollitia! Odit corrupti exercitationem, nam perferendis
            accusamus animi explicabo.
          </p>
        </CardBody>
      </Card>

      <Card className="col-span-2 lg:row-start-2 lg:col-start-1 lg:col-span-1 opacity-0 contactCard bg-blue ">
        <CardBody className="justify-center items-center">
          <h2 className="text-xl lg:text-3xl font-bold  text-center">
            {profession}
          </h2>
        </CardBody>
      </Card>

      <Card className="col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 opacity-0 contactCard bg-blue bg-blue ">
        <CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
          <div className="text-xl font-bold text-center">“{quote}"</div>
        </CardBody>
      </Card>

      {/* <Card className="hidden lg:flex lg:row-start-3 lg:col-span-1 bg-blue opacity-0 technologiesTitle">
        <CardBody>
          <h2 className="text-3xl font-bold">Technologies I've worked with</h2>
        </CardBody>
      </Card> */}

      <Card className="col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 technologyIconList">
        <CardBody className="gap-4">
          <h2 className="text-3xl font-bold">Technologies I've worked with</h2>

          <div className="flex flex-wrap justify-start gap-4">
            {techonologyIconList.map(({ name, icon }: IconType) => (
              <Tooltip
                key={name}
                content={name}
              >
                <IconComponent icon={icon} />
                {/* <Chip variant="flat">{name}</Chip> */}
              </Tooltip>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className=" col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-3  opacity-0 technologyIconList">
        <CardBody className="justify-center ">
          <img
            className="h-96"
            src="https://img.freepik.com/free-photo/close-up-hand-holding-device_23-2149241418.jpg?w=826&t=st=1698361798~exp=1698362398~hmac=6b4f02d2ce4a43a6242ebf9921dbeceab0de67968320a5ba68b1570e248ab4ff"
            alt=""
          />
        </CardBody>
      </Card>

      {/* <Card className="hidden lg:flex lg:row-start-4 lg:col-span-1 bg-blue opacity-0 educationTitle">
        <CardBody className="justify-center items-center">
          <h2 className="text-3xl font-bold">Education</h2>
        </CardBody>
      </Card> */}

      <Card className="col-span-full lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-2 opacity-0 educationContent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#232323"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          ></path>
          <path d="M4 16l6 -7l5 5l5 -6"></path>
          <path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
        <CardBody className="gap-2 flex-wrap">
          <h2 className="text-3xl font-bold ">Education</h2>

          <div className="flex flex-col lg:flex-col gap-2">
            {educationList.map((education: educationType) => (
              <Education
                key={education.career}
                career={education.career}
                years={education.years}
                description={education.description}
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
