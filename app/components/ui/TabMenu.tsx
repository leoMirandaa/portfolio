"use client";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Home, Contact, Projects } from "../tabSection";

export default function TabMenu() {
  return (
    <>
      <Tabs className="flex justify-center mt-4 mb-8">
        <Tab
          key="homme"
          title="Home"
        >
          <Home />
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
          <Contact />
        </Tab>
      </Tabs>
    </>
  );
}
