import { animate, inView } from "https://cdn.skypack.dev/motion";

export const fromTop = (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [-100, 0] },
    {
      duration: 0.8,
      easing: "ease-out",
    }
  );
};

export const fromLeft = (element) => {
  animate(
    element,
    { opacity: [0, 1], x: [-100, 0] },
    {
      duration: 0.8,
      easing: "ease-out",
    }
  );
};

export const animateSidebar = (element) => {
  animate(
    element,
    { opacity: [0, 1], x: [-100, 0] },
    {
      duration: 0.4,
      easing: "ease-out",
      delay: 0.7,
    }
  );
};

export const toViewport = (element) => {
  inView(
    element,
    () => {
      animate(
        element,
        { opacity: 1, x: [-100, 0] },
        {
          duration: 0.9,
          easing: [0.17, 0.55, 0.55, 1],
        }
      );

      return () =>
        animate(
          element,
          { opacity: 0, x: -100 },
          {
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
          }
        );
    },
    {
      amount: 0.4,
    }
  );
};
