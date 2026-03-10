import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayClass?: "" | "stagger-1" | "stagger-2" | "stagger-3";
  once?: boolean;
};

const Reveal = ({ children, className, delayClass = "", once = true }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
          return;
        }

        if (!once) setVisible(false);
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={cn("smooth-in", delayClass, visible && "is-visible", className)}>
      {children}
    </div>
  );
};

export default Reveal;
