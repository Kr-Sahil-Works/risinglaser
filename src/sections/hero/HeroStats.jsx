import Reveal from "../../components/ui/Reveal";

const stats = [
  {
    value: "7+",
    label: "Years Experience",
  },

  {
    value: "99%",
    label: "Precision Accuracy",
  },
];

export default function HeroStats() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-4

        sm:grid-cols-3
      "
    >
      {stats.map((item, index) => (
        <Reveal
          key={item.label}
          delay={index * 0.08}
        >
          <div
            className="
              rounded-[28px]
              border
              p-6
              transition-all
              duration-300

              hover:-translate-y-1
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

              boxShadow:
                `
                inset 0 1px 0 rgba(255,255,255,0.03)
                `,
            }}
          >
            <h3
              className="
                text-3xl
                font-black
                tracking-tight
              "
              style={{
                color:
                  "var(--color-green-light)",
              }}
            >
              {item.value}
            </h3>

            <p
              className="
                mt-2
                text-sm
              "
              style={{
                color:
                  "var(--color-text-secondary)",
              }}
            >
              {item.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}