import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
      className="
        fixed
        left-0
        right-0
        top-0
        z-120
        h-0.5
      "
    >
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(to right, var(--color-green-primary), var(--color-green-light))",

          boxShadow:
            "0 0 12px var(--color-glow-green)",
        }}
      />
    </motion.div>
  );
}