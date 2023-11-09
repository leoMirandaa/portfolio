import { inView, animate } from "motion";

const titleAnimation = () => {
  inView(".titleSection", (info) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.1 }
    );
  });
};

const videoAnimation = () => {
  inView(".videoSection", (info) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
        // transform: ["translateY(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.2 }
    );
  });
};

const descriptionAnimation = () => {
  inView(".descriptionCard", (info) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.4 }
    );
  });
};

const githubUrlAnimation = () => {
  inView(".githubUrlCard", (info) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.5 }
    );
  });
};

const websiteUrlAnimation = () => {
  inView(".websiteUrlCard", (info) => {
    animate(
      info.target,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.6 }
    );
  });
};

const mobileAnimation = () => {
  inView(".mobile-animation", (info) => {
    animate(info.target, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
  });
};

export default {
  titleAnimation,
  videoAnimation,
  descriptionAnimation,
  websiteUrlAnimation,
  githubUrlAnimation,
  mobileAnimation,
};
