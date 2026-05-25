import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../../ui/Container";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="
        overflow-hidden
        py-24
      "
    >
      <Container>
        <div
          className="
            relative
            overflow-hidden

            rounded-[38px]
            border
            border-white/10

            bg-linear-to-br
            from-emerald-500/10
            via-zinc-950
            to-black

            p-8
            sm:p-12
            lg:p-16
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              -right-20
              -top-20

              h-72
              w-72
              rounded-full

              blur-3xl
            "
            style={{
              background:
                "rgba(0,199,140,0.14)",
            }}
          />

          {/* Laser Line */}
          <motion.div
            animate={{
              x: [
                "-10%",
                "110%",
              ],
              opacity: [
                0,
                1,
                0,
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.8,
              ease: "linear",
            }}
            className="
              absolute
              top-0
              h-[2px]
              w-44
            "
            style={{
              background:
                "linear-gradient(to right, transparent, #00c78c, transparent)",

              boxShadow:
                "0 0 18px rgba(0,199,140,0.9)",
            }}
          />

          <div
            className="
              relative
              z-10

              mx-auto
              max-w-3xl
              text-center
            "
          >
            {/* Badge */}
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2

                rounded-full
                border

                border-emerald-500/20
                bg-emerald-500/10

                px-4
                py-2

                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]

                text-emerald-300
              "
            >
              <Sparkles size={14} />
              Start Your Project
            </div>

            {/* Heading */}
            <h2
              className="
                text-3xl
                font-black
                leading-tight

                sm:text-5xl
                lg:text-6xl
              "
            >
              Precision Manufacturing
              <br />

              Built For Modern
              Industry
            </h2>

            {/* Description */}
            <p
              className="
                mt-6

                text-base
                leading-8
                text-zinc-400

                sm:text-lg
              "
            >
              Partner with
              RisingLasers for
              high-performance
              industrial laser
              cutting and advanced
              fabrication solutions.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link to="/quote">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden

                    rounded-2xl

                    px-8
                    py-4

                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.18em]

                    text-black
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, #00c78c, #00a06f)",

                    boxShadow:
                      "0 14px 40px rgba(0,199,140,0.28)",
                  }}
                >
                  {/* Shine */}
                  <motion.div
                    animate={{
                      x: [
                        "-120%",
                        "220%",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.6,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-20

                      rotate-12
                      bg-white/30
                      blur-xl
                    "
                  />

                  <span
                    className="
                      relative
                      z-10

                      flex
                      items-center
                      gap-3
                    "
                  >
                    Get Quote

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-1
                      "
                    />
                  </span>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}