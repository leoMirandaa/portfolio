import { inView, animate } from "motion";

const whoAmIAnimation = () => {
  const whoAmICard = document.querySelectorAll(".whoAmICard");

  inView(whoAmICard, () => {
    animate(
      whoAmICard,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.1 }
    );
  });
};

const verticalImageAnimation = () => {
  const verticalImage = document.querySelectorAll(".verticalImage");

  inView(verticalImage, () => {
    animate(
      verticalImage,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.2 }
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
        transform: ["translateX(100px) ", "none"],
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
        transform: ["translateY(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.4 }
    );
  });
};

const professionAnimation = () => {
  const professionCard = document.querySelectorAll(".professionCard");

  inView(professionCard, () => {
    animate(
      professionCard,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.5 }
    );
  });
};

const quoteAnimation = () => {
  const quoteCard = document.querySelectorAll(".quoteCard");

  inView(quoteCard, () => {
    animate(
      quoteCard,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(100px) ", "none"],
      },
      { duration: 0.5, delay: 0.5 }
    );
  });
};

const mobileAnimation = () => {
  inView(".mobile-animation", (info) => {
    animate(info.target, { opacity: 1 }, { duration: 0.5, delay: 0.2 });
  });
};

export default {
  whoAmIAnimation,
  professionAnimation,
  quoteAnimation,
  techonologyIconListAnimation,
  verticalImageAnimation,
  educationContentAnimation,
  mobileAnimation,
};
