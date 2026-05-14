import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import Reveal from "../../components/ui/Reveal";

const images = [
  "/images/hero-laser-machine.jpg",
  "/images/machinery.jpg",
  "/images/workshop.jpg",
  "/images/cuttings.jpg",

  "/gallery/fabrication.jpg",
  "/gallery/manufacturing.jpg",
];

export default function HeroVisual() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === images.length - 1
          ? 0
          : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Reveal delay={0.15}>
      <div
        className="
          relative
          overflow-hidden

          rounded-4xl
          border
        "
        style={{
          background:
            "rgba(255,255,255,0.03)",

          borderColor:
            "rgba(255,255,255,0.08)",

          backdropFilter:
            "blur(14px) saturate(160%)",

          WebkitBackdropFilter:
            "blur(14px) saturate(160%)",
        }}
      >
        {/* Media Area */}
        <div
          className="
            relative
            aspect-4/5

            sm:aspect-16/10
            lg:aspect-4/5
          "
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt="Industrial Laser Manufacturing"
              loading="eager"
              initial={{
                opacity: 0,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 1.1,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-0

                h-full
                w-full

                object-cover

                opacity-80
              "
            />
          </AnimatePresence>

          {/* Industrial Texture */}
          <div
            className="
              absolute
              inset-0

              opacity-[0.10]
              mix-blend-soft-light
            "
            style={{
              backgroundImage:
                "url('/textures/metal.jpg')",

              backgroundSize:
                "cover",

              backgroundPosition:
                "center",
            }}
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute
              inset-0
            "
            style={{
              background:
                `
                linear-gradient(
                  to top,
                  rgba(4,5,5,0.88),
                  rgba(4,5,5,0.28),
                  rgba(4,5,5,0.08)
                )
                `,
            }}
          />

          {/* Emerald Ambient Glow */}
          <div
            className="
              absolute
              inset-0
            "
            style={{
              background:
                `
                radial-gradient(
                  circle at bottom left,
                  rgba(0,199,140,0.12),
                  transparent 52%
                )
                `,
            }}
          />
        </div>

        {/* Floating Card */}
        <div
          className="
            absolute
            bottom-4
            left-4
            right-4

            rounded-2xl
            border
            p-4
          "
          style={{
            background:
              "rgba(8,17,13,0.62)",

            borderColor:
              "rgba(255,255,255,0.08)",

            backdropFilter:
              "blur(16px) saturate(180%)",

            WebkitBackdropFilter:
              "blur(16px) saturate(180%)",
          }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.24em]
                "
                style={{
                  color:
                    "var(--color-gold-primary)",
                }}
              >
                Precision Engineering
              </p>

              <h3
                className="
                  mt-2
                  text-lg
                  font-bold
                "
              >
                CNC Fiber Laser Systems
              </h3>
            </div>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className="
                    h-2
                    rounded-full
                    transition-all
                    duration-500
                  "
                  style={{
                    width:
                      index === activeIndex
                        ? "22px"
                        : "8px",

                    background:
                      index === activeIndex
                        ? "var(--color-green-light)"
                        : "rgba(255,255,255,0.18)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}