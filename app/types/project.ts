import React from "react";
import { iconType } from ".";

export type TechnologyType = iconType;

export type ProjectType = {
  icon: React.ReactElement;
  title: string;
  subtitle: string;
  technologies: TechnologyType[];
  description: string;
  imgUrl: string;
  videoUrl: string;
  githubUrl: string;
  websiteUrl: string;
};
