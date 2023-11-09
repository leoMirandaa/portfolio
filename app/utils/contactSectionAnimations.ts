import { inView, animate } from "motion";

const emailAnimation = () => {
  const emailCard = document.querySelectorAll(".emailCard");

  inView(emailCard, () => {
    animate(
      emailCard,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.1 }
    );
  });
};

const linkedInAnimation = () => {
  const linkedInCard = document.querySelectorAll(".linkedInCard");

  inView(linkedInCard, () => {
    animate(
      linkedInCard,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateX(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.2 }
    );
  });
};

const githubAnimation = () => {
  const githubCard = document.querySelectorAll(".githubCard");

  inView(githubCard, () => {
    animate(
      githubCard,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(-100px) ", "none"],
      },
      { duration: 0.5, delay: 0.3 }
    );
  });
};
const formAnimation = () => {
  const form = document.querySelectorAll(".form");

  inView(form, () => {
    animate(
      form,
      {
        opacity: [0, 0.2, 0.8, 1],
        transform: ["translateY(100px) ", "none"],
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
  emailAnimation,
  githubAnimation,
  linkedInAnimation,
  formAnimation,
  mobileAnimation,
};
