import { inView, animate } from "motion";

const whoAmIAnimation = () => {
  const whoAmICard = document.querySelectorAll(".whoAmICard");

  inView(whoAmICard, () => {
    animate(
      whoAmICard,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.1 }
    );
  });
};

const contactAnimation = () => {
  const contactCard = document.querySelectorAll(".contactCard");

  inView(contactCard, () => {
    animate(
      contactCard,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.2 }
    );
  });
};

const technologiesTitleAnimation = () => {
  const technologiesTitle = document.querySelectorAll(".technologiesTitle");

  inView(technologiesTitle, () => {
    animate(
      technologiesTitle,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.3 }
    );
  });
};

const techonologyIconListAnimation = () => {
  const technologyIconList = document.querySelectorAll(".technologyIconList");

  inView(technologyIconList, () => {
    animate(
      technologyIconList,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.4 }
    );
  });
};

const educationContentAnimation = () => {
  const educationContent = document.querySelectorAll(".educationContent");

  inView(educationContent, () => {
    animate(
      educationContent,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.5 }
    );
  });
};

export default {
  contactAnimation,
  whoAmIAnimation,
  technologiesTitleAnimation,
  techonologyIconListAnimation,
  educationContentAnimation,
};
