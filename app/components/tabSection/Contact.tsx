import { useEffect } from "react";
import { Button, Card, CardBody } from "@nextui-org/react";
import { contactData } from "@/app/utils";
import contactAnimation from "../../utils/contactSectionAnimations";
import Link from "next/link";
import { GithubSVG, LinkedInSVG, MailSVG } from "../ui/icons";

export const Contact = () => {
  const { email, github, linkedIn } = contactData;

  useEffect(() => {
    contactAnimation.emailAnimation();
    contactAnimation.githubAnimation();
    contactAnimation.linkedInAnimation();
  }, []);

  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-6">
      <Card className="col-span-full lg:row-start-1 lg:row-span-1 lg:col-span-1 opacity-0 emailCard">
        <CardBody
          className="flex flex-row justify-center items-center gap-2"
          // onClick={() =>
          //   (location.href = `mailto:${email}?subject=Mail from your Portfolio`)
          // }
        >
          {/* <MailSVG /> */}
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

      <Card className="col-span-full lg:row-start-2 lg:row-span-1 lg:col-span-1 cursor-pointer opacity-0 linkedInCard">
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

      <Card className="col-span-full lg:row-start-1 lg:row-span-2 lg:col-start-2 cursor-pointer opacity-0 githubCard ">
        <Link
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          className="min-h-full flex justify-center items-center"
        >
          <CardBody
            className="flex justify-center items-center gap-2"
            // onClick={() => window.open(`${github}`, "_blank")}
            // onClick={() => }
          >
            <GithubSVG />
            <h1 className="text-3xl font-bold">Github Profile</h1>
            <p className="text-xl text-gray-400">
              Find more of my repositories
            </p>
          </CardBody>
        </Link>
      </Card>
    </div>
  );
};
