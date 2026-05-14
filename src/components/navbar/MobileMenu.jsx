import { AnimatePresence, motion } from "framer-motion";

import Container from "../../ui/Container";

export default function MobileMenu({
  isOpen,
  navLinks,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -8,
          }}
          transition={{
            duration: 0.24,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            md:hidden
            border-t
          "
          style={{
            borderColor:
              "var(--color-border)",

            background:
              "rgba(4, 5, 5, 0.72)",

            backdropFilter:
              "blur(18px) saturate(160%)",

            WebkitBackdropFilter:
              "blur(18px) saturate(160%)",
          }}
        >
          <Container>
            <div className="flex flex-col py-6">
              {/* Nav Links */}
              <nav className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{
                      opacity: 0,
                      y: 6,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className={`
                      group
                      flex
                      items-center
                      justify-between
                      py-4
                      text-sm
                      font-medium
                      transition
                      duration-300

                      ${
                        index !== navLinks.length - 1
                          ? "border-b"
                          : ""
                      }
                    `}
                    style={{
                      color:
                        "var(--color-text-secondary)",

                      borderColor:
                        "rgba(255,255,255,0.04)",
                    }}
                  >
                    <span
                      className="
                        transition
                        duration-300
                        group-hover:text-(--color-green-light)
                      "
                    >
                      {link}
                    </span>

                    <span
                      className="
                        text-xs
                        tracking-[0.18em]
                      "
                      style={{
                        color:
                          "var(--color-text-muted)",
                      }}
                    >
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                }}
                className="
                  mt-6
                  rounded-[28px]
                  p-5
                "
                style={{
                  background:
                    "var(--color-surface)",

                  border:
                    "1px solid var(--color-border)",
                }}
              >
                <p
                  className="
                    text-sm
                    leading-6
                  "
                  style={{
                    color:
                      "var(--color-text-secondary)",
                  }}
                >
                  Premium industrial laser cutting
                  solutions engineered for modern
                  manufacturing.
                </p>

                <button
                  className="
                    mt-5
                    w-full
                    rounded-2xl
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    transition
                    duration-300
                  "
                  style={{
                    background:
                      "var(--color-green-primary)",

                    color:
                      "var(--color-text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--color-green-secondary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "var(--color-green-primary)";
                  }}
                >
                  Get Quote
                </button>
              </motion.div>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}