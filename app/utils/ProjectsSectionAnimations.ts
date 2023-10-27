import { inView, animate } from "motion";

const img2Animation = () => {
  const img2Card = document.querySelectorAll(".img2Card");

  inView(img2Card, () => {
    animate(
      img2Card,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.1 }
    );
  });
};

const text1Animation = () => {
  const text1Card = document.querySelectorAll(".text1Card");

  inView(text1Card, () => {
    animate(
      text1Card,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.2 }
    );
  });
};

const text2Animation = () => {
  const text2 = document.querySelectorAll(".text2Card");

  inView(text2, () => {
    animate(
      text2,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.3 }
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

const text3Animation = () => {
  const text3 = document.querySelectorAll(".text3Card");

  inView(text3, () => {
    animate(
      text3,
      {
        opacity: [0, 0.2, 0.8, 1],

        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.5 }
    );
  });
};

const githubLinkAnimation = () => {
  const githubLink = document.querySelectorAll(".githubLinkCard");

  inView(githubLink, () => {
    animate(
      githubLink,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.6 }
    );
  });
};

const websiteLinkAnimation = () => {
  const websiteLink = document.querySelectorAll(".websiteLinkCard");

  inView(websiteLink, () => {
    animate(
      websiteLink,
      {
        opacity: [0, 0.2, 0.8, 1],

        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.7 }
    );
  });
};

export default {
  img2Animation,
  text1Animation,
  text2Animation,
  descriptionAnimation,
  text3Animation,
  websiteLinkAnimation,
  githubLinkAnimation,
};
