import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isMobile, setIsMobile] =
    useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener(
      "resize",
      checkMobile
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkMobile
      );
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let frame;

    const moveCursor = (e) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      cancelAnimationFrame(frame);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-40
      "
      style={{
        width: "180px",
        height: "180px",

        transform: `
          translate3d(
            ${position.x - 90}px,
            ${position.y - 90}px,
            0
          )
        `,

        borderRadius: "999px",

        background:
          `
          radial-gradient(
            circle,
            rgba(0,199,140,0.22) 0%,
            rgba(0,199,140,0.10) 35%,
            rgba(0,199,140,0.04) 55%,
            transparent 72%
          )
          `,

        filter: "blur(22px)",

        opacity: 1,

        willChange: "transform",
      }}
    />
  );
}