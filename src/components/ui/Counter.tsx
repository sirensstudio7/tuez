"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

export function Counter({
  value,
  direction = "up",
  suffix = "",
  prefix = "",
}: {
  value: number;
  direction?: "up" | "down";
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(direction === "down" ? value : 0);

  useEffect(() => {
    if (isInView && ref.current) {
      const startValue = direction === "down" ? value : 0;
      const endValue = direction === "down" ? 0 : value;
      
      const animation = animate(startValue, endValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          const currentValue = direction === "down" ? latest : latest;
          setDisplayValue(currentValue);
          if (ref.current) {
            ref.current.textContent = prefix + Intl.NumberFormat("en-US").format(Math.floor(currentValue)) + suffix;
          }
        },
      });

      return () => animation.stop();
    }
  }, [isInView, value, direction, suffix, prefix]);

  return <span ref={ref}>{prefix + Intl.NumberFormat("en-US").format(Math.floor(displayValue)) + suffix}</span>;
}



