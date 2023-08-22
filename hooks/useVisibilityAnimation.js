import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";

export const useVisibilityAnimation = (threshold = 0.1) => {
  const [ref, { entry }] = useIntersectionObserver({ threshold });
  const isVisible = entry && entry.isIntersecting;
  const animation = useAnimation();

  const resetPosition = async () => {
    await animation.start("reset");
  };

  useEffect(() => {
    if (isVisible) {
      animation.start("show");
    } else {
      resetPosition();
    }
  }, [isVisible]);

  return [ref, animation];
};
