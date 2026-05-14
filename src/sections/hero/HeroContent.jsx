import { motion } from "framer-motion";

import Button from "../../ui/Button";

import Reveal from "../../components/ui/Reveal";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Badge */}
      <Reveal>
        <div
          className="
            inline-flex
            items-center

            rounded-full
            border

            px-5
            py-2

            text-[11px]
            font-medium
            uppercase
            tracking-[0.28em]
          "
          style={{
            background:
              "rgba(0,199,140,0.08)",

            borderColor:
              "rgba(0,199,140,0.18)",

            color:
              "var(--color-green-light)",
          }}
        >
          Precision Industrial Manufacturing
        </div>
      </Reveal>

      {/* Heading */}
      <Reveal delay={0.08}>
        <h1
          className="
            mt-7

            text-4xl
            font-black
            leading-[1.05]
            tracking-tight

            sm:text-5xl
            lg:text-7xl
          "
        >
          Advanced Laser
          <span
            style={{
              color:
                "var(--color-green-light)",
            }}
          >
            {" "}
            Cutting
          </span>

          <br />

          Solutions For
          <br />

          Modern Industry
        </h1>
      </Reveal>

      {/* Description */}
      <Reveal delay={0.14}>
        <p
          className="
            mt-7
            max-w-xl

            text-base
            leading-8

            sm:text-lg
          "
          style={{
            color:
              "var(--color-text-secondary)",
          }}
        >
          Premium industrial laser cutting
          engineered for aerospace,
          automotive, heavy fabrication,
          and precision manufacturing.
        </p>
      </Reveal>

      {/* CTA */}
      <Reveal delay={0.2}>
   <div
  className="
    mt-10
    flex
    flex-col
    gap-4

    sm:flex-row
  "
>
  <motion.a
    href="#services"
    whileHover={{
      y: -2,
    }}
    whileTap={{
      scale: 0.98,
    }}
    className="
      inline-flex
      items-center
      justify-center

      rounded-2xl

      px-6
      py-3

      text-sm
      font-semibold

      transition-all
      duration-300
    "
    style={{
      background:
        "var(--color-green-primary)",

      color:
        "var(--color-text-primary)",

      boxShadow:
        "0 10px 30px rgba(0,106,78,0.28)",
    }}
  >
    Explore Services
  </motion.a>

  <motion.a
    href="#contact"
    whileHover={{
      y: -2,
    }}
    whileTap={{
      scale: 0.98,
    }}
    className="
      inline-flex
      items-center
      justify-center

      rounded-2xl
      border

      px-6
      py-3

      text-sm
      font-semibold

      transition-all
      duration-300
    "
    style={{
      borderColor:
        "rgba(255,255,255,0.08)",

      background:
        "rgba(255,255,255,0.03)",

      color:
        "var(--color-text-primary)",

      backdropFilter:
        "blur(14px)",

      WebkitBackdropFilter:
        "blur(14px)",
    }}
  >
    Get Quote
  </motion.a>
</div>
      </Reveal>
    </div>
  );
}