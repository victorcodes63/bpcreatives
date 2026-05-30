"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  forwardRef,
  useEffect,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

interface DragCursorAreaProps {
  children: ReactNode;
  className?: string;
  isDragging?: boolean;
}

export const DragCursorArea = forwardRef<HTMLDivElement, DragCursorAreaProps>(
  function DragCursorArea(
    { children, className = "", isDragging = false },
    ref,
  ) {
    const [isHovering, setIsHovering] = useState(false);
    const [canUseCustomCursor, setCanUseCustomCursor] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cursorX = useSpring(mouseX, {
      stiffness: 520,
      damping: 42,
      mass: 0.7,
    });
    const cursorY = useSpring(mouseY, {
      stiffness: 520,
      damping: 42,
      mass: 0.7,
    });

    useEffect(() => {
      const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
      const update = () => setCanUseCustomCursor(mediaQuery.matches);

      update();
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }, []);

    function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    }

    const showCursor = canUseCustomCursor && isHovering && !isDragging;

    return (
      <div
        ref={ref}
        className={`${className}${canUseCustomCursor ? " cursor-none" : ""}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {children}

        {canUseCustomCursor ? (
          <motion.div
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-50 flex size-[5.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bp-gold bg-bp-cream/35 text-[0.625rem] font-bold uppercase tracking-[0.28em] text-bp-gold"
            style={{ x: cursorX, y: cursorY }}
            initial={false}
            animate={{
              opacity: showCursor ? 1 : 0,
              scale: showCursor ? 1 : 0.88,
            }}
            transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            Drag
          </motion.div>
        ) : null}
      </div>
    );
  },
);
