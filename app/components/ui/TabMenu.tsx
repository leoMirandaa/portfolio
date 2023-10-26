"use client";
import { Tabs, Tab } from "@nextui-org/react";
import { About, Projects } from "../tabSection";

export default function TabMenu() {
  return (
    <>
      <Tabs className="flex justify-center my-4">
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
          <Projects />
        </Tab>

        <Tab
          key="contact"
          title="Contact"
        >
          <main>test3</main>
        </Tab>
      </Tabs>
    </>
  );
}
