import { ReactElement, forwardRef, useEffect } from "react";

import { Avatar, Button, Card, CardBody, Tooltip } from "@nextui-org/react";

import { Education } from "../Education";
import { iconType, educationType } from "@/app/types";
import aboutAnimation from "../../utils/aboutSectionAnimations";
import { educationList, techonologyIconList, whoAmIData } from "@/app/utils";
import Image from "next/image";

// eslint-disable-next-line react/display-name
const IconComponent = forwardRef<HTMLDivElement, { icon: any }>(
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
IconComponent.displayName = "IconComponent";
export default IconComponent;

export const Home = () => {
  const { fullName, profession, whoAmI, quote } = whoAmIData;

  useEffect(() => {
    aboutAnimation.whoAmIAnimation();
    aboutAnimation.professionAnimation();
    aboutAnimation.quoteAnimation();
    aboutAnimation.techonologyIconListAnimation();
    aboutAnimation.verticalImageAnimation();
    aboutAnimation.educationContentAnimation();
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
        </CardBody>
      </Card>

      <Card className="col-span-full row-start-2 row-end-3 lg:row-start-2 lg:col-start-1 lg:col-span-1 bg-blue opacity-0 professionCard">
        <CardBody className="justify-center items-center">
          <h2 className="text-2xl lg:text-3xl font-bold  text-center">
            {profession}
          </h2>
        </CardBody>
      </Card>

      <Card className="hidden lg:block col-span-2 lg:row-start-3 lg:row-span-1 lg:col-start-3 lg:col-span-1 bg-blue opacity-0 quoteCard">
        <CardBody className="justify-center items-center lg:row-start-2 lg:cols-start-4">
          <div className="text-xl font-bold text-center">{quote}</div>
        </CardBody>
      </Card>

      <Card className="col-span-full lg:row-start-3 lg:row-span-2 lg:col-start-1 lg:col-span-1 opacity-0 technologyIconList">
        <CardBody className="gap-4">
          <h2 className="text-3xl font-bold">
            Technologies I have worked with
          </h2>

          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {techonologyIconList.map(({ name, icon }: iconType) => (
              <Tooltip
                key={`technology-item-${name}`}
                content={name}
              >
                <IconComponent icon={icon} />
                {/* <Chip variant="flat">{name}</Chip> */}
              </Tooltip>
            ))}
          </div>
        </CardBody>
      </Card>

      {/* vertical img */}
      <div className="radius col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-3 rounded-xl relative opacity-0 verticalImage">
        <Image
          // className="col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-3 rounded-xl opacity-0 verticalImage"
          src="https://images.unsplash.com/photo-1613980790147-f4f449df0dd9?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile image"
          fill
          // sizes="100px"
          style={{
            width: "100%",
            height: "100%",
            // objectFit: "contain",
            objectFit: "fill",
            borderRadius: "15px",
          }}
        />
      </div>

      <Card className="col-span-full lg:row-start-4 lg:row-span-1 lg:col-start-2 lg:col-span-2 opacity-0 educationContent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="hidden lg:block icon icon-tabler icon-tabler-timeline absolute top-0 -right-7"
          width="200"
          height="200"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#232323"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
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
                key={`education-item-${education.career}`}
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
