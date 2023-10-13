import { Avatar, Button, Card, CardBody, Tooltip } from "@nextui-org/react";

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import { Education } from "../Education";
import { Employment } from "../Employment";
import { EmploymentType, IconType, educationType } from "@/app/types";
import {
  educationList,
  employmentList,
  techonologyIconList,
  aboutSection,
} from "@/app/utils";

export const About = () => {
  const { fullName, profession, shortDescription, whoAmI } = aboutSection;

  return (
    <div className="grid grid-rows-8 grid-cols-4 gap-4">
      <Card className="col-span-full lg:row-span-2 lg:col-start-2 lg:col-span-2">
        <CardBody className="flex-col items-center justify-center gap-2">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-20 h-20 text-large"
          />
          <h1 className="text-3xl font-bold">{fullName}</h1>
          <div className="text-xl font-bold text-gray-400 ">{profession}</div>
          <p className="text-center text-lg">{shortDescription}</p>
          <div>
            <Button className="mt-2 font-bold">Download CV</Button>
          </div>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-span-2 lg:row-start-1 lg:col-span-1">
        <CardBody className="gap-4">
          <h2 className="text-3xl font-bold">Who am I?</h2>
          <p className="text-lg">{whoAmI}</p>
        </CardBody>
      </Card>

      <Card
        isPressable
        className="col-span-2 lg:row-start-1 lg:col-start-4 lg:col-span-1 bg-blue"
      >
        <CardBody className="justify-center items-center">
          <IconBrandGithub size="44" />
        </CardBody>
      </Card>

      <Card
        isPressable
        className="col-span-2 lg:row-start-2 lg:col-start-4 lg:col-span-1 bg-blue"
      >
        <CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
          <IconBrandLinkedin size="44" />
        </CardBody>
      </Card>

      <Card className="hidden lg:flex lg:row-start-3 lg:col-span-1">
        <CardBody>
          <h2 className="text-3xl font-bold">Technologies I've worked with</h2>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-3 lg:col-span-3">
        <CardBody className="gap-4 justify-center">
          <h2 className="text-3xl font-bold lg:hidden">
            Technologies I've worked with
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {techonologyIconList.map(({ name, icon }: IconType) => (
              <Tooltip
                key={`icon-list-${name}`}
                content={name}
              >
                {icon}
              </Tooltip>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card className="hidden lg:flex lg:row-start-4 lg:col-span-1 bg-blue">
        <CardBody className="justify-center items-center">
          <h2 className="text-3xl font-bold">Education</h2>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-4 lg:col-span-3">
        <CardBody className="gap-4">
          <h2 className="text-3xl font-bold lg:hidden">Education</h2>

          {educationList.map((education: educationType) => (
            <Education
              career={education.career}
              years={education.years}
              description={education.description}
            />
          ))}
        </CardBody>
      </Card>

      <Card className="hidden lg:flex lg:row-start-5 lg:col-span-1 bg-blue">
        <CardBody className="justify-center items-center">
          <h2 className="text-3xl font-bold">Employment</h2>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-5 lg:col-span-3">
        <CardBody className="gap-4">
          <h2 className="text-3xl font-bold lg:hidden">Employment</h2>

          {employmentList.map((employment: EmploymentType) => (
            <Employment
              company={employment.company}
              years={employment.years}
              position={employment.position}
              description={employment.description}
              technologies={employment.technologies}
            />
          ))}
        </CardBody>
      </Card>
    </div>
  );
};
