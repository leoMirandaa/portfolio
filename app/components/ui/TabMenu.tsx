"use client";
import { Tabs, Tab } from "@nextui-org/react";
import { AboutV1, About } from "../tabSection";

export default function TabMenu() {
  return (
    <>
      <Tabs className="flex justify-center mt-4 mb-8">
        <Tab
          key="about"
          title="About"
        >
          <About />
        </Tab>

        <Tab
          key="projects"
          title="Projects"
        >
          <h2>Test projects</h2>
        </Tab>

        <Tab
          key="contact"
          title="Contact"
        >
          <h2>Test contact</h2>
        </Tab>
        {/* <Tab
          key="aboutV1"
          title="AboutV1"
        >
          <AboutV1 />
        </Tab> */}
      </Tabs>
    </>
  );
}
