"use client";
import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

import { contactData } from "@/app/utils";
import { Form } from "../Form";
import { GithubSVG, LinkedInSVG, MailSVG } from "../ui/icons";
import contactAnimation from "../../utils/contactSectionAnimations";

export const Contact = () => {
  const { email, github, linkedIn } = contactData;
  const mq = window.matchMedia("(min-width: 1024px)");

  useEffect(() => {
    if (!mq.matches) return contactAnimation.mobileAnimation();

    contactAnimation.emailAnimation();
    contactAnimation.githubAnimation();
    contactAnimation.linkedInAnimation();
    contactAnimation.formAnimation();
  }, []);

  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-5 max-w-2xl mx-auto">
      <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-1 opacity-0 mobile-animation emailCard">
        <CardBody className="flex flex-row justify-center items-center gap-2">
          <Button
            onClick={() =>
              (location.href = `mailto:${email}?subject=Mail from your Portfolio`)
            }
            startContent={<MailSVG />}
          >
            {email}
          </Button>
        </CardBody>
      </Card>

      <Card
        isHoverable
        className="col-span-full lg:row-start-2 lg:row-span-1 lg:col-span-1 cursor-pointer opacity-0 mobile-animation linkedInCard"
      >
        <Link
          href={linkedIn}
          rel="noopener noreferrer"
          target="_blank"
          className="min-h-full flex justify-center items-center"
        >
          <CardBody
            className="flex justify-center items-center"
            onClick={() => window.open(`${linkedIn}`, "_blank")}
          >
            <LinkedInSVG />
          </CardBody>
        </Link>
      </Card>

      <Card
        isHoverable
        className="col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-2 cursor-pointer opacity-0 mobile-animation githubCard "
      >
        <Link
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="min-h-full flex justify-center items-center"
        >
          <CardBody className="flex justify-center items-center gap-2">
            <GithubSVG />
            <h1 className="text-3xl font-bold">Github Profile</h1>
            <p className="text-xl text-gray-400  text-center">
              Find more of my repositories
            </p>
          </CardBody>
        </Link>
      </Card>

      <div className="col-span-full mt-8 opacity-0 mobile-animation form">
        <Form />
      </div>
    </div>
  );
};
