import { inView, animate } from "motion";

const videoAnimation = () => {
  const video = document.querySelectorAll(".videoSection");

  inView(video, () => {
    animate(
      video,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.2 }
    );
  });
};

const descriptionAnimation = () => {
  const description = document.querySelectorAll(".descriptionCard");

  inView(description, () => {
    animate(
      description,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.4 }
    );
  });
};

const githubUrlAnimation = () => {
  const githubLink = document.querySelectorAll(".githubUrlCard");

  inView(githubLink, () => {
    animate(
      githubLink,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.5 }
    );
  });
};

const websiteUrlAnimation = () => {
  const websiteLink = document.querySelectorAll(".websiteUrlCard");

  inView(websiteLink, () => {
    animate(
      websiteLink,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.6 }
    );
  });
};

export default {
  videoAnimation,
  descriptionAnimation,
  websiteUrlAnimation,
  githubUrlAnimation,
};
