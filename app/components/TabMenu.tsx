"use client";
import { Tabs, Tab } from "@nextui-org/react";
import About from "./About";

export default function TabMenu() {
  return (
    <Tabs
      className="flex justify-center my-4"
      variant="bordered"
    >
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
        <main>test2</main>
      </Tab>
      <Tab
        key="contact"
        title="Contact"
      >
        <main>test3</main>
      </Tab>
    </Tabs>
  );
}
