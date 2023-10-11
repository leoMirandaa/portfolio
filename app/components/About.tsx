import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

export default function About() {
  return (
    <div className="bg-gray-600 grid grid-rows-8 grid-cols-4 gap-4">
      <Card className="col-span-full py-8">
        <CardBody className="flex-col items-center gap-2">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-20 h-20 text-large"
          />
          <h1 className="text-3xl font-bold">Leo Miranda</h1>
          <div className="text-xl">Front-end developer</div>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            odio quibusdam necessitatibus, sunt iure odit?
          </p>
        </CardBody>
        <CardFooter className="justify-center">
          <Button>Download CV</Button>
        </CardFooter>
      </Card>

      <Card className="col-span-full">
        <CardBody className="gap-2">
          <h2 className="text-3xl font-bold">Who am i ?</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi
          expedita quis, eum voluptates nihil quae iste culpa placeat soluta
          eaque mollitia! Odit corrupti exercitationem, nam perferendis
          accusamus animi explicabo.
        </CardBody>
      </Card>
    </div>
  );
}
