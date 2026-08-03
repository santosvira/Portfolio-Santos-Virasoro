"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = 0;
    let mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{
        width: isHoveringLink ? 40 : 8,
        height: isHoveringLink ? 40 : 8,
      }}
      aria-hidden="true"
    />
  );
}
